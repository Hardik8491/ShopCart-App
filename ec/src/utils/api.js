import axios from "axios";
// import * as dotenv from 'dotenv'

// dotenv.config();



const params = {
  headers: {
    Authorization: "Bearer 59266659e8c96582b5b5497bd3549b403ab0730308cc3f088a367f1093e9d3c0d2a2a8ad5bf5e5d2d224a4eacbc9641e15c11129768eda1f17a364933fc46698971f051e012eeb628ebf7bf75affe443df463f54880fe3fb55794aa9ffe34e0f3fbe968f3ecda15caaac27140e39d2a76ca623f124040ff14393083d7fcfb525"
  
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
