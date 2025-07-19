#!/bin/sh

# Use Railway's PORT or default to 80
PORT=${PORT:-80}

# Create nginx config with the correct port
envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Start nginx
nginx -g 'daemon off;'