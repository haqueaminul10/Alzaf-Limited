import Cart from '@/pages/fonts/icons/Cart';
import Favourite from '@/pages/fonts/icons/Favourite';
import Profile from '@/pages/fonts/icons/Profile';
import SearchIcon from '@/pages/fonts/icons/search';
const Navbar = () => {
  return (
    <div style={{ margin: '10px 0' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ color: 'black', fontSize: '40px', fontWeight: '700' }}>
          alzaf
        </div>
        <div>
          <input type='text' placeholder='Search Products' />
          <SearchIcon color='#000' size='24' />
        </div>
        <div>
          <Profile color='#000' size='24' />
          <Favourite color='#000' size='24' />
          <Cart color='#000' size='24' />
        </div>
        <div style={{ background: ' #F97316' }}>Cloud Service</div>
      </div>
    </div>
  );
};

export default Navbar;
