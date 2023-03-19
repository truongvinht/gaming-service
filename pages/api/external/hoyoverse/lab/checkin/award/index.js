import { checkinAward } from '../../../../../../../utils/hoyoverseHandler';

// external access
export default async function handler(req, res) {
  const h = req.headers;

  const query = req.query;

  // from https://genshin.mihoyo.com/en/gift
  if (
    !h.hasOwnProperty('account_id') ||
    !h.hasOwnProperty('cookie_token') ||
    !h.hasOwnProperty('uid')
  ) {
    res.status(400).json();
    return;
  }

  // extract prev inputs
  const account_id = h.account_id;
  const cookie_token = h.cookie_token;
  const uid = h.uid;
  const code = query.code;

  const hoyoReq = await checkinAward(account_id, cookie_token, uid, code);

  //TODO: check ltuid matching for uid => 500 instead of 200
  if (hoyoReq.ok) {
    const data = await hoyoReq.json();
    res.status(200).json(data);
  } else {
    res.status(500).json();
  }
}
