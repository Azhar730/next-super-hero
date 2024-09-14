import React from 'react';

const getDetailsPost = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}

const PostDetails = async({params}) => {
    const {title,body} =await getDetailsPost(params.id)
    return (
        <div>
            <h1 className='text-2xl font-bold text-gray-800'>{title}</h1>
            <h1 className='text-lg font-medium text-gray-400'>{body}</h1>
        </div>
    );
};

export default PostDetails;