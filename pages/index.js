import React, { useState } from 'react'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import arrayCeil from '../assets/arrayCeil'

export default function Hero() {
  //
    const [heroImage, setHeroImage] = useState('hero-1920.jpg')
    const imageSizes = [600, 1280, 1920]

    const { observe, unobserve, width, height, entry } = useDimensions({
        onResize: ({ observe, unobserve, width, height, entry }) => {
            setHeroImage(`hero-${arrayCeil(imageSizes, width)}.jpg`)

            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
    });

    return (
        <div
            ref={observe}
            class="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black myHero">
            <Image
                src='/homepage-header-background-V2.gif'
                alt="Hero Image"
                className="opacity-60 object-cover object-left-bottom"
                fill
            />
            <div class="flex flex-col justify-center items-center px-3">
                <h1 class=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">WELCOME TO <br />
                    <span class="text-primary">MY COMPANY</span>
                </h1>
                <p class="mt-5 text-center text-lg text-white opacity-90">Making tomorrows widgets today...</p>
                
            </div>
        </div>
    )
}