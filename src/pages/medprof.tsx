import Hheader from '@/components/Hheader';
import React from 'react';
import tester from 'public/tester.jpg';

const locations = () => {
  return (
    <>
      <div className="pt-24">
        <Hheader
          pageName={'Medical Profressionals'}
          imageURL={tester.src}
        ></Hheader>
        Neurology and Sleep Medicine Associates would like Medical Professionals
        to use the following contact information: Phone: (480) 967-6888 Fax:
        (480) 967-6887 Email Contacts: Billing Requests and Information:
        billing@neurologyandsleep.com Consults Requests and Information:
        consults@neurologyandsleep.com Dictation Requests and Information:
        dictation@neurologyandsleep.com Labs and Procedures Requests and
        Information: labs@neurologyandsleep.com Radiology Information:
        radiology@neurologyandsleep.com Referrals Requests and Information:
        referrals@neurologyandsleep.com Therapy Requests and Information:
        therapy@neurologyandsleep.com
      </div>
    </>
  );
};

export default locations;
