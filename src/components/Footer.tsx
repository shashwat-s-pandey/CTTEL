import React from 'react'
import { Navbar, NavbarItem } from '@nextui-org/navbar'
import { Link } from '@nextui-org/react'

const Footer = () => {
  return (
    <div className='items-center bg-gray-400 w-full absolute bottom-0'>
        <Navbar className='items-center'>
            <div className='flex gap-4'>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        Disclaimer
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        REIS
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        RBS
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        ICMS
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        TMS
                    </Link>
                </NavbarItem>
            </div>
            <div className='flex gap-4'>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        NGET
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        RCT
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        WECRS
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        FOIS
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='#' className='text-xs hover:text-white uppercase'>
                        NDMA
                    </Link>
                </NavbarItem>
            </div>
        </Navbar>
        <p className='text-center text-xs'>Designed & Developed by Centre for Railway Information Systems (CRIS), Chanakyapuri, New Delhi-110021.
        </p>
        <p className='text-center text-xs pb-5'> Copyright©2021 - CRIS All Rights Reserved.</p>
    </div>
  )
}

export default Footer