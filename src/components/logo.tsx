'use client'
import Link from 'next/link'
import React from 'react'

function LodgeImage() {
    return (
        // <>
        // <Link href="/" className="flex items-center gap-2">
        //         <Image src="/logo.svg" alt="LodgeFinder logo" width={150} height={40} className="text-primary scale-125 mb-2 dark:hidden" />
        //         <Image src="/logo1.svg" alt="LodgeFinder logo" width={150} height={40} className="text-primary scale-125 mb-2 dark:inline-block hidden" />
        //         {/* <span className="text-xl font-semibold sm:inline-block hidden">LodgeFinder</span> */}
        //       </Link>
        // </>
        <Link href="/">


            <div className='flex gap-1 font-bold md:text-xl sm:text-xl text-normal'>
                {
                    ['L', 'O', 'D', 'G', 'E'].map((i, index) => (
                        <span key={index} className=''>{i}</span>
                    ))
                    // lodge
                }
                {
                    ['ह', 'ज़ा', 'र'].map((i, index) => (
                        <span key={index} className='text-primary'>{i}</span>
                    ))
                }
            </div>
        </Link>
    )
}

export default LodgeImage