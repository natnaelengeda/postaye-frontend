import React from 'react'

export default function TempHeader(props: any) {
  const { setclicked } = props;

  return (
    <header className='bg-primary text-white'>
      <div className='container mx-auto h-20  flex flex-row items-center justify-between px-5 md:px-20  font-Nunito '>
        <div className='md:text-xl font-bold '>
          <h1>Laki Email Marketing</h1>
        </div>
        <div>
          <button
            onClick={() => {
              setclicked(true);
              setTimeout(() => {
                setclicked(false);
              }, 2000);
            }}
            className='hidden md:block px-3 py-2 border border-white rounded-lg hover:bg-white hover:text-primary'>
            Register Now
          </button>
        </div>
      </div>
    </header>
  )
}
