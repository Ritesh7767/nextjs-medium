import { PiHandsClappingThin } from "react-icons/pi"
import { getPost, getUserPost } from "../../actions/post.actions"
import { FaRegComment } from "react-icons/fa"
import { TfiComment } from "react-icons/tfi"
import Link from "next/link"
import { postInterface } from "@/app/components/home/AllPost"
import PostCard from "@/app/components/home/PostCard"

interface dataInterface {
    id: string,
    title: string,
    subtitle: string,
    content: string,
    image: string,
    createAt: Date,
    ownerId: string,
    owner: {
        profile: string,
        firstname: string,
        lastname: string
    },
    _count: {
        Likes: number,
        Comment: number
    }
    
}
export default async ({searchParams}: {searchParams: {id: string}}) => {
    const {id} = await searchParams
    const post = await getPost(id) as dataInterface
    const userPost = await getUserPost(post.ownerId, 4) as postInterface[]
    const paras = post.content.split("\n")
    const read = paras.length + 2
    const date = new Date(post.createAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })
    return (
        <section className="px-4">
            <div>
                <h1 className="text-3xl font-extrabold" >{post.title}</h1>
                <p className="font-medium text-lg tracking-tight text-black/50 mt-1">{post.subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4 sm:items-center sm:justify-end">
                <div className="flex gap-3 text-black/75 text-sm font-medium items-center">
                    <span className="">{read} min read</span>
                    <span className="">{date}</span>
                </div>
                <Link href={`/user?id=${post.ownerId}`} className="flex gap-5 items-center mt-3">
                    <img
                        className="w-9 h-9 rounded-full" 
                        src={post.owner.profile} alt="" />
                    <span className="font-medium text-sm text-black/75">{post.owner.firstname} {post.owner.lastname}</span>
                    <button className="btn bg-white text-black border border-black">Follow</button>
                </Link>
            </div>
            <div className="flex gap-5 mt-2 mb-2">
                <div className="flex gap-1 items-center">
                    <PiHandsClappingThin/>
                    <span>{post._count.Likes}</span>
                </div>
                <div className="flex gap-1 items-center">
                    <TfiComment className="" />
                    <span>{post._count.Comment}</span>
                </div>
            </div>
            <div>
                <img src={post.image} className="" />
            </div>
            <article className="font-serif text-black/80 mt-2">
                {
                    paras.map((para: string, index: number) => (
                        <>
                            <p key={index} className="leading-6">{para}</p>
                            <p className="h-2"></p>
                        </>

                ))
            }
            </article>
            <div>
                <h2>More from {post.owner.firstname} {post.owner.lastname}</h2>
                <div>
                    {
                        userPost.map((ele: postInterface, index: number) => <PostCard ele={ele} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}