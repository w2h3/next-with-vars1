import {
  Accordion,
  AccordionItem,
  AccordionPanel,
} from '@/components/home/AccordComp';

export default function AccordionFirstExample() {
  return (
    <div className="mx-auto mt-10 md:hidden">
      {/* <h2 className="mb-6 text-gray-600 text-lg font-bold md:text-2xl">
            Variant 2
          </h2> */}
      <Accordion>
        <AccordionItem toggle="panel-1" className="bg-white text-black">
          Neurology
        </AccordionItem>
        <AccordionPanel id="panel-1">
          <div className="mx-4 my-6">
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
            </ul>
          </div>
        </AccordionPanel>
        <AccordionItem toggle="panel-2" className="bg-white text-black">
          Sleep
        </AccordionItem>
        <AccordionPanel id="panel-2">
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </div>
        </AccordionPanel>
        <AccordionItem toggle="panel-3" className="bg-white text-black">
          Physical Therapy
        </AccordionItem>
        <AccordionPanel id="panel-3">
          <div className="">
            dales ligula in libero. Sed dignissim lacinia nunc. Curabitur
            tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
            Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis.
          </div>
        </AccordionPanel>
        <AccordionItem toggle="panel-4" className="bg-white text-black">
          Pscychiatry
        </AccordionItem>
        <AccordionPanel id="panel-4">
          <div className="">
            dales ligula in libero. Sed dignissim lacinia nunc. Curabitur
            tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
            Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis.
          </div>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}
