'use client'
import Link from 'next/link'
import React, { use } from 'react'

import { useState, useEffect } from 'react'

const ScrollToTop = () => {

    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    <Link href={"#home"} className={`fixed bottom-5 right-5 z-50 bg-slate-800 
    text-white w-12 h-12 rounded-full text-center hover:bg-slate-700 
    cursor-pointer transition-all duration-300 ${scrolling ? "opacity-100" : "opacity-0"}`}>
        <i className="ri-arrow-up-line ri-2x"> </i>
    </Link>
  )
}

export default ScrollToTop
