import { IconType } from 'react-icons';
import { BiBrain } from 'react-icons/bi';
import { GiNightSleep, GiStrongMan } from 'react-icons/gi';
import { MdPsychology } from 'react-icons/md';

const desc1 = () => {
  return (
    <div className="h-fill w-fill">
      <ul className="text-black">
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
};

const Services = () => {
  return (
    <div
      id="services"
      className="max-w-[1350px] w-[90vw] mx-auto -mt-28 mb-28 flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap gap-10 scroll-mt-10 "
    >
      <ServicesItem Icon={BiBrain} title="Neurology" description={desc1} />
      <ServicesItem
        Icon={GiNightSleep}
        title="Sleep"
        description="Ea elit adipisicing elit ea aliquip ullamco magna aliqua magna enim. Nisi anim cupidatat id Lorem tempor non ad."
      />
      <ServicesItem
        Icon={GiStrongMan}
        title="Physical Therapy"
        description="Ea elit adipisicing elit ea aliquip ullamco magna aliqua magna enim. Nisi anim cupidatat id Lorem tempor non ad."
      />
      <ServicesItem
        Icon={MdPsychology}
        title="Psychiatry"
        description="Ea elit adipisicing elit ea aliquip ullamco magna aliqua magna enim. Nisi anim cupidatat id Lorem tempor non ad."
      />
    </div>
  );
};

interface ServicesItemProps {
  title: string;
  Icon: IconType;
  description: any;
}

const ServicesItem = ({ Icon, title, description }: ServicesItemProps) => {
  return (
    <div className="z-10 relative w-[30%] min-w-[330px] lg:min-w-[150px]">
      <div className="flex flex-col px-6 py-5 gap-3 bg-white rounded-md shadow-md border-2 border-gray-500 shadow-gray-500 after-border after:-translate-x-3 after:-translate-y-1">
        <div className="flex items-center gap-5">
          <Icon className="bg-cyan-700 text-white w-[60px] h-[50px] p-2 rounded shadow-good shadow-gray-500/40" />
          <div className="text-xl font-bold">{title}</div>
        </div>
        <div className="text-lg text-gray-600">{description}</div>
      </div>
    </div>
  );
};

export default Services;
