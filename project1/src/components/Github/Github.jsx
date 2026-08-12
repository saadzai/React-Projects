import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function  Github () {
    const data = useLoaderData()
 
 return (
  <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-700 text-white p-6 rounded-lg shadow-md m-4 max-w-xl mx-auto">
    <img
      src={data?.avatar_url}
      alt="GitHub avatar"
      className="w-32 h-32 rounded-full object-cover border-2 border-white"
    />
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-semibold">GitHub</h2>
      <p className="text-lg">Followers: <span className="font-bold">{data?.followers ?? '—'}</span></p>
      <p className="text-sm text-gray-200 mt-1">@{data?.login}</p>
    </div>
  </div>
 )
}


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/saadzai')
    console.log(response)
    return response.json()
}