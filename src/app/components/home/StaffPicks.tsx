import { staffPick } from '@/app/actions/post.actions'
import React from 'react'

interface staffPickInterface {
    id: string,
    title: string,
    createAt: Date,
    owner: {
        profile: string,
        firstname: string,
        lastname: string
    }
}

const StaffPicks = async () => {

    const data = await staffPick()

  return (
    <section className=''>
        <div className=" ">
            <h3 className='side-title'>Staff Picks</h3>
            <div className='flex flex-col gap-5 mt-4'>
                {
                    data.map((ele: staffPickInterface, index: number) => {
                        const {title, createAt, id, owner} = ele
                        const {profile, firstname, lastname} = owner
                        const date = new Date(createAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short"
                        })

                        return (
                            <div className='' key={index}>
                                <div className='flex items-center gap-1'>
                                    <img src={profile} alt="profileImage" className='profile'/>
                                    <span className='text-sm tracking-tight text-black/75'>{firstname + " " + lastname}</span>
                                </div>
                                <h1 className='font-bold text-sm mt-2'>
                                    {title}
                                </h1>
                                <p className='text-black/80 text-sm mt-2'>{date}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default StaffPicks