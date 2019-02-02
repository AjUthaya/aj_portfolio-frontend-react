# Image
FROM ajuthaya/nginx-node

# Clone repo:
# A. DEV
COPY . /opt/app/aj_portfolio/frontend
# B. PROD
#RUN git clone https://github.com/AjUthaya/aj_portfolio-frontend-react.git /opt/app/aj_portfolio/frontend

# Copy config into project folder
COPY ./src/local.js /opt/app/aj_portfolio/frontend/src/local.js

# Set work directory
WORKDIR /opt/app/aj_portfolio/frontend

# Install packages for production only
# Build project
# Clear out NGINX folder
# Copy build files into NGINX folder
RUN npm update && \
    npm run build && \
    rm -R /usr/share/nginx/html/* && \
    cp -R /opt/app/aj_portfolio/frontend/build/* /usr/share/nginx/html