
import { fetchPath, getHoyolabUrl } from "../../../../../utils/hoyoverseHandler";

// external access
export default async function handler(req, res) {
  
  const headers = {
    "Accept-Encoding": "gzip, deflate",
    Accept: "*/*",
    Cookie: ``,
  };
  const hoyoReq = await fetchPath('GET', headers, getHoyolabUrl(false), 'apihub/wapi/search', {
    keyword: "demo",
    size: 20,
    gids: 2,})

  if (hoyoReq.ok) {
    const data = await hoyoReq.json();
    res.status(200).json(data);
  } else {
    console.log("bad req");
    res.status(500).json();
  }
}
