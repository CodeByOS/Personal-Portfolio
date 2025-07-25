import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { CircleArrowOutUpRight } from 'lucide-react'

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading">
            Explore some of my{' '}
            <span className="text-purple-400 font-bold">latest projects</span>
        </h1>

    <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                <PinContainer title={link} href={link}>
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                            <img src="./bg.png" alt="bg-img" />
                        </div>
                        <img src={img} alt={title} className="z-10 absolute bottom-0" />
                    </div>

                <h1 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl line-clamp-1 mt-3">{title}</h1>

                <p className="text-sm sm:text-base md:text-base lg:text-lg font-light text-gray-300 line-clamp-3 mt-1">
                    {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                            <div
                            key={icon}
                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{ transform: `translateX(-${5 * index + 2}px)` }}
                            >
                            <img src={icon} alt={icon} className="p-2" />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center space-x-1">
                        <p className="text-purple-400 text-sm sm:text-base font-light">Visit Live Website</p>
                        <CircleArrowOutUpRight size={18} className="text-purple-400" />
                    </div>
                </div>
            </PinContainer>
        </div>
    ))}
    </div>
</div>
)
}

export default RecentProjects