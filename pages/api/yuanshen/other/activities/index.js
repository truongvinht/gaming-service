import crypto from "crypto";

const BASE_URL = "https://bbs-api-os.hoyoverse.com";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36";
const OS_DS_SALT = "6cqshh5dhw73bzxn20oexa9k516chk7s";

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

  const dsKey = generateDs();

  const headers = {
    //required headers
    "x-rpc-app_version": "1.5.0",
    "x-rpc-client_type": "4",
    "x-rpc-language": "de-de",
    "Accept-Encoding": "gzip, deflate",
    Accept: "*/*",
    //authentications headers
    ds: dsKey,
    // recommended headers
    "user-agent": USER_AGENT,
    Cookie: `ltuid=${ltuid}; ltoken=${ltoken}`,
  };

  const hoyoReq = await fetch(
    `${BASE_URL}/game_record/genshin/api/activities?` +
      new URLSearchParams({
        server: "os_euro",
        role_id: uid,
        schedule_type: 1,
      }),
    {
      method: "GET",
      headers: headers,
    }
  );

  if (hoyoReq.ok) {
    const data = await hoyoReq.json();
    res.status(200).json(data);
  } else {
    console.log("bad req");
    res.status(500).json();
  }
}

const generateDs = () => {
  const time = Math.floor(Date.now() / 1000);
  const random = randomString(6);

  const c = crypto
    .createHash("md5")
    .update(`salt=${OS_DS_SALT}&t=${time}&r=${random}`)
    .digest("hex");
  return `${time},${random},${c}`;
};

function randomString(e) {
  const s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const res = [];
  for (let i = 0; i < e; ++i) {
    res.push(s[Math.floor(Math.random() * s.length)]);
  }
  return res.join("");
}
