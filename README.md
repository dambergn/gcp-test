# gcp-test
Testing GCP build functions

NGINX on Ubuntu 20.04
-test4

```bash
docker build -t nginx16 ./
docker run -d -p 8081:80 --name nginx-test nginx16
```