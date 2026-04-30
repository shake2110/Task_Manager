import Flex from 'antd/es/flex';
import Typography from 'antd/es/typography';

import { colors } from '@/styles/colors';
import { greetingString } from '@/utils/greetingString';
import { getUserSession } from '@/utils/session-helper';
import { currentDateString } from '@/utils/current-date-string';

const GreetingWithTime = () => {
  const userDetails = getUserSession();
  const firstName = userDetails?.name?.split(' ')[0] || '';

  const greet = greetingString(firstName);

  return (
    <div className="flex flex-col items-center gap-1 mb-12">
      <h1 className="flat-heading text-5xl sm:text-7xl text-center m-0 tracking-tighter">
        {greet}
      </h1>
      <p className="text-[#3B82F6] font-bold uppercase tracking-[0.2em] text-sm m-0">
        {currentDateString()}
      </p>
    </div>
  );
};

export default GreetingWithTime;
