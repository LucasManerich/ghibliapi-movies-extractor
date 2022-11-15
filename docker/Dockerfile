# Build Stage
FROM node:16.14 AS build
WORKDIR /home/node/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --frozen-lockfile
COPY ["tsconfig.json", "./"]
COPY src src
RUN yarn build

# Production Stage
FROM node:16.14 AS production
WORKDIR /home/node/app
ENV NODE_ENV=production
RUN chown -R node .
USER node
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --frozen-lockfile --no-cache --production
COPY --from=build /home/node/app/dist dist/
CMD [ "node", "dist/delivery/HttpServerEntrypoint.js" ]