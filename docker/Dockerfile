# Use official Node.js image
FROM node:18

# Set the working directory
# WORKDIR /app
WORKDIR /Aggregationincode/project1/mongodb-aggregation-app
WORKDIR /app
COPY . /app



# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose port (same as the one your server runs on)
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
