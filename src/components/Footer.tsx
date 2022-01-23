import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-fill bg-black/90 py-4 mt-40 flex">
      <h3 className="text-white text-lg mx-auto">
        Made By <Link href={'https://wingertproject'}>James Wingert</Link>
      </h3>
    </footer>
  );
};

export default Footer;
