# ---------- Build Stage ----------
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    # Install deps early to leverage cache
    COPY package.json package-lock.json* ./
    RUN npm install
    
    # Copy rest of the source
    COPY . .
    
    # Build the project
    RUN npm run build
    
    
    # ---------- Production Stage ----------
    FROM nginx:1.25-alpine
    
    # Remove default nginx static files
    RUN rm -rf /usr/share/nginx/html/*
    
    # Copy build output from previous stage
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # Copy custom nginx config if needed
    # COPY nginx.conf /etc/nginx/nginx.conf
    
    EXPOSE 8080
    
    CMD ["nginx", "-g", "daemon off;"]
    
