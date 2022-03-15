import React from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

type OfficeNode = {
  id: string;
  field_address: {
    locality: string;
    postal_code: string;
    address_line1: string;
    address_line2: string;
    latitude: number;
    longitude: number;
  };
};

export default function Gilbert() {
  const offices = [
    {
      id: '1',
      field_address: {
        locality: 'Gilbert',
        postal_code: '85234',
        address_line1: '4001 E Baseline Road',
        address_line2: 'Suite 205',
        latitude: 33.37871296166308,
        longitude: -111.74695413972648,
        
      },
    },
  ];

  const mapRef = React.useRef<any>(null);
  const [selectedOffice, setSelectedOffice] = React.useState<
    OfficeNode | undefined | null
  >(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCAG-NgxDPjapF14JKsWNMfAG5kdsbys_4',
  });
  // const onLoad = React.useCallback(
  //   (mapInstance) => {
  //     const bounds = new google.maps.LatLngBounds();
  //     offices.forEach((office) => {
  //       bounds.extend(
  //         new google.maps.LatLng(
  //           office.field_address.latitude,
  //           office.field_address.longitude
  //         )
  //       );
  //     });
  //     mapRef.current = mapInstance;
  //     mapInstance.fitBounds(bounds);
  //   },
  //   [offices]
  // );
  const onClickMarker = (officeId: string) => {
    setSelectedOffice(offices.find((office) => office.id === officeId));
  };
  interface newProps {
    lat: number;
    lng: number;
  }
  const center: newProps = {
    lat: 33.37871296166308, 
    lng: -111.74695413972648,
  };
  return (
    <div className="App mx-auto h-[40rem] bg-slate-100  ">
      {/* bg-slate-100 */}
      {/*outline   outline-[#22707C] */}
      {/* <div className="text-6xl font-bold">Our Locations</div> */}
      {/* <Spots /> */}
      {isLoaded && (
        <div className="  mx-auto  border-wcyan">
          {/*  */}
          <GoogleMap
            mapContainerClassName="c-office-overview__map"
            // onLoad={onLoad}
            center={center}
            zoom={15}
          >
            {offices.map((office) => (
              <Marker
                key={office.id}
                onClick={() => onClickMarker(office.id)}
                position={{
                  lat: office.field_address.latitude,
                  lng: office.field_address.longitude,
                }}
              />
            ))}
            {selectedOffice && (
              <InfoWindow
                position={{
                  lat: selectedOffice.field_address.latitude,
                  lng: selectedOffice.field_address.longitude,
                }}
                onCloseClick={() => setSelectedOffice(null)}
              >
                <p>
                  {selectedOffice.field_address.address_line1}{' '}
                  {selectedOffice.field_address.address_line2} -{' '}
                  {selectedOffice.field_address.postal_code}{' '}
                  {selectedOffice.field_address.locality}
                </p>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      )}
    </div>
  );
}
