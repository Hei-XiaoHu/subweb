// 给 hy2 / hysteria2 节点链接加上 insecure=1（已有 insecure 参数则改为 1）
const setHy2Insecure = function (link) {
  if (!/^(hy2|hysteria2):\/\//i.test(link)) {
    return link;
  }
  let hashIdx = link.indexOf('#');
  let fragment = hashIdx >= 0 ? link.slice(hashIdx) : '';
  let body = hashIdx >= 0 ? link.slice(0, hashIdx) : link;
  let qIdx = body.indexOf('?');
  if (qIdx < 0) {
    return body + '?insecure=1' + fragment;
  }
  let base = body.slice(0, qIdx);
  let params = body
    .slice(qIdx + 1)
    .split('&')
    .filter((p) => p !== '' && !/^insecure=/i.test(p));
  params.push('insecure=1');
  return base + '?' + params.join('&') + fragment;
};

const getSubLink = function (urls, api, target, remoteConfig, moreConfig) {
  let linkLst = urls
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l !== '');
  if (moreConfig.hy2scv) {
    linkLst = linkLst.map(setHy2Insecure);
  }
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
  // 未勾选时不传 scv，交给节点自身的 insecure 设置决定；
  // 传 scv=false 会强制覆盖所有节点（包括 hy2）的 insecure=1。
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
