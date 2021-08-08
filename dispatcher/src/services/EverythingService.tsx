import axios from "axios";
import UrlBuilder from "./UrlBuilder";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/everything?",
});

const baseURL = "https://newsapi.org/v2/everything";
const apiToken = "apiKey=78fdf3af3c48480295baba22dcb78ce0";
const token = "78fdf3af3c48480295baba22dcb78ce0";

// backup #1 - 78fdf3af3c48480295baba22dcb78ce0
// backup #2 - 4f673bd4460848bb8899f816549094a2
// backup #3 - 42d396f81709408ba61de40141022863

export const getAllNews = async () => {
  let res = await api.get(
    baseURL + "?q=Israel&" + "sortBy=publishedAt&" + "language=en&" + apiToken,
    {
      params: { _limit: 40 },
    }
  );
  console.log(res);
  return res;
};

export const getCustomArray = async (
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

// Usage example:

// builder.setParameter('preview', "true");
// builder.setParameter('user', 'john');
// builder.setParameter('age', "20");

// console.log(builder.toString()); // https://domain.com/page?preview=true&user=john&age=20

// builder.setParameter('preview', null);
// builder.setParameter('user', null);

// console.log(builder.toString()); // https://domain.com/page?age=20
