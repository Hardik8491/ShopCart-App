import axios from "axios";
// import * as dotenv from 'dotenv'

// dotenv.config();



const params = {
  headers: {
    Authorization: "Bearer 2dbedb9b0a79aabeb968507b97f64dbbbcb79b9136df9b46c0e0698e15ba5a052656b07838d5738abfbb40b41d1b58efd22b63cff4e2e2d8fbb2e99ee9bfeb0123ae82bf9f3e0880fe32dfa936888c8cd8e4138bbe2a9b0ab8cc4e2e222ae5e1261dd72ef07d7109d48729f77cedbdb03f371392b692e59ca1a10ade1eeb12a0
  
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
    Authorization: "Bearer " + process.env.REACT_APP_STRIPE_DEV_KEY,
  },
});
