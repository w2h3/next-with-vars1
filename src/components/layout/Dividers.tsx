export default function Divider({ sectionName }) {
  return (
    <div className="text-center">
      <h2 className="pt-12 text-[#457A9A]  tracking-widest uppercase text-center text-4xl font-work">
        {sectionName}
      </h2>
      <div className="border-b border-2 rounded-2xl opacity-25 inline-block w-[100px] border-[#457A9A] "></div>
    </div>
  );
}
