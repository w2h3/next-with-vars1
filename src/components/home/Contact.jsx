import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useState} from 'react';
import Divider from '../layout/Dividers';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [subject, setSubject] = useState('Contact Form');

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Submit');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
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
    if (message.length <= 0) {
      tempErrors['message'] = true;
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
      // https://formspree.io/f/mgedplbp
      // /api/sendgrid
      // const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      //   body: JSON.stringify({
      //     fullname: fullname,
      //     email: email,
      //     phone: phone,
      //     subject: subject,
      //     message: message,
      //   }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   method: 'POST',
      // });
      let templateParams = {
        fullname: fullname,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      };
      emailjs
        .send(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_CONTACT}`,
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
      // const { error } = await response.json();
      //   if (error) {
      //     console.log(error);
      //     setShowSuccessMessage(false);
      //     setShowFailureMessage(true);
      //     setButtonText('Submit');

      //     // Reset form fields
      //     setFullname('');
      //     setEmail('');
      //     setPhone('');
      //     setMessage('');
      //     return;
      //   }
      //   setShowSuccessMessage(true);
      //   setShowFailureMessage(false);
      //   setButtonText('Submit');
      //   // Reset form fields
      //   setFullname('');
      //   setEmail('');
      //   setPhone('');
      //   setMessage('');
    }
    console.log(fullname, email, phone, message);
  };
  return (
    <div className="">
      <Divider sectionName="How did we do?" />
      <div className="container max-w-6xl pb-24">
        <div className="relative bg-[#f0fdff]/80 rounded-2xl">
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div className=" py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12">
              <div className="max-w-lg mx-auto">
                <h2 className="text-3xl font-extrabold tracking-tight text-wcyan sm:text-3xl">
                  Get in touch
                </h2>
                <p className="mt-3 text-lg leading-6 text-gray-700">
                  Suggestion? <br />
                  Good Experience? <br />
                  Bad Experience? <br />
                  <br />
                  This contact form will route directly to our Office Manager,
                  so please use it to let us know how we are doing and how we
                  can improve. <br />
                  <br /> We value all forms of feedback and can't wait to hear
                  from you!
                </p>
                <dl className="mt-8 text-base text-gray-700">
                  <div className="mt-6">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <PhoneIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3">+1 (480) 967-6888</span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex">
                      <MailIcon
                        className="flex-shrink-0 h-6 w-6 text-wcyan"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-700">
                        billing@neurologyandsleep.com
                      </span>
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-base text-gray-700">
                  Looking for basic contact form and info? <br />
                  <Link href="/contact" passHref>
                    <a className="font-medium text-wcyan underline">
                      View normal contact
                    </a>
                  </Link>
                  <br />
                </p>
              </div>
            </div>

            <div className="bg-white border-2 rounded-2xl border-[#f0fdff]/80 py-12 px-4 sm:px-6 lg:col-span-3  lg:px-8 xl:pl-12">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-y-6"
                >
                  <div>
                    {' '}
                    <input
                      type="hidden"
                      name="_subject"
                      value="Feedback Form"
                    />
                    <label htmlFor="fullname" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      autoComplete="name"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wcyan focus:border-wcyan border-gray-300 rounded-md"
                      placeholder="Full name"
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                    {errors?.fullname && (
                      <p className="text-red-500">Fullname cannot be empty.</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wcyan focus:border-wcyan border-gray-300 rounded-md"
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
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wcyan focus:border-wcyan border-gray-300 rounded-md"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                    {errors?.phone && (
                      <p className="text-red-500">Phone cannot be empty.</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={8}
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wcyan focus:border-wcyan border border-gray-300 rounded-md"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />{' '}
                    {errors?.message && (
                      <p className="text-red-500">Message cannot be empty.</p>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-wcyan hover:bg-wcyan/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wcyan/60"
                    >
                      {buttonText}
                    </button>
                    <div className="text-left">
                      {showSuccessMessage && (
                        <p className="text-green-500 font-semibold text-lg my-2">
                          Thank you! Your Message has been delivered.
                        </p>
                      )}
                      {showFailureMessage && (
                        <p className="text-red-500">
                          Oops! Something went wrong, please try again.
                        </p>
                      )}
                    </div>
                  </div>{' '}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
