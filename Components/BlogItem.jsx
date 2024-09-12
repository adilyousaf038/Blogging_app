import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({image, category, title, description,id}) => {
  return (
    <div className='max-w-[350px] sm:max-w-[370px] bg-white  border-black '>
        <Link href={`/blogs/${id}`}>
        <Image src={image} alt='' width={400} height={400} className=' h-[300px] rounded-xl' />    
        </Link>
        <p className=' mt-5 px-3 py-2 rounded-full inline-block bg-gray-200 text-sm'>{category}</p> 
        <div className='py-5'>
             <h5 className='mb-2 test-lg font-bold text-2xl cursor-pointer hover:underline tracking-tight text-gray-900' >{title}</h5>
             <p className='mb-3 text-base tracking-tight text-gray-700 '>{description}</p>
              <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center cursor-pointer'>
                  Read more <Image src={assets.arrow} alt='' width={12} className='ml-2 hover:scale-y-50 c'  />
              </Link>
        </div> 
    </div>
  )
}

export default BlogItem
