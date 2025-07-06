# filename: Dockerfile

# Base image
FROM node:18

# Get the lastest version of Playwright
FROM mcr.microsoft.com/playwright

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Set the entrypoint to run the application
CMD ["npx", "playwright", "test"]