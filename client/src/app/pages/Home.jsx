"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import Sidebar from "../_components/sidebar";
import dynamic from 'next/dynamic'
import { useVideosStore } from '../zustand/useVideosStore';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const YouTubeHome = () => {

   const { searchedVideos } = useVideosStore();

   return (
       <div className='w-screen home-height dark:bg-gray-800 flex'>
            <Sidebar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {searchedVideos.map(video => (
                <div key={video._source._id}
                    className="border rounded-md overflow-hidden">
                    <div>
                        {/* <ReactPlayer url={video._source.videoUrl}
                            width="360px"
                            height="180px"
                            controls={true}
                        /> */}
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">{video._source.title}</h2>
                        <p className="text-gray-700">Author - {video._source.author}</p>
                        <p className="text-gray-700">{video._source.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
   );
};

export default YouTubeHome;