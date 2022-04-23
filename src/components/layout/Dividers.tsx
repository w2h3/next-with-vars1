export default function Divider({ sectionName }) {
  return (
    <>
      <h2 className="pt-12 text-[#00847D]/80 font-semibold tracking-widest uppercase text-center text-4xl font-oxygen">
        {sectionName}
      </h2>
      <div className="border-b border-2 rounded-2xl opacity-25 inline-block w-[300px] border-[#00847D]"></div>
    </>
  );
}
