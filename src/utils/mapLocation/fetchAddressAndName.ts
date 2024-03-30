interface AddressResult {
  addressName: string;
  placeName: string;
}

const fetchAddressAndName = async (
  lat: number,
  lng: number,
): Promise<AddressResult> => {
  const geocoder = new kakao.maps.services.Geocoder();
  const places = new kakao.maps.services.Places();

  const coord2Address = (lat: number, lng: number): Promise<string> =>
    new Promise((resolve, reject) => {
      geocoder.coord2Address(lng, lat, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          resolve(result[0].address.address_name);
        } else {
          reject(new Error("Geocoder failed"));
        }
      });
    });

  const keywordSearch = (query: any): Promise<string> =>
    new Promise((resolve) => {
      places.keywordSearch(query, (data, status) => {
        if (status === kakao.maps.services.Status.OK && data[0]) {
          resolve(data[0].place_name);
        } else {
          resolve(query); // 검색 실패하거나 결과가 없으면 query(= addressname) 반환
        }
      });
    });

  try {
    const addressName = await coord2Address(lat, lng);
    const placeName = await keywordSearch(addressName);

    return { addressName, placeName };
  } catch (error) {
    console.error(error);
    return { addressName: "", placeName: "" };
  }
};

export default fetchAddressAndName;
