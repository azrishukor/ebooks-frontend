# Use Node.js LTS as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

<<<<<<< HEAD
# Copy the entire frontend project
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server
RUN npm install -g serve

# Expose the frontend port
EXPOSE 5173

# Serve the built frontend
CMD ["serve", "-s", "dist", "-l", "5173"]
=======
# Copy the entire backend project
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["npm", "run", "dev"]
>>>>>>> aab5ab45903a37d2f6e85e3897d0ecb82bf23940
