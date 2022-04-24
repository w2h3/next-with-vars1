import tester from '/public/banner2.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div
        className="bg-no-repeat  bg-right bg-cover min-h-screen hero"
        style={{
          backgroundImage: `url(${tester.src})`,
          // backgroundPositionX: 'right',
        }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="text-center hero-content text-neutral-content">
          <div className="w-full">
            <h1 className="mb-6 text-5xl font-bold">
              Hello there, welcome to our daisy gallery
            </h1>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
