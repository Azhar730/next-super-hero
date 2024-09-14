import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';

//For SEO
export const metadata = {
    title: 'Posts Page',
    description: "Get All Posts",
};

const Posts = async () => {
    const postData = await getPosts()
    return (
        <div>
            <div className='grid grid-cols-3'>
            <h1 className="text-2xl font-bold">Ami aitka gechi mainkar chipay</h1>
                {
                    postData.slice(0,20)?.map(post => 
                        <div key={post.id} className='border-2 border-gray-900 p-4'>
                            <h1 className="text-2xl font-bold">{post.title}</h1>
                            <p className="text-lg text-gray-800 font-semibold">{post.body}</p>
                            <button className='px-4 py-2 bg-red-300 my-3 rounded-md font-semibold hover:bg-red-400'><Link href={`/posts/${post.id}`}>See Details</Link></button>
                            
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Posts;