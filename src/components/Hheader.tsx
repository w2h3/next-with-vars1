export default function Hheader({ pageName, imageURL }) {
  return (
    <div className="relative mt-[4rem]">
      <div className="absolute inset-0  container w-screen ">
        <img className="w-full h-full object-contain " src={imageURL} alt="" />
        <div
          className="absolute  inset-0  bg-gradient-to-r from-white via-black/10 to-white"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
          {pageName}
        </h1>
        {/* <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p> */}
      </div>
    </div>
  );
}
