import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Cleaning database...');
  await prisma.like.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.follower.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  console.log('👤 Creating 30 users...');
  const users = await Promise.all(
    Array.from({ length: 30 }).map(() =>
      prisma.user.create({
        data: {
          profile: faker.image.avatar(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.password(), // hash in real apps
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          about: faker.lorem.sentences(2),
        },
      })
    )
  );

  const posts = [];

  console.log('📝 Creating 2 posts per user...');
  for (const user of users) {
    for (let i = 0; i < 2; i++) {
      const post = await prisma.post.create({
        data: {
          title: faker.lorem.sentence(),
          subtitle: faker.lorem.sentence(),
          topic: faker.helpers.arrayElement([
            'Tech', 'Health', 'Business', 'Travel', 'Food', 'Lifestyle', 'Education'
          ]),
          content: Array.from({ length: 5 })
                        .map(() => faker.lorem.words(150))
                        .join('\n\n'),
          image: faker.image.urlPicsumPhotos(),
          ownerId: user.id,
        },
      });
      posts.push(post);
    }
  }

  console.log('💬 Adding comments...');
  for (const post of posts) {
    const numComments = faker.number.int({ min: 2, max: 5 });
    for (let i = 0; i < numComments; i++) {
      const user = faker.helpers.arrayElement(users);
      await prisma.comment.create({
        data: {
          comment: faker.lorem.sentence(),
          userId: user.id,
          postId: post.id,
        },
      });
    }
  }

  console.log('❤️ Adding likes...');
  for (const post of posts) {
    const numLikes = faker.number.int({ min: 5, max: 15 });
    const likedUsers = faker.helpers.arrayElements(users, numLikes);
    for (const user of likedUsers) {
      await prisma.like.create({
        data: {
          userId: user.id,
          postId: post.id,
        },
      });
    }
  }

  console.log('🔗 Creating followers...');
  for (const user of users) {
    const followingUsers = faker.helpers.arrayElements(
      users.filter(u => u.id !== user.id),
      faker.number.int({ min: 3, max: 10 })
    );
    for (const followee of followingUsers) {
      await prisma.follower.create({
        data: {
          followerId: user.id,
          followingId: followee.id,
        },
      });
    }
  }

  console.log('✅ Seeding complete!');
}

main()
  .catch(e => {
    console.error('❌ Error while seeding:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());


// console.log("      " + "ritesh")