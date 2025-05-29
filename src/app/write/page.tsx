"use client"

import React, { useRef, useState } from "react"
import { RiImageAddFill } from "react-icons/ri"

export default function Page (){

    const [imagePreview, setImagePreview] = useState<string>("")
    const inputFile = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return 

        const url = URL.createObjectURL(file)
        setImagePreview(url)
    }

    return (
    <section className="">
        <div className="flex justify-center items-center">
            <input ref={inputFile} onChange={handleChange} type="file" className="hidden" /><br />
            <img alt="" src={imagePreview}/>
        </div>
        <div className="px-5 mt-2">
            <div className="flex justify-between">
                <input type="text" placeholder="Title" className="text-slate-500 focus:text-black outline-none font-serif text-3xl sm:text-3xl" /><br/>
                <div className="text-3xl mr-3">
                    <RiImageAddFill onClick={() => inputFile.current?.click()} className="text-slate-500 cursor-pointer"/>
                </div>
            </div>
            <textarea name="content" id="content" className="text-slate-500 mt-1 outline-none text-lg focus:text-black" placeholder="Tell your story..."/>
        </div>
    </section>
    )
}