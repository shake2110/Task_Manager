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
          {/* Bauhaus Geometric Composition */}
          <rect width="40" height="40" fill="transparent" />
          {/* The Square Foundation */}
          <rect x="2" y="2" width="36" height="36" stroke="#121212" strokeWidth="3" fill="#F0C020" />
          {/* The Circular Eye */}
          <circle cx="20" cy="20" r="12" stroke="#121212" strokeWidth="3" fill="#D02020" />
          {/* The Focus Triangle */}
          <path d="M20 12L28 28H12L20 12Z" fill="#1040C0" stroke="#121212" strokeWidth="2" />
        </svg>
        <span style={{ 
          fontSize: '24px', 
          fontWeight: 900, 
          color: 'var(--bauhaus-black)', 
          textTransform: 'uppercase',
          letterSpacing: '-1px',
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
