import { Link } from 'react-router-dom';
import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight, IconMenu2, IconHome } from '@tabler/icons-react';
// Images 
import logo from '../assets/images/logo/email.png'

export default function Header() {
  return (
    <header className='flex justify-center bg-white w-full shadow-md fixed'>
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
        <div className=' hidden lg:flex flex-row items-center justify-start gap-12 font-Quicksand font-semibold'>
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
        <div className=''>
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
              <Menu.Item icon={<IconMessageCircle size={14} />}>Features</Menu.Item>
              <Menu.Item icon={<IconPhoto size={14} />}>Pricing</Menu.Item>
              <Menu.Item icon={<IconPhoto size={14} />}>About</Menu.Item>
              <Menu.Item
                icon={<IconSearch size={14} />}
                rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
              >
                Search
              </Menu.Item>

              <Menu.Divider />

              <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
              <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>

        {/* Register */}
        {/* <div>
          <Link
            to={'/#register'}
            className='text-blue-500  border border-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded-full'>
            Register
          </Link>
        </div> */}

      </div>
    </header >
  )
}
