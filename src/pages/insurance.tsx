import Banner from '@/components/Banner';
import ins from '../../public/server.jpg';
import tester from 'public/billing.jpg';

export const Insurances = () => {
  return (
    <>
      <Banner pageName={'Insurances'} imageURL={tester.src}></Banner>
      <div className=" pt-24">
        {' '}
        <div className=""></div>
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
