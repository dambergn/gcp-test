# Use the official Ubuntu 20.04 image as the base
FROM ubuntu:20.04

# Install Nginx
RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/* \
    mkdir /var/www/app \
    chown -R nginx:nxinx /var/www/app

# Copy the default Nginx configuration file
COPY default.conf /etc/nginx/conf.d/

# Copy the basic webpage files
COPY index.html /var/www/app/

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]