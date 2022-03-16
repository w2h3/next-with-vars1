export default function Divider({ sectionName }) {
  return (
    <h2 className=" text-wcyan font-semibold tracking-wide uppercase text-center text-2xl">
      {sectionName}
    </h2>
    // <div className="container max-w-2xl justify-center items-center flex">
    //   {/* justify-between */}
    //   <div className="inset-0 w-1/5 " aria-hidden="true">
    //     <div className=" border-t border-gray-700" />
    //   </div>
    //   <div className="flex justify-center ">
    //     <span className=" w-full bg-transparent text-3xl md:text-5xl font-bold  text-gray-700 text-center">
    //       {sectionName}
    //     </span>
    //   </div>
    //   <div className="inset-0 w-1/5 items-center " aria-hidden="true">
    //     <div className=" border-t border-gray-700" />
    //     {/* [#5582a6] */}
    //   </div>
    // </div>
  );
}
//   h2 {
//     position: relative;
//     z-index: 1;
//     overflow: hidden;
//     text-align: center;
//     margin-bottom: 1.5rem;
//     color: #5582a6;
//     font-size: 2rem;
//     line-height: 2.25rem;
//     letter-spacing: -0.025em;
//     line-height: 1;
//     max-width: 32rem;

//     @media (min-width: 640px) {
//       font-size: 2.25rem;
//       line-height: 2.5rem;
//     }
//     @media (min-width: 768px) {
//     }
//   }
