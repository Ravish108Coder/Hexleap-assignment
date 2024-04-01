import { useTheme } from "@/context/ThemeContext"
import Image from "next/image"


const AdvertisementCard = ({ imgObj }: any) => {
    const { theme } = useTheme()
    return (
        <div className={`relative w-[237px] h-[511px] min-w-[237px] min-h-[511px] ${theme === "dark" ? 'bg-[#3B3E47]' : ''}  text-black p-2 flex flex-col gap-4 justify-start
        shadow-lg hover:scale-105 transition-all ease-in-out duration-700`}>
            <Image
                src={imgObj.src}
                alt={imgObj.alt}
                width={217}
                height={218}
            />
            <div className="flex flex-col gap-1 items-center px-4">
                <h2 className={`${theme === "dark" ? 'text-white': ''} text-[20px]`}>{imgObj.title}</h2>
                <p className={`${theme === "dark" ? 'text-[#DFDFDF]': ''} text-[12.8px]`}>{imgObj.content}</p>
            </div>
            <span className={`absolute top-[8px] right-[10px] py-1 px-2 text-[12px] ${theme === "dark" ? 'bg-black text-white' : 'bg-gray-100'} `}>Ad</span>
        </div>
    )
}

export default AdvertisementCard