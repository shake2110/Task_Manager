import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from '@/assets/images/taskeye-logo.png';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

const NavbarLogo = () => {
  const { t } = useTranslation('navbar');

  return (
    <Link to={'/worklenz/home'} style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-block', height: 40 }}>
        <img
          src={logo}
          alt="TaskEye"
          style={{ 
            height: '100%', 
            width: 'auto', 
            objectFit: 'contain',
            mixBlendMode: 'lighten', // This effectively makes the black background transparent
            filter: 'brightness(1.1)',
            transform: 'scale(1.1)'
          }}
        />
      </div>
    </Link>
  );
};

export default NavbarLogo;
