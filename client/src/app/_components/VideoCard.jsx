import React from 'react'

export const VideoCard = () => {
  return (
    <div className="border rounded-lg shadow bg-gray-800 border-gray-700 h-fit cursor-pointer max-w-72">
            <a>
                <img className="rounded-t-lg" src="./img1.jpg" alt="" />
            </a>
            <div className="p-3">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021.</p>
            </div>
        </div>
  )
}
