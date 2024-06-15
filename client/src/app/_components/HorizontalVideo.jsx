import { useRouter } from 'next/navigation';
import React from 'react'

const HorizontalVideo = ({ video }) => {

  const router = useRouter()

  const handleClick = () => router.push(`/video?id=${video.id}`);

  return (
    <div onClick={handleClick} className='pb-6'>
        <a class="rounded-lg shadow flex flex-row grow w-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
            <img class="object-cover h-auto w-48 rounded-none rounded-s-lg" src={video?.thumbnail} alt="" />
            <div class="flex flex-col p-2 pl-4 grow leading-normal">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-white">{video?.title}</h5>
                <p class="font-normal text-gray-400">{video?.description}</p>
            </div>
        </a>
    </div>
  )
}

export default HorizontalVideo