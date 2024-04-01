import { useTheme } from "@/context/ThemeContext"
import Image from "next/image"

const Card = ({imgObj}: any) => {
    const {theme} = useTheme()
  return (
    <div className={` w-[237px] h-[511px] min-w-[237px] min-h-[511px] ${theme === "dark" ? 'bg-[#3B3E47]': ""}  text-black p-2 pb-4 flex flex-col gap-2 justify-between
    shadow-lg hover:scale-105 transition-all ease-in-out duration-700`}>
        <Image
            src={imgObj.src}
            alt={imgObj.alt}
            className=" h-[385.31px] object-cover"
            width={217}
            height={385.31}
        />
        <h2 className={`${theme === "dark" ? 'text-white': ''} pl-2`}>{imgObj.heading}</h2>

        <div className={`${theme === "dark" ? "bg-[#292B32]" : "bg-gray-100"} p-2 pr-12 flex items-center justify-between`}>
            <div className="flex flex-col">
                <span className={`${theme === 'dark' ? 'text-[#DFDFDF]' : 'text-gray-500'} text-[12px]`}>Total Events</span>
                <span className={`${theme === 'dark' ? 'text-white' : ''} text-[14px]`}>{imgObj.events} Events</span>
            </div>
            
            <div className=" flex flex-col">
                <span className={`${theme === 'dark' ? 'text-[#DFDFDF]' : 'text-gray-500'} text-[12px]`}>Sport</span>
                <span className={`${theme === 'dark' ? 'text-white' : ''} text-[14px]`}>{imgObj.sport}</span>
            </div>
        </div>
    </div>
  )
}

export default Card