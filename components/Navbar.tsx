import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProvides from './AuthProvides'

const Navbar = () => {

    const session = {

    }

    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        width={115}
                        height={43}
                        alt='Flexibble'
                    />
                </Link>
                <div className='x1: flex text-small gap-7'>
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </div>

                <div className='flexCenter gap-4'>
                    {session ? (
                        <>
                            UserPhoto
                            <Link href="/create-project">
                                Share Work
                            </Link>
                        </>
                    ) : (
                        <AuthProvides />
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
