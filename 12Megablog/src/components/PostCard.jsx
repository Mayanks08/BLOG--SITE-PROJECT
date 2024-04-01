import React from 'react'
import appwriteService from '../Appwrite/conf'
import {Link} from "react-router-dom"

function PostCard({$id,featuredImage,title}) {
  return (
   <Link to={`/post/${$id}`}>
    <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className='w-full justify-center mb-4'>
        <img src={appwriteService.getFilePreview(featuredImage)} alt='title-img' className='rounded-xl'/>
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
    </div>
   </Link>
  )
}

export default PostCard;