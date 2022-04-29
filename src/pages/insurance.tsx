import Banner from '@/components/layout/Banner';
import tester from 'public/billing.jpg';

export const Insurances = () => {
  return (
    <>
      <Banner pageName={'Insurances'} imageURL={tester}></Banner>
      <div className="testImage">
        <div className="mx-auto  py-8 max-w-screen sm:max-w-6xl 2xl:max-w-[1700px]">
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
                <th className="py-5 sm:pl-10 pl-2 w-1/3 text-xl text-gray-800 ">
                  Insurance
                </th>
                <th className="py-5 w-1/3 text-xl text-gray-800">Contracted</th>
                <th className="py-5 w-1/3 text-xl text-gray-800 text-center">
                  Not Contracted
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Aetna
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center">
                  Banner Choice Plus, Axel, Select Network, HMO Prime
                </td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Arizona Foundation
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center">
                  Schaller Anderson EPO
                </td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  BCBS
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center">
                  Advantage. Allegiance, Secure Select, HMO, Blue High
                  Performance, Everyday Maricopa Focus
                </td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Cigna
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center">
                  Local Plus
                </td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  PHCS/Great West/ HNA
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center"></td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Health Net
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center"></td>
              </tr>

              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Humana
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  HMO/PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center"></td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Medicaid/AHCCCS
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Bridgeway/Bridgeway Adv., Care 1st/ One care, Health
                  Choice/Health Choice Generations, Health Net AHCCCS, Mercy
                  Care/Mercy Care Advv, UHC Community Plan (APIPA, Personal Care
                  Plus), Phoenix Health Plan/Abrazo
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center"></td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Medicare
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg"></td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center">
                  Railroad Medicare
                </td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Pacificare
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  PPO/HMO, Lifeprint, Phoenix Direct Network
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center"></td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  TriWest/TriCare
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg"></td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center"></td>
              </tr>
              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  United Healthcare
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  PPO
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center">
                  UHC Banner, AZ Compass, UHC Exchanged Market
                </td>
              </tr>
              <tr>
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Workman's Compensation
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Requires approval from adjustor
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center"></td>
              </tr>

              <tr className="bg-gray-200 ">
                <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800  text-md sm:text-lg">
                  Miscellaneous Non-Contracted Plans
                </td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg"></td>
                <td className="pr-2 py-5 text-gray-800  text-md sm:text-lg text-center">
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
