import Banner from '@/components/layout/Banner';
import React, { useState } from 'react';
import tester from 'public/servebanner.jpg';
import Divider from '@/components/layout/Dividers';
import emailjs from '@emailjs/browser';

export default function Appointment() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [voicemail, setVoicemail] = useState('');
  const [errors, setErrors] = useState({});
  const [subject, setSubject] = useState('Appointment Request');
  const [insurname, setInsurname] = useState('');
  const [insurnum, setInsurnum] = useState('');

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Submit');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleMaleChange = () => {
    setGender('male');
  };
  const handleFemaleChange = () => {
    setGender('female');
  };
  const handleNoneChange = () => {
    setGender('none');
  };
  const handleYesChange = () => {
    setVoicemail('yes');
  };
  const handleNoChange = () => {
    setVoicemail('no');
  };

  // Validation check method
  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (first.length <= 0) {
      tempErrors['first'] = true;
      isValid = false;
    }
    if (last.length <= 0) {
      tempErrors['last'] = true;
      isValid = false;
    }
    if (insurname.length <= 0) {
      tempErrors['insurname'] = true;
      isValid = false;
    }
    if (insurnum.length <= 0) {
      tempErrors['insurnum'] = true;
      isValid = false;
    }

    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors['phone'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });

    console.log('errors', errors);

    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');
      let templateParams = {
        first: first,
        last: last,
        gender: gender,
        insurname: insurname,
        insurnum: insurnum,
        email: email,
        phone: phone,
        voicemail: voicemail,
        subject: subject,
      };
      emailjs
        .send(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_APPOINTMENT}`,
          templateParams,
          `${process.env.NEXT_PUBLIC_USER_ID}`
        )
        .then(
          (response) => {
            console.log(response.text);
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText('Submit');
            // Reset form fields
            setFullname('');
            setEmail('');
            setPhone('');
            setMessage('');
          },
          (error) => {
            console.log(error.text);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText('Submit');

            setFullname('');
            setEmail('');
            setPhone('');
            setMessage('');
            return;
          }
        );
    }
    // const res = await fetch('https://formspree.io/f/mzbokaqv', {
    //   body: JSON.stringify({
    //     first: first,
    //     last: last,
    //     gender: gender,
    //     insurname: insurname,
    //     insurnum: insurnum,
    //     email: email,
    //     phone: phone,
    //     voicemail: voicemail,
    //     subject: subject,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    // });

    // const { error } = await res.json();
    // if (error) {
    //     console.log(error);
    //     setShowSuccessMessage(false);
    //     setShowFailureMessage(true);
    //     setButtonText('Submit');

    //     // Reset form fields
    //     setFirst('');
    //     setLast('');
    //     setGender('');
    //     setEmail('');
    //     setPhone('');
    //     setInsurname('');
    //     setInsurnum('');
    //     setVoicemail('');
    //     return;
    //   }
    //   setShowSuccessMessage(true);
    //   setShowFailureMessage(false);
    //   setButtonText('Submit');
    //   // Reset form fields
    //   setFirst('');
    //   setLast('');
    //   setGender('');
    //   setInsurname('');
    //   setInsurnum('');
    //   setEmail('');
    //   setPhone('');
    //   setVoicemail('');
    // }
    console.log(
      first,
      last,
      email,
      phone,
      gender,
      insurname,
      insurnum,
      voicemail
    );
  };
  return (
    <>
      <Banner pageName={'Book an Appointment'} imageURL={tester} />
      <div className="testImage">
        <Divider sectionName="Request an Appointment" />

        <div className="container">
          <form id="submit" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New Appointment" />
            <div className="bg-white ">
              <div className=" mx-auto bg-white  mt-10 rounded px-4">
                <div className="xl:w-full border-b border-gray-300 py-5">
                  <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                    <p className="text-lg text-gray-800  font-bold">
                      To Request an Appointment Online with Neurology and Sleep
                      Medicine Associates, please use the form below, and our
                      scheduling coordinator will contact you by phone within
                      the next 48 hours (not including weekends or holidays) to
                      find an appointment that best meets your needs.
                    </p>
                  </div>
                  <p className="text-red-600 text-center">
                    If you are experiencing a medical emergency, please call
                    911.
                  </p>
                </div>
                <div className="mx-auto pt-4">
                  <div className="items-center">
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="first"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="first"
                        name="first"
                        autoComplete="name"
                        placeholder="First Name"
                        className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-wcyan placeholder-gray-500 text-gray-500 "
                        value={first}
                        onChange={(e) => {
                          setFirst(e.target.value);
                        }}
                      />
                      {errors?.first && (
                        <p className="text-red-500">
                          First name cannot be empty.
                        </p>
                      )}
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="last"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last"
                        name="last"
                        className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-wcyan placeholder-gray-500 text-gray-500 "
                        placeholder="Last Name"
                        value={last}
                        onChange={(e) => {
                          setLast(e.target.value);
                        }}
                      />
                      {errors?.last && (
                        <p className="text-red-500">
                          Last name cannot be empty.
                        </p>
                      )}
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="gender"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Gender
                      </label>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="gender"
                            name="gender"
                            type="radio"
                            // checked="male"
                            className="focus:ring-wcyan h-4 w-4 text-wcyan border-gray-300"
                            value={gender === 'male'}
                            onChange={handleMaleChange}
                            // onChange={(e) => {
                            //   setGender(e.target.value);
                            // }}
                          />{' '}
                          {errors?.gender && (
                            <p className="text-red-500">
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor="gender"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Male
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="gender"
                            name="gender"
                            type="radio"
                            // checked="female"
                            className="focus:ring-wcyan h-4 w-4 text-wcyan border-gray-300"
                            value={gender === 'female'}
                            onChange={handleFemaleChange}
                            // onChange={(e) => {
                            //   setGender(e.target.value);
                            // }}
                          />{' '}
                          {errors?.gender && (
                            <p className="text-red-500">
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor="gender"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Female
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="gender"
                            name="gender"
                            type="radio"
                            // checked="none"
                            className="focus:ring-wcyan h-4 w-4 text-wcyan border-gray-300"
                            value={gender === 'none'}
                            onChange={handleNoneChange}
                            // onChange={(e) => {
                            //   setGender(e.target.value);
                            // }}
                          />{' '}
                          {errors?.gender && (
                            <p className="text-red-500">
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor="gender"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Rather not say
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="Insurance Name"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Name of Primary Insurance
                      </label>
                      <input
                        type="text"
                        id="insurname"
                        name="insurname"
                        className="border border-gray-300  pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-wcyan placeholder-gray-500 text-gray-500 "
                        placeholder="Name of insurance"
                        value={insurname}
                        onChange={(e) => {
                          setInsurname(e.target.value);
                        }}
                      />
                      {errors?.insurname && (
                        <p className="text-red-500">
                          Insurance name cannot be empty.
                        </p>
                      )}
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="Insurance Number"
                        className="pb-2 text-sm font-bold text-gray-800  "
                      >
                        Insurance ID Number
                      </label>
                      <input
                        type="text"
                        id="insurnum"
                        name="Insurance ID"
                        className="border border-gray-300   pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-wcyan placeholder-gray-500 text-gray-500  "
                        placeholder="Insurance ID"
                        value={insurnum}
                        onChange={(e) => {
                          setInsurnum(e.target.value);
                        }}
                      />
                      {errors?.insurnum && (
                        <p className="text-red-500">
                          Insurance ID cannot be empty.
                        </p>
                      )}
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="email"
                        className="pb-2 text-sm font-bold text-gray-800  "
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="border border-gray-300   pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-wcyan placeholder-gray-500 text-gray-500  "
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />{' '}
                      {errors?.email && (
                        <p className="text-red-500">Email cannot be empty.</p>
                      )}
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="number"
                        className="pb-2 text-sm font-bold text-gray-800  "
                      >
                        Best Contact Number
                      </label>
                      <input
                        type="tel"
                        id="number"
                        name="number"
                        className="border border-gray-300   pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-wcyan placeholder-gray-500 text-gray-500  "
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />{' '}
                      {errors?.phone && (
                        <p className="text-red-500">Phone cannot be empty.</p>
                      )}
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                      <label
                        htmlFor="voicemail"
                        className="pb-2 text-sm font-bold text-gray-800  "
                      >
                        Is it okay to leave a voicemail at above phone number?
                      </label>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="voicemail"
                            name="voicemail"
                            type="radio"
                            className="focus:ring-wcyan h-4 w-4 text-wcyan border-gray-300"
                            value={voicemail === 'yes'}
                            onChange={handleYesChange}
                            // onChange={(e) => {
                            //   setVoicemail(e.target.value);
                            // }}
                          />{' '}
                          {errors?.voicemail && (
                            <p className="text-red-500">
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor="voicemail"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="voicemail"
                            name="voicemail"
                            type="radio"
                            className="focus:ring-wcyan h-4 w-4 text-wcyan border-gray-300"
                            value={voicemail === 'no'}
                            onChange={handleNoChange}
                            // onChange={(e) => {
                            //   setVoicemail(e.target.value);
                            // }}
                          />{' '}
                          {errors?.voicemail && (
                            <p className="text-red-500">
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor="voicemail"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                    You will be contacted before an appointment is offered. If
                    you would like to provide any additional information to the
                    scheduling coordinator, please do so when you are contacted
                    via telephone.
                  </div>
                </div>
              </div>

              <div className="mx-auto w-11/12 xl:w-full mb-20">
                <div className="w-full py-4 sm:px-0 bg-white items-center  flex-col justify-start">
                  <button
                    type="submit"
                    className="px-10 mt-8 py-2  text-white bg-wcyan border border-wcyan hover:bg-wcyan/70 hover:border hover:border-wcyan font-bold rounded-md text-lg flex flex-row items-center"
                  >
                    {buttonText}
                  </button>
                  <div className="text-left">
                    {showSuccessMessage && (
                      <p className="text-green-500 font-semibold text-lg my-2 max-w-lg">
                        Thank you!
                        <br /> Your message has been delivered and an
                        appointment specialist will reach out as soon as
                        possible.
                      </p>
                    )}
                    {showFailureMessage && (
                      <p className="text-red-500">
                        Oops! Something went wrong, please try again.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
