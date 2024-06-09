"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import Sidebar from "../_components/sidebar";
import dynamic from 'next/dynamic'
import { useVideosStore } from '../zustand/useVideosStore';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const YouTubeHome = () => {


   return (
       <div className='w-screen home-height dark:bg-gray-800 flex'>
            <Sidebar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            
            </div>
        </div>
   );
};

export default YouTubeHome;