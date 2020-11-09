import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "eba238aec4517873dde69bfcb31a5e5d";
export const fetchWeather = async(query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY
    }
  });

  return data;
}