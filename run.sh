docker network create url-shortener-2-network

docker stop url-shortener-2-db
docker rm --volumes url-shortener-2-db

MSYS_NO_PATHCONV=1 docker run \
    --name url-shortener-2-db \
    --network url-shortener-2-network \
    --expose 3306 -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=test \
    -v "$(pwd)/database.sql:/docker-entrypoint-initdb.d/database.sql" \
    -d mysql:8.0.33

docker stop url-shortener-2-backend
docker rm --volumes url-shortener-2-backend

MSYS_NO_PATHCONV=1 docker run \
    --name url-shortener-2-backend \
    --network url-shortener-2-network \
    --expose 9876 -p 9876:3000 \
    -v "$(pwd)/backend:/app" \
    -w /app \
    -d node:18 \
    sh -c 'npm install && npm run start'    

docker stop url-shortener-2-frontend
docker rm --volumes url-shortener-2-frontend

MSYS_NO_PATHCONV=1 docker run \
    --name url-shortener-2-frontend \
    --network url-shortener-2-network \
    --expose 9877 -p 9877:3000 \
    -v "$(pwd)/frontend:/app" \
    -w /app \
    -d node:18 \
    sh -c 'npm install && npm run start'    