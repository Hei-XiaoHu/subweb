window.config = {
  // 网站标题
  siteName: 'Subconverter Web',
  // API 地址（后端 subconverter 服务地址）
  apiUrl: 'http://127.0.0.1:25500',
  // 短域名服务地址，留空则页面不显示短链功能
  shortUrl: '',
  // 客户端列表：默认仅显示 Clash。
  // 如需更多客户端，取消下方注释并按需保留即可（value 为 subconverter 的 target 参数）。
  // targetOptions: [
  //   { value: 'clash', text: 'Clash' },
  //   { value: 'clashr', text: 'ClashR' },
  //   { value: 'v2ray', text: 'V2Ray' },
  //   { value: 'quan', text: 'Quantumult' },
  //   { value: 'quanx', text: 'Quantumult X' },
  //   { value: 'surge&ver=2', text: 'SurgeV2' },
  //   { value: 'surge&ver=3', text: 'SurgeV3' },
  //   { value: 'surge&ver=4', text: 'SurgeV4' },
  //   { value: 'surfboard', text: 'Surfboard' },
  //   { value: 'ss', text: 'SS (SIP002)' },
  //   { value: 'sssub', text: 'SS Android' },
  //   { value: 'ssd', text: 'SSD' },
  //   { value: 'ssr', text: 'SSR' },
  //   { value: 'loon', text: 'Loon' },
  //   { value: 'singbox', text: 'Sing-box' },
  // ],
  // 首页菜单
  menuItem: [
    {
      title: '首页',
      link: '/',
      target: '',
    },
    {
      title: 'GitHub',
      link: 'https://github.com/Hei-XiaoHu/subweb',
      target: '_blank',
    },
  ],
  // 远程配置地址,可以自行按照格式添加。留空数组则仅显示"自定义远程配置地址"。
  remoteConfigOptions: [
    {
      value: 'https://raw.githubusercontent.com/Hei-XiaoHu/ACL4SSR/refs/heads/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini',
      text: '[推荐·Mihomo内核]Full_AdblockPlus',
    },
    {
      value: 'https://raw.githubusercontent.com/Hei-XiaoHu/ACL4SSR/refs/heads/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus_Stash.ini',
      text: '[推荐·Premium内核]Full_AdblockPlus_Stash',
    },
  ],
};
