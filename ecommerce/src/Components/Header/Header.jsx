import TopArrow from '@/pages/fonts/icons/topArrow';
import '@/styles/header.css';
const Header = () => {
  return (
    <>
      <div className='headerContainer'>
        <div className='headerChild'>
          <div className='headerleft'>
            <div className='headerLanguage'>
              <p>English</p>
              <div>
                <TopArrow color='#F97316' size='16' />
              </div>
            </div>
            <div>Help Center</div>
            <div>HelpLine: 0964781656</div>
          </div>

          <div className='headerleft'>
            <div>Become a Seller</div>
            <div>Order Trac</div>
            <div className='headerRegister'>Sign up/ Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
