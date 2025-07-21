# === 🏗 Stage 1: Build the application ===
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only necessary files for installing dependencies
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the full project code
COPY . .

# Build the app (assumes @nestjs/cli is in devDependencies)
RUN npm run build

# === 🚀 Stage 2: Create a clean production image ===
FROM node:18-alpine AS prod

# Set working directory
WORKDIR /app

# Copy only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy build output from builder stage
COPY --from=builder /app/dist ./dist

# Copy the environment file
COPY --from=builder /app/.env .env

# Expose port if required (e.g., 3000 for NestJS)
# EXPOSE 3000

# Run the app
CMD ["node", "dist/main"]
