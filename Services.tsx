import { IconType } from 'react-icons';
import { BiBrain } from 'react-icons/bi';
import { GiNightSleep, GiStrongMan } from 'react-icons/gi';
import { MdPsychology } from 'react-icons/md';
import ListViewRenderPropGeneric from './src/components/ListView';

const Services = () => {
  return (
    <div
      id="services"
      className="max-w-[1350px] w-[90vw] mx-auto  mb-28 flex  justify-center flex-wrap md:flex-wrap lg:flex-nowrap sm:gap-10 scroll-mt-10"
    >
      {/* -mt-28 */}
      <ServicesItem
        Icon={BiBrain}
        title="Neurology"
        description="Ea elit adipisicing elit ea aliquip ullamco magna aliqua magna enim. Nisi anim cupidatat id Lorem tempor non ad."
      />
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
  description: string;
}

const ServicesItem = ({ Icon, title, description }: ServicesItemProps) => {
  return (
    <div className="z-10 relative w-[30%] min-w-[330px] lg:min-w-[150px]  pt-8 sm:pt-16">
      <div className="flex flex-col px-6 py-5 gap-3 bg-white rounded-md shadow-md border-2 border-gray-500 shadow-gray-500 after-border after:-translate-x-3 after:-translate-y-1">
        <div className="flex items-center gap-5">
          <Icon className="bg-[#107E8E] text-white w-[60px] h-[50px] p-2 rounded shadow-good shadow-gray-500/40" />
          <div className="text-xl font-bold">{title}</div>
        </div>
        <div className="text-lg text-gray-600">
          {' '}
          <ListViewRenderPropGeneric
            items={[
              { key: 'foo', name: 'foo' },
              { key: 'bar', name: 'bar' },
            ]}
            renderer={(item) => <div>{item.name}</div>}
          />
          {description}
        </div>
      </div>
    </div>
  );
};

export default Services;
