import React from 'react';
import story from "./images/story.png"
import story01 from "./images/story01.png"
import story02 from "./images/story02.png"
import story03 from "./images/story03.png"  
import story04 from "./images/story04.png" 
import { useQuery } from '@tanstack/react-query' 
import axios from 'axios';
import detail from './images/detail.png'
import useStoryStore from '../../store/useStoryStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Story = () => {
    const navigate = useNavigate();
    const { setStoryData } = useStoryStore();

    const fetchStorie = async () => {
        const res = await axios.post("https://raj-assistant-api.vercel.app/api/story")
        return res.data
    }

    const {  isError, isLoading, data, isPending, error, refetch } = useQuery({
        queryKey: ['stories'],
        queryFn: fetchStorie,
      })


      useEffect(() => {
        if (data) {
          setStoryData(data); 
        }
      }, [data, setStoryData]);


      if (isLoading | data===undefined) return (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 backdrop-blur-lg flex flex-col justify-center items-center z-50">
          <div className="flex justify-center mt-[32px]">
                  <div className="loader spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-dashed border-[#FF8C00]"></div>
                </div>
          <h2 className="text-[#FF8C00] text-2xl font-semibold">Loading Story...</h2>
          <p className="text-gray-600">Please wait a moment.</p>
        </div>
      );

    
    if (error) return <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col items-center">
      <p>An error has occured while fetching data</p>
    </div>
    </div>;

      if (isPending) {
        return <span>Loading...</span>
      }
      console.log(data, "data")
      console.log(data?.story?.join(), "story")
      const intro = data?.story?.[0];
      const storyParagraph = data?.story?.join();
      
      function refreshPage(){
        window.location.reload();
    } 

  return (
    <div className='mb-[211px]'>

        <div className='relative  overflow-hidden conainer mx-auto mt-[120px] w-[95%] h-[560px] rounded-[32px]'>
                <img
                className='h-full w-full object-cover  rounded-[32px]' 
                src={detail}
                alt='story'
                />
            
        </div>



        <div className='mt-[124px]'>
            
            <h2 className='text-[#FF8C00] text-center font-poppins text-[24px] leading-[36px] font-normal'>AI Story Gallery</h2>


            
            <div className='mt-[64px] w-[95%] mx-auto'>
                
                <div>
                <h2 className='text-[#1A1A1A] font-poppins text-[24px] leading-[36px] font-normal'>{data.title}</h2>
                </div>
                
                <div className='mt-[28px]'>
                    <h2 className='text-[#1A1A1A] font-poppins text-[24px] leading-[36px] font-normal'>Introduction</h2>
                    <p className='mt-[10px] text-justify md:w-[70%] text-[#737373] font-poppins text-[16px] leading-[24px] font-normal'>
                    {intro}
                    </p>
                </div>

                <div className='mt-[20px]'>

                    <p className='mt-[46px] text-justify text-[#737373] font-poppins text-[16px] leading-[24px] font-normal'>
                    {storyParagraph}
                    </p>

                </div>
                <div className="mt-[64px] text-center">
                <button
                    className="bg-[#FFA333] rounded-[16px] px-6 py-2 text-[16px] font-medium text-[#202020]"
                   onClick={() => navigate(`/story/${data?.title}`)} // Navigate to Quiz page
                >
                    Take Quiz
                </button>
                </div>
            </div>
            
            {/* story cards container */}
            {/* <div className='w-[95%] md:w-[80%] mx-auto justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center'>

       
            {data.map((card, index) => (
                 <div key={index} class="mt-[43px] max-w-sm rounded-lg dark:border-gray-700">

                 <div className='p-5 border-dashed border-2'>
                 <a href="#">
                     <img className="rounded-t-lg" src={card.image} alt="story" />
                 </a>
                 </div>
                 
                 <div className="p-5 font-poppins">

                         <h5 className="mb-[5px] font-semibold text-[24px]  tracking-tight leading-[36px] text-[#1A1A1A]">{card.title}</h5>

                     <p className="mt-[14px] font-normal text-[#737373] text-[16px] leading-[24px]">{card.description}</p>


                     <a href={`/story/${index}`} className="inline-flex mt-[24px] bg-[#FFA333] rounded-[16px] items-center px-6 py-2  text-[16px] leading-[24px] font-medium text-center text-[#202020]">
                         Read
                     </a>
             </div>
         </div>
            ))}
            */}
           
        <div className="w-[95%] mx-auto">
        <button
                onClick={refreshPage}
            >
            <h2 className='text-[#5f5d5d] mt-[102px] font-poppins text-[24px] leading-[36px] font-semibold'>Re-generate new sets of stories</h2>
            </button>
        </div>
        </div>

    </div>
  )
}

export default Story