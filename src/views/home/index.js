const getSubLink = function (urls, api, target, remoteConfig, moreConfig) {
  let linkLst = urls
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l !== '');
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
  // 未勾选时不传 scv，交给节点自身的设置决定（hy2 链接里的 insecure=1 会原样生效）；
  // 传 scv=false 会强制把所有节点（包括 hy2）的 skip-cert-verify 改成 false。
  if (moreConfig.scv) {
    finalUrl = finalUrl + '&scv=true';
  }
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
