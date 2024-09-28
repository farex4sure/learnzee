import React from 'react';
import story from "./images/story.png"
import story01 from "./images/story01.png"
import story02 from "./images/story02.png"
import story03 from "./images/story03.png"  
import story04 from "./images/story04.png" 
import { useQuery } from '@tanstack/react-query' 
import axios from 'axios';


// generate 6 card data
const cardData = [
    {
        title: 'Story',
        description: 'Lorem ipsum dolor sit amet consectetur. Venenatis urna phasellus consectetur pulvinar orci.',
        image: story01,
        link: '/story'
    },
    {
        title: 'Story 01',
        description: 'Lorem ipsum dolor sit amet consectetur. Venenatis urna phasellus consectetur pulvinar orci.',
        image: story02,
        link: '/story01'
    },
    {
        title: 'Story 02',
        description: 'Lorem ipsum dolor sit amet consectetur. Venenatis urna phasellus consectetur pulvinar orci.',
        image: story03,
        link: '/story02'
    },
    {
        title: 'Story 03',
        description: 'Lorem ipsum dolor sit amet consectetur. Venenatis urna phasellus consectetur pulvinar orci.',
        image: story03,
        link: '/story03'
    },
    {
        title: 'Story 04',
        description: 'Lorem ipsum dolor sit amet consectetur. Venenatis urna phasellus consectetur pulvinar orci.',
        image: story01,
        link: '/story04'
    },
    {
        title: 'Story 05',
        description: 'Lorem ipsum dolor sit amet consectetur. Venenatis urna phasellus consectetur pulvinar orci.',
        image: story04,
        link: '/story05'
    }
]

const Story = () => {
    const fetchStories = async () => {
        const response = await fetch('https://raj-assistant-api.vercel.app/api/story', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({})
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data;
      };

    const {  isError, isLoading, data, error } = useQuery({
        queryKey: ['stories'],
        queryFn: fetchStories,
      })

      console.log(data, "from story");

      if (isLoading) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }


  return (
    <div className='mb-[211px]'>

        <div className='relative  overflow-hidden conainer mx-auto mt-[120px] w-[95%] h-[560px] rounded-[32px]'>
            <img
            className='h-full w-full object-cover  rounded-[32px]' 
            src={story}
            alt='story'
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="absolute inset-0 mt-[165px] flex flex-col justifycenter items-center text-white p-b font-poppins">
            <h2 className="text-[32px] leading-[48px] font-black mb-2">Discover Magical Stories Created by AI</h2>
            <p className="text-[20px] leading-[30px] mb-2 font-semibold">Discover a world of imaginative tales that teach valuable life lessons</p>
            <p className='text-[16px] leading-[24px] font-normal'>Join our characters on their exciting adventures and learn about important values like kindness, friendship, and courage</p>
            </div>
        </div>



        <div className='mt-[124px]'>
            
            <h2 className='text-[#FF8C00] text-center font-poppins text-[24px] leading-[36px] font-normal'>AI Story Gallery</h2>

            

            {/* story cards container */}
            <div className='w-[95%] md:w-[80%] mx-auto justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center'>

            {/* story cards */}
            {cardData.map((card, index) => (
                 <div key={index} class="mt-[43px] max-w-sm rounded-lg dark:border-gray-700">

                 <div className='p-5 border-dashed border-2'>
                 <a href="#">
                     <img className="rounded-t-lg" src={card.image} alt="story" />
                 </a>
                 </div>
                 
                 <div className="p-5 font-poppins">

                         <h5 className="mb-[5px] font-semibold text-[24px]  tracking-tight leading-[36px] text-[#1A1A1A]">{card.title}</h5>

                     <p className="mt-[14px] font-normal text-[#737373] text-[16px] leading-[24px]">{card.description}</p>


                     <a href="/story/detail" className="inline-flex mt-[24px] bg-[#FFA333] rounded-[16px] items-center px-6 py-2  text-[16px] leading-[24px] font-medium text-center text-[#202020]">
                         Read
                     </a>
             </div>
         </div>
            ))}
            
            <a href='/story'>
            <h2 className='text-[#5f5d5d] mt-[102px] font-poppins text-[24px] leading-[36px] font-semibold'>Re-generate new sets of stories</h2>
            </a>
            </div>
        </div>

    </div>
  )
}

export default Story