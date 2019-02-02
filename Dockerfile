# Image
FROM ajuthaya/nginx-node

# Clone repo
RUN git clone https://github.com/AjUthaya/aj_portfolio-frontend-react.git /opt/app/aj_portfolio/frontend

# Copy config into project folder
COPY ./src/local.js /opt/app/aj_portfolio/frontend/src/local.js

# Set work directory
WORKDIR /opt/app/aj_portfolio/frontend

# Install packages for production only
RUN npm update

# Build project
RUN npm run build

# Clear out NGINX folder
RUN rm -R /usr/share/nginx/html/*

# Copy build files into NGINX folder
RUN cp -R /opt/app/aj_portfolio/frontend/build/* /usr/share/nginx/html