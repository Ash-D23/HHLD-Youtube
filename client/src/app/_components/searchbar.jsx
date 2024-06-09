"use client"
import React, { useState } from 'react'
import axios from 'axios';
import { useVideosStore } from '../zustand/useVideosStore'

const SearchBar
   = () => {
       const [searchText, setSearchText] = useState('');
       const { updateSearchedVideos } = useVideosStore();

       const searchVideos = async () => {
           try {
               const res = await axios.get(process.env.NEXT_PUBLIC_API_GW_URL, { params: { q: searchText } });
               console.log('Data received - ', res.data);
               updateSearchedVideos(res.data);
               res.data.map((data) => {
                   console.log(data);
                   console.log('video url', data._source.videoUrl);
               })
           } catch (error) {
               console.log("Error in searching : ", error.message)
           }
       }
       return (
           <div className='w-1/3'>
                <div class="flex min-w-full">
                    <div class="relative w-full">
                        <input type="search" id="search-dropdown" class="block p-2 pl-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg dark:bg-gray-700 border-0 dark:text-white outline-none" placeholder="Search" required />
                        <button type="submit" class="absolute top-0 end-0 p-2 text-sm font-medium h-full text-white bg-gray-700 rounded-e-lg border border-2 border-gray-700 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-800">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>
           </div>
       )
   }

export default SearchBar