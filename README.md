# gcp-test
Testing GCP build functions

NGINX on Ubuntu 20.04
-test6

```bash
docker build -t ununtu-nginx ./
docker run -d -p 8081:80 --name ununtu-nginx-custom ununtu-nginx
```