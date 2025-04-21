FROM node:16 AS build

# 워킹 디렉토리를 /app으로 설정한다.
WORKDIR /app

# 미리 package.json과 package-lock.json만 복사한다.
COPY package.json ./
COPY package-lock.json ./

# package.json을 기반으로 모듈을 설치한다.
RUN npm install

# (.) 도커파일이 위치한 디렉토리의 내용을 (.) 워킹 디렉토리(/app)으로 복사한다.
COPY . .

RUN npm run build

# 빌드된 결과물은 /app/build 디렉토리에 생성된다.

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
