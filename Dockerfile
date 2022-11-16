# Build Stage
FROM node:16.14 AS build
WORKDIR /home/node/app
COPY ["package.json", "yarn.lock", "./"]
COPY prisma prisma
RUN yarn install --frozen-lockfile
COPY ["tsconfig.json", "./"]
COPY src src
RUN yarn build

# Production Stage
FROM node:16.14 AS production
WORKDIR /home/node/app
ENV NODE_ENV=production
ENV SERVER_PORT=3000
RUN chown -R node .
USER node
COPY --from=build /home/node/app/node_modules node_modules/
COPY --from=build /home/node/app/prisma prisma/
COPY --from=build /home/node/app/package.json ./
COPY --from=build /home/node/app/yarn.lock ./
COPY --from=build /home/node/app/dist dist/
EXPOSE 3000
CMD [ "node", "dist/delivery/HttpServerEntrypoint.js" ]
