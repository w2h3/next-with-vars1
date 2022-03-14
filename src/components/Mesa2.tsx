import React from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import Spots from './home/Spots';

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

export default function Map() {
  const offices = [
    {
      id: '1',
      field_address: {
        locality: 'Mesa',
        postal_code: '85212',
        address_line1: '2919 S. Ellsworth Road',
        address_line2: 'Suite 135',
        latitude: 33.36246,
        longitude: -111.63458,
      },
    },
    {
      id: '3',
      field_address: {
        locality: 'Antwerpen',
        postal_code: '2000',
        address_line1: 'Meir 1',
        address_line2: 'a',
        latitude: 51.21878,
        longitude: 4.40559,
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
  const onLoad = React.useCallback(
    (mapInstance) => {
      const bounds = new google.maps.LatLngBounds();
      offices.forEach((office) => {
        bounds.extend(
          new google.maps.LatLng(
            office.field_address.latitude,
            office.field_address.longitude
          )
        );
      });
      mapRef.current = mapInstance;
      mapInstance.fitBounds(bounds);
    },
    [offices]
  );
  const onClickMarker = (officeId: string) => {
    setSelectedOffice(offices.find((office) => office.id === officeId));
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
            onLoad={onLoad}
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
