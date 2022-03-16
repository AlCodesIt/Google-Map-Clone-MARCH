import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

var options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "4a54ccb1e0mshd24fd8f4fb99096p16f7fbjsn738884be5a1d",
  },
};

export const getApiData = async (sw, ne, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_TRAVEL_API_HOST,
          "x-rapidapi-key": process.env.REACT_APP_TRAVEL_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(`Fetch data error: ${error}`);
  }
};
