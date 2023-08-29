'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import { client, getPublications, getProfile } from '../../api';
import Link from 'next/link'
import { LensClient, development } from "@lens-protocol/client";
import { useAccount ,useWalletClient, usePublicClient } from 'wagmi';

import Image from 'next/image'
import { ABI, contractAddress } from '../../../../constant/page';

export default function Profile() {
  /* create initial state to hold user profile and array of publications */
  const [profile, setProfile] = useState<any>()
  const [publications, setPublications] = useState<any>([])
  /* using the router we can get the lens handle from the route path */
  const pathName = usePathname()
  const handle = pathName?.split('/')[2]
  const { address , isConnected} = useAccount();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  const [profiles, setProfiles] = useState<any>([])

  async function getMyReputation (){
    try{

      //have to code something
      if (!isConnected)return;
      const { request } = await publicClient.simulateContract(
        {
          address: contractAddress,
          abi: ABI,
          functionName: "request",
          account: address,
          args: [profile?.id],
        }
      );

      const tx = await walletClient?.writeContract(request);
      console.log("Transaction Hash --->>>",tx);
     
      if(!tx)return
      const transaction = await publicClient.waitForTransactionReceipt({
        hash: tx,
      });
      console.log("Transaction --->>>",transaction);
      
    }catch(err){console.log(err)}
  }

  useEffect(() => {
    if (handle) {
      fetchProfile()
    }
  }, [handle])

  async function fetchProfile() {
    try {
      /* fetch the user profile using their handle */
      const returnedProfile = await client.query({
        query: getProfile,
        variables: { handle }
      })
      setProfile(returnedProfile.data.profile)
      /* fetch the user's publications from the Lens API and set them in the state */
      const pubs = await client.query({
        query: getPublications,
        variables: {
            id: returnedProfile.data.profile.id, limit: 50
        }
      })
      setPublications(pubs.data.publications.items)
    } catch (err) {
      console.log('error fetching profile...', err)
    }
  }

  if (!profile) return null

  return (
    <div className='pt-20 text-white'>
      <div className='flex flex-col justify-center items-center'>
        <img
          className='w-64 rounded-full'
          src={profile.picture?.uri || profile.picture?.original?.url}
        />
        <p className='text-4xl mt-8 mb-8'>{profile.handle}</p>
        <button
            className={`py-2 px-4 rounded-xl bg-stone-700 my-4`}
            onClick={() => getMyReputation()}
          >
            Get Hackr Reputation
          </button>
        <p className='text-center text-xl font-bold mt-2 mb-2 w-1/2'>{profile.bio}</p>
        {
            publications.map(pub => (
              <div key={pub.id} className='shadow p-10 rounded mb-8 w-2/3'>
                <p>{pub.metadata.content}</p>
              </div>
            ))
        }
      </div>
    </div>
  )
}