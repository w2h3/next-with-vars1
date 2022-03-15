export default function Banner({ pageName, imageURL }) {
  return (
    <div className="relative mt-[4rem]">
      <div className="absolute inset-0">
        {/* container  */}
        <img className="w-full h-full object-cover" src={imageURL} alt="" />
        <div
          className="absolute  inset-0  bg-black bg-opacity-40"
          aria-hidden="true"
        />
        {/* bg-gradient-to-r from-white via-black/10 to-white */}
      </div>
      <div className="relative max-w-7xl mx-auto py-20 px-4   sm:px-6 lg:px-8">
        <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl text-center mt-20">
          {pageName}
        </h1>

        {/* <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p> */}
        <div className="pt-20"></div>

        <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-7 px-10">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border  text-base font-bold rounded-xl shadow-sm text-white bg-wcyan hover:bg-opacity-60  hover:text-white border-white sm:px-8 text-center"
            >
              REQUEST AN APPOINTMENT
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-wcyan text-base font-bold rounded-xl shadow-sm text-wcyan bg-white hover:text-wcyan/60  sm:px-8"
              // hover:text-white
            >
              NEW PATIENT FORM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
