import React from 'react'

const Form = () => {
  return (
    <form className='px-32 py-16 bg-gray-200'>
        <p className='text-[25px] '>Leave A Reply</p>
            <p className='py-7'>Your Email Address will Not be Published. Required Fields are Marked*</p>
            <textarea type='text' placeholder='Comment' rows={5} className='w-full px-7 py-7 rounded-lg'/>
            <div className='flex flex-row gap-5 py-5 placeholder:px-7'>
                <input className='flex-grow py-4 rounded-lg px-7' type='text' placeholder='FullName' />
                <input className='flex-grow py-4 rounded-lg px-7' type='text' placeholder='Email Address' />
                <input className='flex-grow py-4 rounded-lg px-7' type='text' placeholder='Web URl' />
            </div>
            <div>
            <input type='checkbox' className='' />
           <p> Save my name, email and website in this browser for next time I comment.</p>
            </div>
            <div className='py-5'>
            <button className=' bg-orange-400 text-white py-3 px-5 rounded-lg'>Post Comment</button>
            </div>
    </form>
  )
}

export default Form