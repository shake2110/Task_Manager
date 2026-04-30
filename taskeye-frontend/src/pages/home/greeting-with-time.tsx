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
    <div className="flex flex-col items-center gap-2 mb-8">
      <h1 className="bauhaus-heading text-4xl sm:text-6xl text-center m-0">
        {greet}
      </h1>
      <div className="bg-[#1040C0] px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_black] rotate-[-1deg]">
        <p className="text-white font-bold uppercase tracking-widest text-sm m-0">
          {currentDateString()}
        </p>
      </div>
    </div>
  );
};

export default GreetingWithTime;
