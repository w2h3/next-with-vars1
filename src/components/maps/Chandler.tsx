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

export default function Chandler() {
  const offices = [
    {
      id: '1',
      field_address: {
        locality: 'Mesa',
        postal_code: '85210',
        address_line1: '2045 S. Vineyard',
        address_line2: 'Bldg. N3, Suite 144',
        latitude: 33.41493,
        longitude: -111.84205,
      },
    },
  ];

  const mapRef = React.useRef<any>(null);
  const [selectedOffice, setSelectedOffice] = React.useState<
    OfficeNode | undefined | null
  >(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
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
    lat: 33.41493,
    lng: -111.84205,
  };
  return (
    <div className="App mx-auto rounded-2xl  bg-white ">
      {/* h-[40rem] */}
      {isLoaded && (
        <div className="  mx-auto rounded-2xl  ">
          <GoogleMap
            mapContainerClassName="c-office-overview__map"
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
