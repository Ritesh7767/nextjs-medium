import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { ownerInterface } from '../home/AllPost'

const UserInfo = ({user}: {user: ownerInterface}) => {

    const {profile, firstname, lastname, _count} = user
  return (
    <section className="mt-4">
        <div className="w-[90%] m-auto">
            <div className="flex justify-between gap-1 sm:items-start">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-6">
                        <div>
                            <img
                                className="w-14 h-14 rounded-full lg:hidden"
                                src={profile} alt="" />
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <p className="font-bold text-2xl">{firstname + " " + lastname}</p>
                            <p className="text-black/70 lg:hidden">{_count.Followers} followers</p>
                        </div>
                    </div>
                    <div className="sm:hidden">
                        <button className="btn w-full bg-green-800" >Follow</button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row-reverse justify-between sm:justify-normal sm:gap-2">
                    <BsThreeDots className="w-6 h-6"  />
                    <CiMail className="mail sm:mr-3 lg:hidden" />
                    <button className="hidden sm:block bg-green-800 btn lg:hidden">Follow</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UserInfo