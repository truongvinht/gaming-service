import crypto from "crypto";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36";
// fetch any url
export const fetchPath = async (method, url, path, parameter = undefined, body = undefined) => {

  const headers = {
    //required headers
    "x-rpc-app_version": "1.5.0",
    "x-rpc-client_type": "4"
  };

  let param = '';

  if (parameter !== undefined && parameter != null) {
    param = `?${new URLSearchParams(parameter)}`;
  }
  
  return await fetch(
    `${url}/${path}${param}`,
    {
      method: method,
      headers: headers,
    }
  );
};

// banner?banner=a37a19624270b092e7250edfabce541a3435c2
export const fetchBanner = async (banner, lang, region = 'os_usa') => {

  // standard banner
  const headers = {
    //required headers
    "x-rpc-app_version": "1.5.0",
    "x-rpc-client_type": "4"
  };
  
  return await fetch(
    `https://webstatic-sea.hoyoverse.com/hk4e/gacha_info/${region}/${banner}/${lang}.json`,
    {
      method: 'GET',
      headers: headers,
    }
  );
};

// all banner ids
export const fetchAllBanner = async (lang, region = 'os_usa') => {

  // standard banner
  const headers = {
    //required headers
    "x-rpc-app_version": "1.5.0",
    "x-rpc-client_type": "4",
    lang:lang
  };
  
  return await fetch(
    `https://webstatic-sea.hoyoverse.com/hk4e/gacha_info/getConfigList`,
    {
      method: 'GET',
      headers: headers,
    }
  );
};

export const fetchGameRecords = async (path, ltuid, ltoken, uid, lang = 'en-us') => {

  const dsKey = generateDs(isChinese(uid));

  const headers = {
    //required headers
    "x-rpc-app_version": "1.5.0",
    "x-rpc-client_type": "4",
    "x-rpc-language": lang,
    "Accept-Encoding": "gzip, deflate",
    Accept: "*/*",
    //authentications headers
    ds: dsKey,
    // recommended headers
    "user-agent": USER_AGENT,
    Cookie: `ltuid=${ltuid}; ltoken=${ltoken}`,
  };

  return fetch(
    `${getGameRecordUrl(isChinese(uid))}/${path}?` +
      new URLSearchParams({
        server: getServer(uid),
        role_id: uid,
        schedule_type: 1,
      }),
    {
      method: "GET",
      headers: headers,
    }
  );
};

export const redeemCode = async (account_id, cookie_token, uid, code) => {

  const dsKey = generateDs(isChinese(uid));

  const headers = {
    // required headers
    'x-rpc-app_version': '1.5.0',
    'x-rpc-client_type': '4',
    'x-rpc-language': 'en',
    'Accept-Encoding': 'gzip, deflate',
    Accept: '*/*',
    // authentications headers
    ds: dsKey,
    // recommended headers
    'user-agent': USER_AGENT,
    Cookie: `account_id=${account_id}; cookie_token=${cookie_token}`,
  };

  return fetch(
    `https://sg-hk4e-api.hoyoverse.com/common/apicdkey/api/webExchangeCdkey?` +
      new URLSearchParams({
        region: getServer(uid),
        uid: uid,
        cdkey: code,
        game_biz: 'hk4e_global',
        lang:'en'
      }),
    {
      method: 'GET',
      headers: headers,
    }
  );
};


// daily checkin overview for the current month
export const checkinInfo = async (account_id, cookie_token, uid) => {

  const dsKey = generateDs(isChinese(uid));

  const headers = {
    //required headers
    "x-rpc-app_version": "1.5.0",
    "x-rpc-client_type": "4",
    //authentications headers
    ds: dsKey,
    Cookie: `account_id=${account_id}; cookie_token=${cookie_token}`,
  };

  return fetch(
    `https://hk4e-api-os.hoyoverse.com/event/sol/home?` +
      new URLSearchParams({
        act_id: 'e202102251931481',
        lang:'en-us'
      }),
    {
      method: 'GET',
      headers: headers,
    }
  );
};

