import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/everything?",
});

const baseURL = "https://newsapi.org/v2/everything?";
const apiToken = "apiKey=78fdf3af3c48480295baba22dcb78ce0";

export const getAllNews = async () => {
  let res = await api.get(baseURL + "q=Israel&" + apiToken, {
    params: { _limit: 40 },
  });
  console.log(res);
  return res;
};

export const getQuery = async (q: string) => {
  let res = await api.get(baseURL + "q=" + q + "&" + apiToken);
  console.log(res);
  return res;
};

export const getSorted = async (sortBy: string) => {
  let res = await api.get(baseURL + "sortBy=" + sortBy + "&" + apiToken);
  console.log(res);
  return res;
};

export const getFromDate = async (from: string) => {
  let res = await api.get(baseURL + "From=" + from + "&" + apiToken);
  console.log(res);
  return res;
};

export const getCustomQuery = async (
  q?: string,
  qInTitle?: string,
  sources?: string,
  domain?: string,
  excludeDomains?: string,
  from?: string,
  to?: string,
  language?: string,
  sortBy?: string,
  pageSize?: string,
  page?: string
) => {
  const r_q = "q" + q + "&";
  const r_qInTitle = "qInTitle" + qInTitle + "&";
  const r_sources = "sources" + sources + "&";
  const r_domain = "domain" + domain + "&";
  const r_exclude = "excludeDomains" + excludeDomains + "&";
  const r_from = "from" + from + "&";
  const r_to = "to" + to + "&";
  const r_language = "language" + language + "&";
  const r_sortBy = "sortBy" + sortBy + "&";
  const r_pageSize = "pageSize" + pageSize + "&";
  const r_page = "page" + page + "&";
  let res = await api.get(
    baseURL +
      r_q +
      r_qInTitle +
      r_sources +
      r_domain +
      r_exclude +
      r_from +
      r_to +
      r_language +
      r_sortBy +
      r_pageSize +
      r_page +
      apiToken
  );
  console.log(res);
  return res;
};
