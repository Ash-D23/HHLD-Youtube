"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import SearchBar from './searchbar'
import { useMenuStore } from '../zustand/menuActiveStore'

const NavBar = () => {
   const router = useRouter()
   const { data } = useSession()
   const { toggleMenu } = useMenuStore()
   const [showProfile, toggleShowProfile] = useState(false)

   const loginHandler = () => {
        console.log("Signing in Google");
        signIn("google");
    }

   console.log('data---------- ', data);

   const goToUpload = () => {
       router.push('/upload')
   }

   return (
       <div>
           <nav className="bg-white border-gray-200 dark:bg-gray-900">
               <div className="w-full flex flex-wrap items-center justify-between items-center p-3 px-4">
                    <div className='flex'>
                        <button onClick={toggleMenu} data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="navbar-hamburger" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-1.5 cursor-pointer">YouTube</span>
                    </div>
                   <SearchBar />
                   <div class=" w-full md:block md:w-auto pr-3" id="navbar-default">
                        { data ? <div className='flex gap-6 justify-center items-center'>
                                    
                            <a class="flex items-center space-x-2 rtl:space-x-reverse dark:text-white mr-2 cursor-pointer hover:dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                            </a>

                            <button onClick={() => toggleShowProfile(prev => !prev)} type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full" src={data?.user?.image} alt="user photo" />
                            </button>

                            {showProfile? <div class="absolute top-11 right-4 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                <div class="px-4 py-3">
                                    <span class="block text-sm text-gray-900 dark:text-white">{data?.user?.name}</span>
                                </div>
                                <ul class="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div> : null}
                        </div> : <div className='flex items-center'>
                        <button onClick={loginHandler} type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Sign In</button>
                        </div> }
                   </div>
               </div>
           </nav>


       </div>
   )
}

export default NavBar
