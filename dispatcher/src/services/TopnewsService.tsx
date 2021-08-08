import axios from "axios";
import UrlBuilder from "./UrlBuilder";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines?",
});

const baseURL = "https://newsapi.org/v2/top-headlines";
const apiToken = "apiKey=78fdf3af3c48480295baba22dcb78ce0";
const token = "78fdf3af3c48480295baba22dcb78ce0";

// backup #1 - 78fdf3af3c48480295baba22dcb78ce0
// backup #2 - 4f673bd4460848bb8899f816549094a2
// backup #3 - 42d396f81709408ba61de40141022863

export const getTopNews = async () => {
  let res = await api.get(baseURL + "?country=il&" + apiToken, {
    params: { _limit: 40 },
  });
  console.log(res);
  return res;
};

export const getCustomTopArray = async (
  queries: { category: string | null; id: string | null }[]
) => {
  const builder = new UrlBuilder(baseURL);
  queries.slice(1).map((q) => {
    builder.setParameter(q.category!, q.id);
  });
  builder.setParameter("apiKey", token);
  console.log(builder.toString());
  try {
    let res = await api.get(builder.toString(), { params: { _limit: 40 } });
    return res;
  } catch (err) {
    console.log("Error", err);
  }
};
