import { useTheme } from "@/context/ThemeContext"
import Image from "next/image"

const SpotlightCard = ({imgObj}: any) => {
    const {theme} = useTheme()
  return (
    <div className={`w-[257px] h-[624px] ${theme === "dark" ? "bg-[#3B3E47]" : ""}  text-black p-2 pb-4 flex flex-col gap-1 justify-between items-center 
    shadow-lg hover:scale-105 transition-all ease-in-out duration-700`}>
        <div className="pb-4 border-b-2 border-dashed border-[#818A97]">
        <Image
            src={imgObj.src}
            alt={imgObj.alt}
            className="object-cover"
            width={226}
            height={401}
        />
        </div>
        

        <div className={`flex flex-col gap-2 px-2 items-center ${theme === "dark" ? "text-white" : ""} `}>
            <p>{imgObj.heading}</p>
            <p>{imgObj.time}</p>
            <p className="text-center">{imgObj.location}</p>
        </div>
        <div className="text-white bg-black p-2 px-4 text-[12px]">
            <p>{imgObj.collection_name}</p>
        </div>
    </div>
  )
}

export default SpotlightCard