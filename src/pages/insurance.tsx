import Banner from '@/components/Banner';
import ins from '../../public/server.jpg';
import tester from 'public/billing.jpg';
import { PaperClipIcon } from '@heroicons/react/outline';

export const Insurances = () => {
  return (
    <>
      <Banner pageName={'Insurances'} imageURL={tester.src}></Banner>
      <div className="testImage">
        <div className="container">
          <div className="text-center text-4xl text-wcyan mb-10">
            Contracted Insurance Information
            <p className="text-xl text-slate-800 mt-2">
              If you do not see your insurance listed, please still feel free to
              reach out. We are always happy to see what we can do!
            </p>
          </div>
          <table className="w-full shadow text-left bg-white  mb-20">
            <thead>
              <tr className="border-b border-gray-300 ">
                <th className="py-5 sm:pl-10 pl-2 w-1/3 text-base text-gray-800 ">
                  Insurance
                </th>
                <th className="py-5 w-1/3 text-base text-gray-800">
                  Contracted
                </th>
                <th className="py-5 w-1/3 text-base text-gray-800 text-center">
                  Not Contracted
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Aetna
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                Banner Choice Plus, Axel, Select Network, HMO Prime
                </td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Arizona Foundation
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                  Schaller Anderson EPO
                </td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  BCBS
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                Advantage. Allegiance, Secure Select, HMO, Blue High Performance, Everyday Maricopa Focus
                </td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Cigna
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                  Local Plus
                </td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  PHCS/Great West/ HNA
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                
                </td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Health Net
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                
                </td>
              </tr>

              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Humana
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
              
                </td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Medicaid/AHCCCS
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Bridgeway/Bridgeway Adv., Care 1st/ One care, Health Choice/Health Choice Generations, Health Net AHCCCS, Mercy Care/Mercy Care Advv, UHC Community Plan (APIPA, Personal Care Plus), Phoenix Health Plan/Abrazo
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
               
                </td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Medicare
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
          
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                  Railroad Medicare
                </td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Pacificare
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  PPO/HMO, Lifeprint, Phoenix Direct Network
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
      
                </td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  TriWest/TriCare
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                 
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                  
                </td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  United Healthcare
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                  UHC Banner, AZ Compass, UHC Exchanged Market
                </td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Workman's Compensation
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Requires approval from adjustor
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                  
                </td>
              </tr>

              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  Miscellaneous Non-Contracted Plans
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm">
                  
                </td>
                <td className="pr-2 py-5 text-gray-800  text-xs sm:text-sm text-center">
                  Oscar Health, Bright Health, Devoted Health, Molina HMO
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Insurances;
