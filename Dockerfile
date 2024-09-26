# Use an official nginx image to serve the build
FROM nginx:alpine

# Copy the React build folder to nginx html directory
COPY build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
