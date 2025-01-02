# gcp-test
Testing GCP build functions

NGINX on Ubuntu 20.04
-test4

```bash
docker build -t nginx7 ./
docker run -d -p 80:8081 --name ngin-test nginx7
```