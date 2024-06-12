import React from 'react'

export const VideoCard = ({ video }) => {
  return (
    <div className="border rounded-lg shadow bg-gray-800 border-gray-700 h-fit cursor-pointer max-w-72">
            <a>
                <img className="rounded-t-lg h-48" src={video.thumbnail} alt="" />
            </a>
            <div className="p-3">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{video.title}</h5>
                <p className="font-normal text-gray-400">{video.description}</p>
            </div>
        </div>
  )
}
