

// Images 
import logo from '../assets/images/logo/email.png';

export default function TempHeader(props: any) {
  const { setclicked } = props;

  return (
    <header className='z-20 w-full bg-primary text-white fixed border-b md:border-none border-gray-500'>
      <div className='container mx-auto h-20  flex flex-row items-center justify-between px-5 md:px-20  font-Nunito '>
        <div className='flex flex-row items-center gap-2 md:gap-5'>
          <div>
            <img
              src={logo}
              alt='Postaye Logo'
              className='h-8 md:h-10' />
          </div>
          <div className='text-xl  font-bold '>
            <h1>Postaye Email Marketing</h1>
          </div>
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
