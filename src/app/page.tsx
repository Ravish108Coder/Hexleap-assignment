'use client'

import Card from "@/components/Card";
import Image from "next/image";
import { images } from "../../public/images_sources/upper.js"
import { advImages } from "../../public/images_sources/side.js"
import { spotLightImages } from "../../public/images_sources/down.js"
import AdvertisementCard from "@/components/AdvertisementCard";
import SpotlightCard from "@/components/SpotlightCard";
import ToggleMode from "@/components/ToggleMode";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main className={`min-h-screen flex flex-col items-center justify-evenly gap-10 p-4 py-8 ${theme === "dark" ? "bg-[#292B32]" : "bg-white" }`}>
      <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
       className={`fixed cursor-pointer max-[374px]:right-2 min-[375px]:right-6 min-[425px]:right-8 top-5 border-2 p-2 rounded-lg bg-[#DFDFDf] border-[#DFDFDf] ${theme === 'dark' ? 'bg-[#3B3E47] border-[#3B3E47] text-black': 'text-black'} hover:border-white`}>
        <ToggleMode />
      </div>
      {/* #section - 1 */}
      <div className="w-[80%]">
        <h1 className={`border-b-[2px] inline-block ml-3 mb-6 border-b-[#738FFF] ${theme === "dark" ? "text-white" : "text-black"}
         text-2xl font-bold pb-1
        `}>Sports</h1>
        <div className="flex gap-3 flex-wrap justify-center">
          {images
            .map((img, i) => (
              <Card key={i} imgObj={img} />))}
          {
            advImages.map((imgObj, i) => (
              <AdvertisementCard key={i} imgObj={imgObj} />
            ))

          }
          
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="bg-[#2C9CF0] rounded-[3px] py-[10px] px-[30px]">See More</button>
        </div>
      </div>

      {/* #section - 2  */}
      <div className="w-[80%] p-[5%]" style={{  background: theme==="dark" ? 'linear-gradient(180deg, #18282A 0%, #221A2C 100%)' : '#f4f3f39c' }}>
        <div className="flex flex-col items-center gap-16">
          <div className="w-[70%] flex flex-col gap-4">
            <h2 className={`${theme === 'light'? 'text-black': ''} text-center text-[50px]`}>Collection Spotlight</h2>
            <p className={`${theme === 'light'? 'text-black': ''} text-center text-[14px]`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
          </div>
          <div className="w-full h-full flex items-center justify-between">
            <span className="hover:border-2 p-2 cursor-pointer">
              <svg width="19" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1545 19.6407C11.4246 19.3706 11.5763 19.0043 11.5763 18.6223C11.5763 18.2403 11.4246 17.874 11.1545 17.6038L4.02397 10.4733L11.1545 3.34276C11.4169 3.07107 11.5621 2.70719 11.5588 2.3295C11.5555 1.9518 11.404 1.5905 11.137 1.32342C10.8699 1.05633 10.5086 0.904837 10.1309 0.901554C9.75319 0.898272 9.38931 1.04347 9.11763 1.30587L0.968638 9.45486C0.698583 9.725 0.546875 10.0913 0.546875 10.4733C0.546875 10.8553 0.698583 11.2216 0.968638 11.4917L9.11763 19.6407C9.38776 19.9108 9.7541 20.0625 10.1361 20.0625C10.518 20.0625 10.8844 19.9108 11.1545 19.6407Z" fill="#2C9CF0" />
              </svg>
            </span>
            <div className="flex gap-6 flex-wrap justify-center">
              {
                spotLightImages.map((imgObj, i) => (
                  <SpotlightCard key={i} imgObj={imgObj} />
                ))
              }
            </div>
            <span className="hover:border-2 p-2 cursor-pointer">
              <svg width="19" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.594509 19.6407C0.324454 19.3706 0.172746 19.0043 0.172746 18.6223C0.172746 18.2403 0.324454 17.874 0.594509 17.6038L7.72505 10.4733L0.594509 3.34276C0.332108 3.07107 0.186912 2.70719 0.190194 2.3295C0.193476 1.9518 0.344974 1.5905 0.612056 1.32342C0.879139 1.05633 1.24044 0.904837 1.61814 0.901554C1.99584 0.898272 2.35971 1.04347 2.6314 1.30587L10.7804 9.45486C11.0504 9.725 11.2021 10.0913 11.2021 10.4733C11.2021 10.8553 11.0504 11.2216 10.7804 11.4917L2.6314 19.6407C2.36126 19.9108 1.99492 20.0625 1.61295 20.0625C1.23098 20.0625 0.864645 19.9108 0.594509 19.6407Z" fill="#2C9CF0" />
            </svg></span>
          </div>
        </div>
      </div>
    </main>
  );
}
