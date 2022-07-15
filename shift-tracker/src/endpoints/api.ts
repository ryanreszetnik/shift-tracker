import Constants from "expo-constants";

const BASE_URL = `http://192.168.0.17:3000`;

const headers = {
  "Content-Type": "application/json",
};
import axios from "axios";
const get = async (path: string) => {
  const URL = `${BASE_URL}${path}`;
  let response;
  try {
    response = await axios.get(URL, { headers });
  } catch (e) {
    console.log("Error", e);
  }
  return response?.data;
};

const post = async (path: string, body: any) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

export default {
  get,
  post,
};
