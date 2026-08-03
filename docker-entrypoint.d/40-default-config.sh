#!/bin/sh
# 挂载的 conf 目录为空时,写入默认配置,保证首次启动可用
set -e

CONF_DIR=/usr/share/nginx/html/conf

if [ ! -f "$CONF_DIR/config.js" ]; then
  mkdir -p "$CONF_DIR"
  cp /defaults/config.js "$CONF_DIR/config.js"
  echo "已生成默认配置: $CONF_DIR/config.js (可挂载目录后自行修改,刷新页面即生效)"
fi
