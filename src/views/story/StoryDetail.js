import React from 'react'
import detail from './images/detail.png'

const StoryDetail = () => {
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
        <h2 className='text-[#1A1A1A] font-poppins text-[24px] leading-[36px] font-normal'>Story Title</h2>
        <p className='text-[#737373] mt-[16px] font-poppins text-[16px] leading-[24px] font-normal'>
        Lorem ipsum dolor sit amet consectetur. Venenatis urna phasellus consectetur pulvinar orci.
        </p>
        </div>
        
        <div className='mt-[64px]'>
            <h2 className='text-[#1A1A1A] font-poppins text-[24px] leading-[36px] font-normal'>Introduction</h2>

            <p className='mt-[46px] text-justify md:w-[70%] text-[#737373] font-poppins text-[16px] leading-[24px] font-normal'>
            Lorem ipsum dolor sit amet consectetur. Morbi neque neque adipiscing auctor aliquet amet at eu morbi. Suscipit gravida dui aliquam eget. Nec aliquet at tincidunt nibh bibendum risus eu posuere mauris. A dictumst dolor nunc elit urna pulvinar.. Lorem ipsum dolor sit amet consectetur. Morbi neque neque adipiscing auctor aliquet amet at eu morbi. Suscipit gravida dui aliquam eget. Nec aliquet at tincidunt nibh bibendum risus eu posuere mauris. A dictumst dolor nunc elit urna pulvinar.
            </p>
        </div>

        <div className='mt-[146px]'>
            <h2 className='text-[#FF8C00] text-center font-poppins text-[24px] leading-[36px] font-normal'>Chapter One</h2>


            <p className='mt-[46px] text-justify text-[#737373] font-poppins text-[16px] leading-[24px] font-normal'>
            Lorem ipsum dolor sit amet consectetur. Commodo sit sit consectetur orci facilisis felis et dictum proin. Lacus in fames integer enim. Pharetra gravida est vel sodales in egestas pulvinar semper justo. Nisi ornare arcu id viverra bibendum gravida vitae. Scelerisque id augue dui a quisque tortor pharetra sapien.
            Nec mauris consequat duis lectus adipiscing parturient elementum ac. Vitae adipiscing nam morbi tristique in. Lobortis venenatis vulputate rhoncus lacinia. Non sit duis massa nam. Aliquam erat a arcu elementum auctor ac interdum eget. Bibendum sollicitudin libero consequat facilisis cras nibh amet. Tellus vestibulum aliquam arcu vitae consectetur aenean etiam duis arcu. Ipsum risus lacus bibendum urna id scelerisque tortor. Cursus enim at orci et consectetur. Turpis id cursus amet risus mattis mi arcu. Consectetur dolor vel adipiscing ut. Et fusce cras venenatis turpis. Purus in ullamcorper lectus sit sagittis ac. Interdum tempus praesent semper vitae egestas porttitor risus tellus. Viverra neque egestas nec velit in urna nisl.
            </p>
            <p className='mt-[46px] text-justify text-[#737373] font-poppins text-[16px] leading-[24px] font-normal'>
            Lorem ipsum dolor sit amet consectetur. Commodo sit sit consectetur orci facilisis felis et dictum proin. Lacus in fames integer enim. Pharetra gravida est vel sodales in egestas pulvinar semper justo. Nisi ornare arcu id viverra bibendum gravida vitae. Scelerisque id augue dui a quisque tortor pharetra sapien.
            Nec mauris consequat duis lectus adipiscing parturient elementum ac. Vitae adipiscing nam morbi tristique in. Lobortis venenatis vulputate rhoncus lacinia. Non sit duis massa nam. Aliquam erat a arcu elementum auctor ac interdum eget. Bibendum sollicitudin libero consequat facilisis cras nibh amet. Tellus vestibulum aliquam arcu vitae consectetur aenean etiam duis arcu. Ipsum risus lacus bibendum urna id scelerisque tortor. Cursus enim at orci et consectetur. Turpis id cursus amet risus mattis mi arcu. Consectetur dolor vel adipiscing ut. Et fusce cras venenatis turpis. Purus in ullamcorper lectus sit sagittis ac. Interdum tempus praesent semper vitae egestas porttitor risus tellus. Viverra neque egestas nec velit in urna nisl.
            </p>
           
           
           <div className='mt-[134px] flex justify-between items-center'>
           <a href="/story/detail" className="inline-flex mt-[24px] bg-transparent text-[#FFA333] rounded-[16px] items-center px-6 py-2  text-[16px] leading-[24px] font-medium text-center border-[1px] border-[#FFA333]">
                         Previous
            </a>
           <a href="/story/detail" className="inline-flex mt-[24px] bg-[#FFA333] rounded-[16px] items-center px-6 py-2  text-[16px] leading-[24px] font-medium text-center text-[#202020]">
                         Next
            </a>
           </div>

        </div>
    </div>

</div>
  )
}

export default StoryDetail