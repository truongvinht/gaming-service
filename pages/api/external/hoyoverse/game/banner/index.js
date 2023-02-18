import { fetchBanner } from "../../../../../../utils/hoyoverseHandler";

// external access
export default async function handler(req, res) {
  const query = req.query;
  const h = req.headers;

  if (
    !query.hasOwnProperty("banner")
  ) {
    res.status(400).json();
    return;
  }

  // extract prev inputs
  const banner = query.banner;

  let lang = 'en-us';

  if (h.hasOwnProperty('lang')) {
    lang = h.lang;
  }

  const hoyoReq = await fetchBanner(
    banner,
    lang
  );

  if (hoyoReq.ok) {
    const data = await hoyoReq.json();
    res.status(200).json(data);
  } else {
    res.status(500).json();
  }
}