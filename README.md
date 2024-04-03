# Getting Started
To get started with the project, you'll need to have Docker and Docker Compose installed on your machine. If you haven't installed these tools yet, you can find the installation instructions on the official Docker website.

# Project Structure
The project is structured as follows:

    docker-compose.yml: This file defines the services that make up the project.
    ./: This directory contains the frontend application, including its Dockerfile for building the image.

## Services
The project uses this service:

### WhatsApp HTTP API

- Service Name: whatsapp-http-api
- Image: [devlikeapro/whatsapp-http-api](https://waha.devlike.pro)

# Running the Project
To start the project, navigate to the project directory and run the following command:
```bash
docker-compose up -d
```
This command will start the services in detached mode. The whatsapp-http-api service will be accessible on port 3000, and the frontend service will be accessible on port 8000.

# Stopping the Project
To stop the services, run the following command in the project directory:
```bash
docker-compose down
```
This command will stop and remove the containers, networks, and volumes defined in the docker-compose.yml file.

# Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues for any improvements or bug fixes.

# License
This project is licensed under the MIT License. See the LICENSE file for details.