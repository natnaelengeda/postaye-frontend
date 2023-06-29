import React from 'react'

export default function Home() {
  return (
    <div className='container mx-auto font-Nunito '>
      <div className='grid grid-cols-2 gap-10 items-center justify-center px-5 md:px-20'>
        <div className='flex flex-col gap-5 text-white'>
          <div className='w-full flex flex-col gap-5 text-6xl font-bold text-white'>
            <p className=''>Scale your</p>
            <p className=''>bussiness to </p>
            <p className=''>the top</p>
          </div>
          <div>
            <p className='text-2xl'>Email Marketing and SMS Marketing Platform</p>
          </div>
          <div>
            <p className='text-xl'>Join the Waitlist now</p>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <div className='w-2/4 h-96 bg-white rounded-xl flex flex-col gap-2'>
            <div className='w-full flex items-center justify-center py-5'>
              <h1 className='text-xl font-semibold'>Register Now!</h1>
            </div>
            <form action="">
              <div>

              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
