'use client'

import { useEffect, useState } from 'react'
import { client, exploreProfiles , getMyProfileEth } from '../api'
import Link from 'next/link'
import { LensClient, development } from "@lens-protocol/client";
import { useAccount } from 'wagmi';

const Hackers = () => {
  const { address , isConnected} = useAccount();
  const [profiles, setProfiles] = useState<any>([])
  const [profile, setProfile] = useState<any>([])
  useEffect(() => {
    fetchProfiles()
    getMyProfile()
  }, [])

  const lensClient = new LensClient({
    environment: development
  });

  async function fetchProfiles() {
    try {
      
      let response = await client.query({ query: exploreProfiles })
     
      let profileData = await Promise.all(response.data.exploreProfiles.items.filter(async profileInfo => {
        return profileInfo.picture.__typename === 'MediaSet'
      }))
      setProfiles(profileData)
    } catch (err) {
      console.log({ err })
    }
  }


  async function getMyProfile ( ){
   
  //  const allOwnedProfiles = await lensClient.profile.fetchAll({
  //   ownedBy: [address],
  //   limit: 1,
  //   });

  //     // defaultProfile is a ProfileFragment
  //     const defaultProfile = allOwnedProfiles.items[0];

  //  console.log(defaultProfile);
  let response = await client.query({ query: getMyProfileEth })
  let data = response.data.defaultProfile
  console.log(data)
  setProfile(data)
  // console.log(profile.name)
}
  return (
    <div className='pt-20 text-white grid grid-cols-2 min-h-screen '>
      <div>
        <h1> {profile?.name}</h1>
        
        <button onClick={()=>getMyProfile()}>MyProfile</button>
      </div>
      <div className='flex flex-col justify-center items-center min-h-screen w-full overflow-scroll  '>
        {/* <button onClick={()=>getMyProfile(address as string)}>MyProfile</button> */}
        <h1 className='text-5xl mb-6 font-bold'>Hello Lens 🌿</h1>
        {
          profiles.map(profile => (
            <div key={profile.id} className='w-2/3 shadow-md p-6 rounded-lg mb-8 flex flex-col items-center'>
              <img className='w-48' src={profile.picture.original.url} />
              <p className='text-xl text-center mt-6'>{profile.name}</p>
              <p className='text-base text-gray-400  text-center mt-2'>{profile.bio}</p>
             
              <p className='text-pink-600 text-sm font-medium text-center'>{profile.stats.totalFollowers} followers</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Hackers