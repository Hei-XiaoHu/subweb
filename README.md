# subweb

基于 [subconverter](https://github.com/tindy2013/subconverter) 的订阅转换前端，Fork 自 [stilleshan/subweb](https://github.com/stilleshan/subweb) 并做了如下改进：

- 客户端默认仅保留 Clash，可通过配置文件自行扩展
- 参数（Emoji / UDP）默认开启，无需手动展开参数面板
- 修复"自定义远程配置地址"下拉框显示异常的 bug；自定义地址留空时回退到列表第一项，而不是交给后端默认模板
- "关闭证书检查"未勾选时不传 `scv`，节点自带的 `insecure`/`skip-cert-verify` 原样保留（传 `scv=false` 会把所有节点强制改成校验证书）
- 未配置短链服务时自动隐藏短链功能
- 精简 Docker 镜像（仅包含构建产物），启动更快
- 仅保留 docker-compose 部署方式

*GitHub [Hei-XiaoHu/subweb](https://github.com/Hei-XiaoHu/subweb)*
*Docker [heixiaohu/subweb](https://hub.docker.com/r/heixiaohu/subweb)*

## 部署

```shell
git clone https://github.com/Hei-XiaoHu/subweb.git
cd subweb
docker compose up -d
```

访问 `http://127.0.0.1:18080`

首次启动会在 `./conf/` 下自动生成默认 `config.js`，修改后刷新页面即生效（无需重启容器）。

> 默认端口仅绑定 `127.0.0.1`，推荐使用 nginx 反向代理对外提供服务。

## 配置说明

`conf/config.js`：

| 配置项 | 说明 |
| --- | --- |
| `siteName` | 网站标题 |
| `apiUrl` | 后端 subconverter 服务地址 |
| `shortUrl` | 短链服务地址，留空则页面不显示短链功能 |
| `targetOptions` | 客户端列表，默认仅 Clash，取消注释可启用更多客户端 |
| `menuItem` | 导航菜单 |
| `remoteConfigOptions` | 远程配置下拉列表，第一项为默认项 |

## 参数面板

| 参数 | subconverter 参数 | 作用 |
| --- | --- | --- |
| Emoji | `emoji` | 按节点名里的地区给名称加国旗 emoji |
| 开启UDP | `udp` | 节点 `udp: true`（游戏/语音需要） |
| 排序节点 | `sort` | 按节点名排序（含策略组内顺序）；不勾选保持订阅原顺序 |
| 关闭证书检查 | `scv` | 勾选才传 `scv=true`，所有节点 `skip-cert-verify: true`；不勾选不传，节点各自的设置生效 |
| Node List | `list` | 只输出节点列表（Clash 为仅含 `proxies:` 的 YAML，可直接当 `proxy-providers` 用；V2Ray 为 URI 列表），不带策略组与规则 |

## 本地开发

```shell
npm install
npm run serve
```

## 链接

- [Hei-XiaoHu/subweb](https://github.com/Hei-XiaoHu/subweb)
- [Hei-XiaoHu/ACL4SSR](https://github.com/Hei-XiaoHu/ACL4SSR)
- [tindy2013/subconverter](https://github.com/tindy2013/subconverter)
