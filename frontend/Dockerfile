# Uses a lean Node.js image.
FROM node:22-alpine

# Sets the working directory inside the container.
WORKDIR /app

# Copies all project files into the container.
COPY . .

# Installs dependencies based on package-lock.json (good for reproducible builds).
RUN npm ci

# This command generates the optimized, minified, production-ready static assets
RUN npm run build

# Ensures Node.js knows it's in a production environment.
ENV NODE_ENV production

## This command starts a simple web server (serve) to host the static files 
# that were created in the build/ directory by npm run build. This is the 
# command that runs when your container starts.
CMD [ "npm", "run", "preview"]