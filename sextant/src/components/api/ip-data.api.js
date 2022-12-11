import axios from "axios";

// https://api.ipify.org 98.207.254.136
// https://api64.ipify.org 2a00:1450:400f:80d::200e

export const getIpData = async (ipType) => {
  let url;
  if (ipType === "IPv4") {
    url = "https://api.ipify.org";
  } else {
    url = "https://api64.ipify.org";
  }

  return axios.get(url).then((response) => response.data);
};
