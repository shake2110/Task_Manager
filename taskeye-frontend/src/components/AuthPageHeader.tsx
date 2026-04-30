import { Flex, Typography } from '@/shared/antd-imports';
import lightLogo from '@/assets/images/taskeye-light-mode.png';
import darkLogo from '@/assets/images/taskeye-dark-mode.png';
import { useAppSelector } from '@/hooks/useAppSelector';

type AuthPageHeaderProp = {
  description: string;
};

// this page header used in only in auth pages
const AuthPageHeader = ({ description }: AuthPageHeaderProp) => {
  const themeMode = useAppSelector(state => state.themeReducer.mode);
  const logo = themeMode === 'dark' ? darkLogo : lightLogo;
  return (
    <Flex vertical align="center" gap={8} style={{ marginBottom: 24 }}>
      <img
        src={logo}
        alt="TaskEye logo"
        style={{ width: '100%', maxWidth: 220, height: 'auto', objectFit: 'contain' }}
      />
      <Typography.Text style={{ color: '#8c8c8c', maxWidth: 400, textAlign: 'center' }}>
        {description}
      </Typography.Text>
    </Flex>
  );
};

export default AuthPageHeader;
