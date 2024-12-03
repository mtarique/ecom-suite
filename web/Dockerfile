# Use Node.js for building the React app
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the development server port
EXPOSE 3000

# Default command to run the React app (start development server)
CMD ["npm", "start"]