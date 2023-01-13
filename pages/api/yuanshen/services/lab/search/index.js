
import { fetchPath, getHoyolabUrl } from "../../../../../../utils/hoyoverseHandler";

// external access
export default async function handler(req, res) {
  
  if (!req.query.hasOwnProperty("keyword") ) {
    res.status(500).json();
  } else {

    // max 20 items
    let size = 20;
    if (req.query.hasOwnProperty("size")) {
      size = req.query.size;
    }

    const hoyoReq = await fetchPath('GET', getHoyolabUrl(false), 'apihub/wapi/search', {
      keyword: req.query.keyword,
      size: size,
      gids: 2,})
  
    if (hoyoReq.ok) {
      const data = await hoyoReq.json();
      res.status(200).json(data);
    } else {
      res.status(500).json();
    }
  }
}
