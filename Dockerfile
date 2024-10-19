# Dockerfile

# Step 1: Build Backend
FROM node:14 AS backend
WORKDIR /app/backend

# Install dependencies for backend
RUN npm install express cors

COPY backend/server.js ./

# Step 2: Build Frontend
FROM node:14 AS frontend
WORKDIR /app/frontend

# Install dependencies for frontend
RUN npm install react react-dom axios

# Copy the frontend files
COPY frontend/src ./src
COPY frontend/public ./public
COPY frontend/ ./frontend

# Build the frontend (use create-react-app command)
RUN npm install -g create-react-app
RUN create-react-app frontend && cd frontend && npm run build

# Step 3: Serve using Nginx
FROM nginx:alpine
COPY --from=frontend /app/frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
