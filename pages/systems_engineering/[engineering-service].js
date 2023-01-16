import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EngineeringService = () => {

    const service = "Operations Research and Analysis"
    const link = "https://hacenterprisenet.sharepoint.com/sites/HACEnterprise-HACWebsite/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FHACEnterprise%2DHACWebsite%2FShared%20Documents%2FHAC%20Website%2FOperations%20Research%20%26%20Analysis&viewid=6eab7634%2D4a1f%2D4601%2D9290%2D36c9e69415b5"
  return (
    <>
    <div className='bg-white' >
    <div className='bg-slate-200 min-h-[4rem]'>
    <h1 className='text-center text-aqua text-6xl p-8'>
        {service}
    </h1>



    </div>
    <div>
    <h3 className='text-aqua text-3xl m-8 mb-0 mr-16 font-bold'>What is {service}?</h3>

    <div className='grid grid-cols-2'>
        <div className='col-span-1 flex flex-col justify-center'>
            <p className='p-8 text-xl pr-16'>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.</p>
        </div>
        <div className='col-span-1 flex flex-col justify-start ml-16'>
            <Image
            src='/ISE-Infographic-09132021@2x.jpg'
            alt='operations image'
            width={400}
            height={200}
            >

            </Image>
        </div>


    </div>

    </div>

    <div>
    <h3 className='text-aqua text-3xl m-8 mb-0 mr-16 font-bold underline' >
        
        <Link
        href={link}
        >
        View my {service} files...
        </Link>
        
        
        </h3>

    <div className='grid grid-cols-2'>
        <div className='col-span-1 flex flex-col justify-center'>
            <p className='p-8 text-xl pr-16'>See on your company's associated Sharepoint site </p>
        </div>
        <div className='col-span-1 flex flex-col justify-start ml-16'>
            <Link href={link}>
            
            <Image
            src='/sharepoint.png'
            alt='sharepoint image'
            width={400}
            height={200}
            >

            </Image>
            </Link>
        </div>


    </div>

    </div>
    


    </div>
    </>
  )
}

export default EngineeringService
