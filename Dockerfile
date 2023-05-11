# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the container
COPY . .

# Set the environment variable to production
ENV NODE_ENV production

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
