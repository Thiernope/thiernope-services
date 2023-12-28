ARG NODE_VERSION=16-alpine3.12

FROM node:${NODE_VERSION}

LABEL name="thiernope-services"
LABEL license="MIT"
LABEL description="Thiernope Services Image"


ENV NODE_ENV=development

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

RUN addgroup --system thiernope-gang \
    && adduser --system --ingroup thiernope-gang thiernope-gang-user

COPY package*.json ./

RUN npm install

COPY --chown=thiernope-gang-user:thiernope-gang . ${APP_HOME}

RUN chown thiernope-gang-user:thiernope-gang ${APP_HOME}

USER thiernope-gang-user

CMD ["npm", "run", "dev"]