import axios from "axios";

export interface iIpData {
  data: { ip: string };
}

export interface iLocationData {
  data: {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: number;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
  };
}

export const ipInfo = async () => {
  // Use Promise.all to run API requests in parallel
  const [{ data: ipData }, { data: locationData }] = await Promise.all([
    axios("https://api.ipify.org/?format=json") as Promise<iIpData>,
    axios("http://ip-api.com/json") as Promise<iLocationData>,
  ]);

  const { ip } = ipData;
  const { country, isp, lat, lon, regionName, city } = locationData;

  return { ip, country, isp, lat, lon, regionName, city };
};
