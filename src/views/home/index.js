const getSubLink = function (urls, api, target, remoteConfig, moreConfig) {
  let linkLst = urls.split('\n');
  let link = linkLst.join('|');
  let finalUrl = api + '/sub?target=' + target + '&url=' + encodeURIComponent(link);
  if (remoteConfig) {
    finalUrl = finalUrl + '&config=' + encodeURIComponent(remoteConfig);
  }
  // 参数面板无论是否打开都生效，emoji 和 udp 默认开启
  if (moreConfig.include != '') {
    finalUrl = finalUrl + '&include=' + encodeURIComponent(moreConfig.include);
  }
  if (moreConfig.exclude != '') {
    finalUrl = finalUrl + '&exclude=' + encodeURIComponent(moreConfig.exclude);
  }
  finalUrl = finalUrl + '&emoji=' + (moreConfig.emoji ? 'true' : 'false');
  finalUrl = finalUrl + '&udp=' + (moreConfig.udp ? 'true' : 'false');
  finalUrl = finalUrl + '&sort=' + (moreConfig.sort ? 'true' : 'false');
  finalUrl = finalUrl + '&scv=' + (moreConfig.scv ? 'true' : 'false');
  finalUrl = finalUrl + '&list=' + (moreConfig.list ? 'true' : 'false');
  return finalUrl;
};

const regexCheck = function (url) {
  const reg_url = /https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;
  if (reg_url.test(url)) {
    return true;
  } else {
    return false;
  }
};

export { regexCheck, getSubLink };
