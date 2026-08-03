FROM node:18-alpine AS build

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
LABEL maintainer="Hei-XiaoHu"

ENV VERSION=2.1

# 仅拷贝构建产物,不再携带源码,镜像更小、启动更快
COPY --from=build /app/dist /usr/share/nginx/html
# 保留一份默认配置,供挂载空 conf 目录时初始化使用
COPY --from=build /app/dist/conf/config.js /defaults/config.js
# nginx 官方镜像启动时会自动执行 /docker-entrypoint.d/ 下的脚本,无需自定义 CMD
COPY docker-entrypoint.d/40-default-config.sh /docker-entrypoint.d/40-default-config.sh
RUN chmod +x /docker-entrypoint.d/40-default-config.sh

EXPOSE 80
