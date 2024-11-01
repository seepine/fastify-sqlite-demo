# step1 build
# this image is https://github.com/seepine/docker-alpine/blob/main/Dockerfile.node
# base on alpine and add glibc nodejs
FROM seepine/alpine:node-3.19 as builder
WORKDIR /workspace
RUN apk add --no-cache python3 make gcc g++
COPY package.json /workspace/package.json
RUN npm install --registry=https://registry.npmmirror.com
COPY ./ /workspace
RUN npm run build

# step2 copy
FROM seepine/alpine:node-3.19
WORKDIR /data
WORKDIR /workspace
COPY --from=builder /workspace/node_modules /workspace/node_modules
COPY --from=builder /workspace/dist /workspace
ENTRYPOINT node index.js
