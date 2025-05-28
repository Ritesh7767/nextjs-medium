import { getFollowings } from "../../actions/follower.actions"
import { getUserPost } from "../../actions/post.actions"
import { getUser } from "../../actions/user.actions"
import UserInfo from "../../components/user/UserInfo"
import Navigator from "../../components/user/Navigator"
import PostCard from "../../components/home/PostCard"
import { postInterface } from "../../components/home/AllPost"
import UserDetails from "@/app/components/user/UserDetails"
import Following from "@/app/components/user/Following"

interface searchParamsProps {
    searchParams: {
        id: string
    }
}

export default async ({searchParams}:searchParamsProps) => {

    const {id} = await searchParams
    console.log(typeof id)
    const user = await getUser(id)
    const userPost = await getUserPost(id) as postInterface[]
    const userFollowings = await getFollowings(id)

    console.log(user)
    console.log(userPost)
    console.log(userFollowings)

    if (!user) {
        return (
            <h1>User not found</h1>
        )
    }
    return (
        <div>
            <div className="md:flex">
                <div className="px-10 sm:px-20 md:px-24">
                    <UserInfo user={user}/>
                    <Navigator/>
                    {
                        userPost.map((ele: postInterface, index: number) => <PostCard ele={ele} key={index}/>)
                    }
                </div>
                <div className="hidden lg:block lg:flex-1 px-5">
                    <UserDetails user={user}/>
                    <Following data={userFollowings} />
                </div>
            </div>
        </div>
    )
}