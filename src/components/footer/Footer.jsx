const Footer = () => {
  return (
    <footer style={{ marginTop: '10px' }}>
      <p
        style={{ fontSize: '13px', textAlign: 'center', paddingTop: '15px', paddingBottom: '10px' }}
      >
        Designed and coded by{' '}
        <a
          style={{ color: '#009c8f', textDecoration: 'none', filter: 'brightness(120%)' }}
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/DorottyaB'
        >
          Dorottya
        </a>
      </p>
    </footer>
  );
};

export default Footer;