// daily checkin
export const checkin = async (account_id, cookie_token, uid) => {
  const dsKey = generateDs(isChinese(uid));

  const headers = {
    //required headers
    "x-rpc-app_version": "1.5.0",
    "x-rpc-client_type": "4",
    //authentications headers
    ds: dsKey,
    Cookie: `account_id=${account_id}; cookie_token=${cookie_token}`,
  };

  return fetch(
    `https://hk4e-api-os.hoyoverse.com/event/sol/sign?` +
      new URLSearchParams({
        act_id: 'e202102251931481',
        lang:'en-us'
      }),
    {
      method: "POST",
      headers: headers,
    }
  );
};


// get overview of claimed rewards
export const checkinAward = async (account_id, cookie_token, uid) => {
  const dsKey = generateDs(isChinese(uid));

  const headers = {
    //required headers
    "x-rpc-app_version": "1.5.0",
    "x-rpc-client_type": "4",
    //authentications headers
    ds: dsKey,
    Cookie: `account_id=${account_id}; cookie_token=${cookie_token}`,
  };

  // current_page should be iterated
  return fetch(
    `https://hk4e-api-os.hoyoverse.com/event/sol/award?` +
      new URLSearchParams({
        act_id: 'e202102251931481',
        current_page:1
      }),
    {
      method: "GET",
      headers: headers,
    }
  );
};

export const postGameRecords = async (path, ltuid, ltoken, uid, lang = 'en-us') => {

  const dsKey = generateDs(isChinese(uid));

  const headers = {
    //required headers
    "x-rpc-app_version": "1.5.0",
    "x-rpc-client_type": "4",
    "x-rpc-language": lang,
    "Accept-Encoding": "gzip, deflate",
    Accept: "*/*",
    //authentications headers
    ds: dsKey,
    // recommended headers
    "user-agent": USER_AGENT,
    Cookie: `ltuid=${ltuid}; ltoken=${ltoken}`,
  };

  return fetch(
    `${getGameRecordUrl(isChinese(uid))}/${path}`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        server: getServer(uid),
        role_id: uid
      })
    }
  );
};

export const getHoyolabUrl = (isChinese = false) => {
  if (isChinese) {
    return "https://bbs-api.mihoyo.com";
  } else {
    return "https://api-os-takumi.mihoyo.com/community";
  }
};

export const getGameRecordUrl = (isChinese = false) => {
  if (isChinese) {
    return "https://api-takumi.mihoyo.com/game_record/app";
  } else {
    return "https://bbs-api-os.hoyoverse.com/game_record";
  }
};

export const getServer = (uid) => {

  if (uid == null || uid === undefined) {
    return undefined;
  }
  const uidStr = `${uid}`;

  switch(uidStr[0]) {
    case '1': return 'cn_gf01';
    case '2': return 'cn_gf01';
    case '5': return 'cn_qd01';
    case '6': return "os_usa";
    case '7': return "os_euro";
    case '8': return "os_asia";
    case '9': return "os_cht";
    default:
      return undefined;
  }
}

const isChinese = (uid) => {

  if (uid == null || uid === undefined) {
    return undefined;
  }
  const uidStr = `${uid}`;

  switch(uidStr[0]) {
    case '1': return true;
    case '2': return true;
    case '5': return true;
    default:
      return false;
  }
}

const getSalt = (isChinese) => {

  // OS DS Salt key
  const OS_DS_SALT = "6cqshh5dhw73bzxn20oexa9k516chk7s";
  const CN_DS_SALT = "xV8v4Qu54lUKrEYFZkJhB8cuOh9Asafs";

  if (isChinese) {
    return CN_DS_SALT;
  } else {
    return OS_DS_SALT;
  }
};

const generateDs = (isChinese = false) => {
  const time = Math.floor(Date.now() / 1000);

  // six symbols
  const length = 6;

  const s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const res = [];
  for (let i = 0; i < length; ++i) {
    res.push(s[Math.floor(Math.random() * s.length)]);
  }

  const random = res.join("");

  const c = crypto
    .createHash("md5")
    .update(`salt=${getSalt(isChinese)}&t=${time}&r=${random}`)
    .digest("hex");
  return `${time},${random},${c}`;
};
