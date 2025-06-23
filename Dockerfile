# ---------- Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps first for better caching
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the full source code
COPY . .

# Build the Vite app
RUN npm run build


# ---------- Production Stage ----------
FROM nginx:1.25-alpine

# Clean existing html
RUN rm -rf /usr/share/nginx/html/*

# Copy built Vite files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Add Vite-friendly Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 8080

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
