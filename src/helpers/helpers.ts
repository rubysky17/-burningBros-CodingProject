export const urlencode = (str: any) => {
  str = (str + "").toString();

  return encodeURIComponent(str)
    .replace(/!/g, "%21")
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/\*/g, "%2A")
    .replace(/%20/g, "+");
};

export const buildQueryString = (
  queries: any,
  whiteList: any = [],
  bridgeSign: string = "?"
) => {
  const queryString: any = [];
  const checkWhitelist: boolean = whiteList.length > 0 ? true : false;
  Object.keys(queries).forEach((prop) => {
    if (queries[prop] !== "") {
      if (checkWhitelist) {
        if (whiteList.includes(prop)) {
          queryString.push(urlencode(prop) + "=" + urlencode(queries[prop]));
        }
      } else {
        queryString.push(urlencode(prop) + "=" + urlencode(queries[prop]));
      }
    }
  });

  return queryString.length > 0 ? `${bridgeSign}${queryString.join("&")}` : "";
};
