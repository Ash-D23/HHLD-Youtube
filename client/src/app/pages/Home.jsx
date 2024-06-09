"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import Sidebar from "../_components/sidebar";
import dynamic from 'next/dynamic'
import { useVideosStore } from '../zustand/useVideosStore';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const YouTubeHome = () => {


   return (
       <div className='w-screen home-height bg-gray-800 flex'>
            <Sidebar />
            <div className="">
            
            </div>
        </div>
   );
};

export default YouTubeHome;