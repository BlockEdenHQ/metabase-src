```
# development
yarn dev
# dev with a specific db
MB_DB_CONNECTION_URI=DB yarn dev


./bin/build
./bin/start

# if the build fails with 127, adjust your docker memory allocation https://www.thorsten-hans.com/limit-memory-for-docker-containers
docker build . --tag v0.44.6.1

docker push puncsky/metabase-src:v0.44.6.1

# list all local images
docker images
docker tag puncsky/metabase-src puncsky/metabase-src:v0.44.6.1
```

Then go to http://localhost:3000/
