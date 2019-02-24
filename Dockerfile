FROM kkarczmarczyk/node-yarn

COPY package.json .
COPY yarn.lock .

RUN yarn

VOLUME ["/workspace/src", "/workspace/public", "/workspace/.git"]