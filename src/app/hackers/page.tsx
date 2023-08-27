'use client'

import { useEffect, useState } from 'react'
import { client, exploreProfiles , getMyProfileEth,  getMyProfileEth2 } from '../api'
import Link from 'next/link'
import { LensClient, development } from "@lens-protocol/client";
import { useAccount ,useWalletClient, usePublicClient } from 'wagmi';
import { parseEther, encodeAbiParameters, parseAbiParameters, formatEther } from "viem";

import Image from 'next/image'
import { ABI, contractAddress } from '../../../constant/page';


const Hackers = () => {
  const { address , isConnected} = useAccount();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  const [profiles, setProfiles] = useState<any>([])
  const [profile, setProfile] = useState<any>([])
  useEffect(() => {
    fetchProfiles()
    getMyProfile("0x15acfD6c3C7Ca01Fc3a11C6cB3155377984305f2")
  }, [])

  // const lensClient = new LensClient({
  //   environment: development
  // });

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


  async function getMyProfile (addr : string ){
   
  //  const allOwnedProfiles = await lensClient.profile.fetchAll({
  //   ownedBy: [address],
  //   limit: 1,
  //   });

  //     // defaultProfile is a ProfileFragment
  //     const defaultProfile = allOwnedProfiles.items[0];

  //  console.log(getMyProfileEth(addr));
   const q = getMyProfileEth2(addr)
 //not working
  let response = await client.query({
      query: q,
      variables: {
        ethereumAddress: addr,
      },
    });
  //
  //this mf is working but dont want it to work

  // let response = await client.query({ query: getMyProfileEth })

  let data = response.data.defaultProfile;
  console.log(data)
    setProfile(data)
    console.log(data.picture.original.url)
  }

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
  // console.log(ABI);


  return (
    <div className='pt-20 text-white grid grid-cols-2 min-h-screen '>
      <div className={`w-full flex items-start justify-center`}>
        <div className={`w-[80%] bg-stone-800 py-2 px-4 rounded-xl flex flex-col items-center justify-center`}>

        <img src={profile?.picture?.original?.url as string} alt="img" className={`rounded-xl `} />
        <h1 className={`font-semibold py-2`} > {profile?.name}</h1>

        <h1 className={` text-lime-400 pb-1`} > {profile?.handle}</h1>
        <h1 className={`text-xs text-grey-500 pb-2`}> {profile?.ownedBy}</h1>
        <p className={`text-sm text-center `}>{profile?.bio}</p>
        
        <button  className={`py-2 px-4 rounded-xl bg-stone-700 my-4`} onClick={()=>getMyReputation()}> Get Reputation</button>
        <button  className={`py-2 px-4 rounded-xl bg-stone-700 my-4`} onClick={()=>getMyProfile("0x15acfD6c3C7Ca01Fc3a11C6cB3155377984305f2")}> Get gsjh</button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center min-h-screen w-full overflow-scroll  '>
        
        {
          profiles.map(profile => (
            <div key={profile.id} className='w-2/3 shadow-md p-6 rounded-lg mb-8 flex flex-col items-center  bg-stone-800 py-2 px-4  justify-center'>
              <img className='w-48 rounded-xl' src={profile.picture.original.url} />
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