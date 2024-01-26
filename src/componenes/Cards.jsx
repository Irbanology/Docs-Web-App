import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Cards({ data , refrence }) {
    return (
        <>
            <motion.div drag dragConstraints={refrence} whileDrag={{scale : 1.2}} className="relative flex-shrink-0 py-10 px-5 w-60 h-72 rounded-[45px] overflow-hidden bg-zinc-900/90 text-white ">
                <FaRegFileAlt />
                <p className='text-sm leading-tight mt-5'>{data.desc}</p>
                <div className="absolute left-0 bottom-0  w-full ">
                    <div className="flex items-center justify-between  px-8 py-3 mb-2">
                        <h5>{data.filesize}</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center' >
                            {data.close ? <IoClose /> : <LuDownload size='.7em' color='#fff' />}
                        </span>
                    </div>
                    {data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
                        <h3 className="text-sm">{data.tag.tagTitle}</h3>
                    </div>)}
                </div>
            </motion.div>
        </>
    )
}

export default Cards