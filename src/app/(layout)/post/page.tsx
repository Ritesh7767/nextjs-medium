import { PiHandsClappingThin } from "react-icons/pi"
import { getPost, getRecommendation, getUserPost } from "../../actions/post.actions"
import { FaRegComment } from "react-icons/fa"
import { TfiComment } from "react-icons/tfi"
import Link from "next/link"
import { postInterface } from "@/app/components/home/AllPost"
import PostCard from "@/app/components/home/PostCard"
import LikeComment from "@/app/components/post/LikeComment"
import FollowBtn from "./FollowBtn"
import DisplayComment from "@/app/components/post/DisplayComment"
import RecommendedCard from "@/app/components/post/RecommendedCard"
import DisplayRecommended from "@/app/components/post/DisplayRecommended"

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
    const recommendedPost = await getRecommendation()
    const paras = post.content.split("\n")
    const read = paras.length + 2
    const date = new Date(post.createAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })

    console.log(userPost)

    return (
        <section className="px-4 md:px-20 lg:px-28 overflow-x-hidden relative">
            <div>
                <h1 className="text-3xl font-extrabold" >{post.title}</h1>
                <p className="font-medium text-lg tracking-tight text-black/50 mt-1">{post.subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4 sm:items-center sm:justify-end">
                <div className="flex gap-3 text-black/75 text-sm font-medium items-center">
                    <span className="">{read} min read</span>
                    <span className="">{date}</span>
                </div>
                <div className="flex gap-3">
                    <Link href={`/user?id=${post.ownerId}`} className="flex gap-2 items-center mt-3">
                        <img
                            className="w-9 h-9 rounded-full" 
                            src={post.owner.profile} alt="" />
                        <span className="font-medium text-sm text-black/75">{post.owner.firstname} {post.owner.lastname}</span>
                    </Link>
                    <FollowBtn id={post.ownerId} className="btn bg-white text-black border border-black" /> 
                </div>
            </div>
            <div className="flex gap-5 mt-2 mb-2">
                <LikeComment like={post._count.Likes} comment={post._count.Comment} id={post.id} />
            </div>
            <div className="h-[50vh]">
                <img src={post.image} className="w-full h-full " />
            </div>
            <article className="font-serif text-black/80 mt-2">
                {
                    paras.map((para: string, index: number) => (
                        <div key={index}>
                            <p className="leading-6">{para}</p>
                            <p className="h-2"></p>
                        </div>

                ))
            }
            </article>
            <div>
                <DisplayRecommended title={post.owner.firstname + " " + post.owner.lastname} posts={userPost} />
                <DisplayRecommended title="Medium" posts={recommendedPost}/>
            </div>
        </section>
    )
}