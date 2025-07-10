import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <section className="relative h-screen pt-36 pb-20 dark:bg-black-100 overflow-hidden">
      <Spotlight />
      
      <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.3] bg-grid-black/[0.2]">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />        
      </div>

      <div className="flex justify-center relative my-2 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with Next.js
            </h2>
          </div>
      </div>
    </section>
  )
}

export default Hero
