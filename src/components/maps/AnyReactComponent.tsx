export interface newProps {
  lat: Number;
  lng: Number;
  text: any;
}

export default function AnyReactComponent(props: newProps) {
  return <div className="cmarker">Office</div>;
}
