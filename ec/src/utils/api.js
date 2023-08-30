import axios from "axios";
// import * as dotenv from 'dotenv'

// dotenv.config();



const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STIRPE_KEY
  
  },
};
console.log(params);

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      params,
    );

    console.log(process.env.REACT_APP_DEV_URL + url);
    console.log(url)
    console.log(process.env.REACT_APP_DEV_URL);
    console.log("data from:", response.data);

    return response.data;
  } catch (err) {
    console.log(err);
    throw err; // Re-throw the error to handle it at the caller's level
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,

  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_STIRPE_KEY,
  },
});
