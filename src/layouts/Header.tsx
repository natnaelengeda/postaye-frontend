import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from '@mantine/core';
import classNames from 'classnames';
import {
  IconPhoto,
  IconMenu2,
  IconHome,
  IconApps,
  IconUsersGroup,
  IconApple

} from '@tabler/icons-react';

// Images 
import logo from '../assets/images/logo/email.png'

export default function Header() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldHaveShadow = scrollTop > 0;
      setHasShadow(shouldHaveShadow);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = classNames('flex', 'justify-center', 'bg-white', 'w-full', 'fixed', {
    'shadow-lg': hasShadow
  });



  return (
    <header className='flex justify-center bg-white w-full fixed'>
      <div className='h-20 flex flex-row items-center justify-between px-5 md:px-7 lg:px-0  container '>

        {/* Header */}
        <Link to="/" className='flex flex-row items-center justify-start gap-2'>
          <div className='w-10 h-10'>
            <img
              src={logo}
              alt="Logo" />
          </div>
          <div className='font-Quicksand font-bold text-blue-500'>
            <h1>Mail.</h1>
          </div>
        </Link>

        {/* Menu Large */}
        <div className=' hidden md:flex flex-row items-center justify-start gap-12 xl:gap-16 font-Quicksand font-semibold'>
          <Link
            to='#home'
            className='hover:text-blue-500'
          >Home</Link>
          <Link
            to='#features'
            className='hover:text-blue-500'
          >Features</Link>

          <Link
            to='#pricing'
            className='hover:text-blue-500'
          >Pricing</Link>

          <Link
            to='#about'
            className='hover:text-blue-500'
          >About</Link>
        </div>

        {/* Menu Small */}
        <div className='block md:hidden'>
          <Menu shadow="md" width={200} >
            <Menu.Target>
              <Button
                styles={() => ({
                  root: {
                    width: 50,
                    padding: 0,
                  }
                })}
                className='bg-blue-500'><IconMenu2 /></Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconHome size={14} />}>Home</Menu.Item>
              <Menu.Item icon={<IconApple size={14} />}>Features</Menu.Item>
              <Menu.Item icon={<IconUsersGroup size={14} />}>Pricing</Menu.Item>
              <Menu.Item icon={<IconPhoto size={14} />}>About</Menu.Item>
              <Menu.Divider />
              <Menu.Item color="blue" icon={<IconApps size={14} />}>Register</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>

        {/* Register */}
        <div className='hidden md:block'>
          <Link
            to={'/#register'}
            className=' text-blue-500  border border-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded-full'>
            Register
          </Link>
        </div>

      </div>
    </header >
  )
}

