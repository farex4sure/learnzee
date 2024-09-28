import React from 'react'
import detail from './images/detail.png'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import useStoryStore from '../../store/useStoryStore'

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  // const { getStoryById, stories } = useStoryStore()
  // const story = getStoryById(id)

  const fetchStories = async () => {
    const storyPromises = Array.from({ length: 6 }).map(() => 
        axios.post('https://raj-assistant-api.vercel.app/api/story')
    );
    const responses = await Promise.all(storyPromises);
    return responses.map(response => response.data);
};

console.log(id, "id")
const {  isError, isLoading, data, error } = useQuery({
  queryKey: ['stories'],
  queryFn: fetchStories,
})

if (isLoading) return (
  <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 backdrop-blur-lg flex flex-col justify-center items-center z-50">
  <div className="flex justify-center mt-[32px]">
                  <div className="loader spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-dashed border-[#FF8C00]"></div>
                </div>
    <h2 className="text-[#FF8C00] text-2xl font-semibold">Loading...</h2>
    <p className="text-gray-600">Please wait a moment.</p>
  </div>
);

if (error) return <div className="flex justify-center items-center h-screen">
<div className="flex flex-col items-center">
  <p>An error has occured while fetching data</p>
</div>
</div>;


  console.log(data, "data")
  const story = data[id]
  console.log(data[id], "from story detail")
  



  if (!story) {
    return <div>Story not found</div>;
  }

  console.log(story, "from story detail")
  console.log(story.story, "from story detail")

  // const storyParagraph = story?.story.join(",");
  
  return (
    <div className='mb-[211px]'>

    <div className='relative  overflow-hidden conainer mx-auto mt-[120px] w-[95%] h-[560px] rounded-[32px]'>
        <img
        className='h-full w-full object-cover  rounded-[32px]' 
        src={detail}
        alt='story'
        />
      
    </div>



    <div className='mt-[64px] w-[95%] mx-auto'>
        
        <div>
        <h2 className='text-[#1A1A1A] font-poppins text-[24px] leading-[36px] font-normal'>{story.title}</h2>
        <p className='text-[#737373] mt-[16px] font-poppins text-[16px] leading-[24px] font-normal'>
        Lorem ipsum dolor sit amet consectetur. Venenatis urna phasellus consectetur pulvinar orci.
        </p>
        </div>
        
        <div className='mt-[64px]'>
            <h2 className='text-[#1A1A1A] font-poppins text-[24px] leading-[36px] font-normal'>Introduction</h2>

            <p className='mt-[46px] text-justify md:w-[70%] text-[#737373] font-poppins text-[16px] leading-[24px] font-normal'>
            {/* {story?.story[0]} */}
            </p>
        </div>

        <div className='mt-[146px]'>
            <h2 className='text-[#FF8C00] text-center font-poppins text-[24px] leading-[36px] font-normal'>Chapter One</h2>


            <p className='mt-[46px] text-justify text-[#737373] font-poppins text-[16px] leading-[24px] font-normal'>
            {/* {storyParagraph} */}
            </p>

        </div>
        <div className="mt-[64px] text-center">
          <button
            className="bg-[#FFA333] rounded-[16px] px-6 py-2 text-[16px] font-medium text-[#202020]"
            onClick={() => navigate(`/story/${id}/quiz`)} // Navigate to Quiz page
          >
            Take Quiz
          </button>
        </div>
    </div>

</div>
  )
}

export default StoryDetail