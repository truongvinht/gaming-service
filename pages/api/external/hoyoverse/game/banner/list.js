import { fetchAllBanner } from "../../../../../../utils/hoyoverseHandler";

// external access
export default async function handler(req, res) {
  const h = req.headers;

  let lang = 'en-us';

  if (h.hasOwnProperty('lang')) {
    lang = h.lang;
  }

  const hoyoReq = await fetchAllBanner(
    lang
  );

  if (hoyoReq.ok) {
    const data = await hoyoReq.json();
    res.status(200).json(data);
  } else {
    res.status(500).json();
  }
}