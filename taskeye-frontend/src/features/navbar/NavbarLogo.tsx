import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from '@/assets/images/taskeye-logo.png';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

const NavbarLogo = () => {
  return (
    <Link to={'/taskeye/home'} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Flat Geometric Eye */}
          <circle cx="20" cy="20" r="18" fill="var(--flat-primary)" />
          <path d="M20 12L28 28H12L20 12Z" fill="white" />
        </svg>
        <span style={{ 
          fontSize: '22px', 
          fontWeight: 800, 
          color: 'var(--flat-fg)', 
          textTransform: 'none',
          letterSpacing: '-0.03em',
          marginLeft: '8px',
          lineHeight: 1
        }}>
          TaskEye
        </span>
      </div>
    </Link>
  );
};

export default NavbarLogo;
