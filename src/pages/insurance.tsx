import Hheader from '@/components/Hheader';
import ins from '../../public/server.jpg';
import tester from 'public/tester.jpg'

export const Insurances = () => {
  return (
    <>
      <div className=" pt-24">
        {' '}
        <div className="">
          <Hheader pageName={'Insurances'} imageURL={tester.src}></Hheader>
        </div>
        <div className="container sm:text-center">
          <h2 className="mx-auto text-shadow-md ">
            {/*text-3xl  tracking-tight  text-gray-900 sm:text-4xl */}
            <span className="text-[#24598C]/50">Covered </span>
            <span className="font-bold text-[#24598C]/80">Insurances</span>
          </h2>

          <img src={ins.src} />
        </div>
      </div>
    </>
  );
};
export default Insurances;
