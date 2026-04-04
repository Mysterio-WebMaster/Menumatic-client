# Stage 1: Build (using a light node alpine image)
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production-ready Tiny Nginx
FROM nginx:alpine
# Copy our custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built static files
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]