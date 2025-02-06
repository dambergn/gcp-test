# Use the official Node.js image for better compatibility and security
FROM node:20

# Install dependencies
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Add Node.js packages globally
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN npm install -g nodemon live-server

# Create app directory
WORKDIR /app

# Copy necessary files
COPY index.js package.json package-lock.json ./

# Install node dependencies
RUN npm install

# Expose the port your app runs on (e.g., 3000)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]