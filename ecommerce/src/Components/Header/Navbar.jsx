import '@/styles/navbar.css';
import logo from '@/Components/img/logo.png';
import Cart from '@/pages/fonts/icons/Cart';
import Favourite from '@/pages/fonts/icons/Favourite';
import Profile from '@/pages/fonts/icons/Profile';
import SearchIcon from '@/pages/fonts/icons/search';
import Image from 'next/image';
import CloudIcon from '@/pages/fonts/icons/Cloud';
const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navbarParent'>
        <div>
          <Image
            src={logo}
            width={129}
            height={100}
            alt='Picture of the logo'
          />
        </div>
        <div className='navbarSearch'>
          <div>
            <input
              type='text'
              placeholder='Search Products'
              className='navbarSearchInput'
            />
          </div>
          <div className='navbarSearchIcon'>
            <SearchIcon color='#000' size='38' />
          </div>
        </div>
        <div className='navbarIcons'>
          <div className='navbarIconColor'>
            <Profile color='#000' size='22' />
          </div>
          <div className='navbarIconColor'>
            <Favourite color='#000' size='22' />
          </div>
          <div className='navbarIconColor'>
            <Cart color='#000' size='22' />
          </div>
        </div>
        <div className='navbarCloud'>
          <div>
            <CloudIcon color='#FFFFFF' size='45' />
          </div>
          <div> Cloud Service</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
