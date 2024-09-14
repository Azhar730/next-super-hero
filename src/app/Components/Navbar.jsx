'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const router = useRouter()
    const pathName = usePathname();
    const links = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Time',
            path: '/time'
        },
    ];
    const handler = () => {
        router.push('/login')
    }
    if (pathName.includes('dashboard'))
        return (
            <div className='bg-green-200 p-2'>
                Dashboard Layout
            </div>
        )

    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-red-200">
                <a href='/' className='text-xl font-bold'>Next <span className='text-teal-800'>Meal</span></a>
                <ul className="text-lg font-semibold text-gray-700 flex items-center justify-center gap-x-6">
                    {
                        links?.map((link) => (
                            <Link
                                className={`${pathName === link.path ? 'text-cyan-700' : 'text-gray-700'}`}
                                key={link.path}
                                href={link.path}
                            >
                                {link.title}
                            </Link>
                        ))
                    }
                </ul>
                <button className='bg-[#FFF] px-4 py-2 rounded-lg text-lg font-semibold text-teal-500' onClick={handler}>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;
