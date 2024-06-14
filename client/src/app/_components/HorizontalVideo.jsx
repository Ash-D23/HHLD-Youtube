import React from 'react'

const HorizontalVideo = ({ video }) => {
  return (
    <div className='pb-6'>
        <a href="#" class="rounded-lg shadow flex flex-row grow w-full bg-gray-800 hover:bg-gray-700">
            <img class="object-cover h-auto w-48 rounded-none rounded-s-lg" src={video?.thumbnail} alt="" />
            <div class="flex flex-col p-2 pl-4 grow leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{video?.title}</h5>
                <p class="font-normal text-gray-400">{video?.description}</p>
            </div>
        </a>
    </div>
  )
}

export default HorizontalVideo