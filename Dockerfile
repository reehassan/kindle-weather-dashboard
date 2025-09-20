# -------- Stage 1: Build Stage --------
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files (for caching)
COPY package.json package-lock.json* ./

# Install dependencies if they exist
RUN if [ -f package.json ]; then npm install; fi

# Copy all project files
COPY . .

# Run build only if defined in package.json
RUN if [ -f package.json ] && npm run | grep -q "build"; then npm run build; fi

# -------- Stage 2: Production Stage --------
FROM nginx:alpine

# Clean default nginx html folder
RUN rm -rf /usr/share/nginx/html/*

# Copy your static project files
COPY index.html config.html config.js /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY images /usr/share/nginx/html/images
COPY vendor /usr/share/nginx/html/vendor

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

