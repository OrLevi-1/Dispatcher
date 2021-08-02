import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines?",
});

const baseURL = "https://newsapi.org/v2/top-headlines?";
const apiToken = "apiKey=78fdf3af3c48480295baba22dcb78ce0";

export const getTopNews = async () => {
  let res = await api.get(baseURL + "country=il&" + apiToken, {
    params: { _limit: 40 },
  });
  console.log(res);
  return res;
};
