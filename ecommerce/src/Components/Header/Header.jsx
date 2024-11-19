const Header = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          background: ' #F0F1F1',
        }}
      >
        <section style={{ display: 'flex', gap: '30px' }}>
          <div>English</div>
          <div>Help Center</div>
          <div>HelpLine 0964781656</div>
        </section>

        <section style={{ display: 'flex', gap: '30px' }}>
          <div>Become a Seller</div>
          <div>Order Trac</div>
          <div>Sign up/ Login</div>
        </section>
      </div>
    </>
  );
};

export default Header;
