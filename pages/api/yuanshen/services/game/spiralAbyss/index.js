import { fetchGameRecords } from "../../../../../../utils/hoyoverseHandler";

// external access
export default async function handler(req, res) {
  const h = req.headers;

  // validation req username and pwd
  if (
    !h.hasOwnProperty("ltuid") ||
    !h.hasOwnProperty("ltoken") ||
    !h.hasOwnProperty("uid")
  ) {
    res.status(400).json();
    return;
  }

  // extract prev inputs
  const ltuid = h.ltuid;
  const ltoken = h.ltoken;
  const uid = h.uid;

  const hoyoReq = await fetchGameRecords(
    'genshin/api/spiralAbyss',
    ltuid,
    ltoken,
    uid,
    'de-de'
  );

  if (hoyoReq.ok) {
    const data = await hoyoReq.json();
    res.status(200).json(data);
  } else {
    res.status(500).json();
  }
}