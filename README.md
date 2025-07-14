# Project PreorderNow: Idea Validation & Early Access Portal

## Table of Contents

*   [1. About the Project](#1-about-the-project)
*   [2. Features](#2-features)
*   [3. Technology Stack](#3-technology-stack)
*   [4. Prerequisites](#4-prerequisites)
*   [5. Getting Started](#5-getting-started)
    *   [5.1. Build the Backend JAR](#51-build-the-backend-jar)
    *   [5.2. Start Docker Containers](#52-start-docker-containers)
*   [6. Usage](#6-usage)
*   [7. Project Structure](#7-project-structure)
*   [8. Stopping the Project](#8-stopping-the-project)
*   [9. License](#9-license)

## 1. About the Project

PreOrderNow is a web application designed to facilitate the idea validation and presale stages for future products or services. It allows businesses to collect early user interest, capture intent for free or paid plans, and gather valuable data even before a product is fully developed.

This page helps you:
*   **Validate Market Interest:** Gauge demand for your product/service features.
*   **Collect User Data:** Build an early audience and understand potential customer demographics.
*   **Presale & Fund Development:** Offer early-bird incentives and collect commitments (including payments) to fund future development.
*   **Segment Users:** Differentiate between free users (leads) and paid users (early adopters).

It's built with a robust and modern stack, ready for rapid iteration and scaling.

## 2. Features

*   **User Registration**: Securely collect user email and basic information.
*   **Plan Selection**: Allow users to choose between a Free or Paid pre-sale plan.
*   **Payment Integration** (To be implemented/noted if part of paid plan flow, current doc doesn't detail it, so leaving as a placeholder if it's meant to be there, otherwise remove).
*   **Data Persistence**: Store user registrations and plan selections in a PostgreSQL database.
*   **Responsive UI**: A modern, user-friendly interface built with React.
*   **Robust Backend**: Secure and scalable API built with Spring Boot.
*   **Containerized Deployment**: Easy setup and deployment using Docker and Docker Compose.

## 3. Technology Stack

This project leverages a modern full-stack architecture:

*   **Frontend**:
    *   [React](https://react.dev/) (User Interface)
    *   [Vite](https://vitejs.dev/) (Fast build tool for React)
    *   NPM (Package Manager)
    *   [Node.js](https://nodejs.org/en) v24 (Runtime Environment)

*   **Backend**:
    *   [Java OpenJDK 24](https://openjdk.org/) (Programming Language)
    *   [Spring Boot 3.5.3](https://spring.io/projects/spring-boot) (Web Framework)
    *   [Maven](https://maven.apache.org/) (Build Tool)

*   **Database**:
    *   [PostgreSQL 17.5](https://www.postgresql.org/) (Relational Database Management System)

*   **Deployment/Containerization**:
    *   [Docker](https://www.docker.com/)
    *   [Docker Compose](https://docs.docker.com/compose/)

## 4. Prerequisites

Before you begin, ensure you have the following installed on your system:

*   [Git](https://git-scm.com/downloads): For cloning the repository.
*   [Docker Desktop](https://www.docker.com/products/docker-desktop/): Includes Docker Engine and Docker Compose.
*   [Maven](https://maven.apache.org/download.cgi): Required to build the Spring Boot backend before Docker containerization.

## 5. Getting Started

Follow these steps from the root directory of your project:

### 5.1. Build the Backend JAR

Navigate into the `backend` directory and build the Spring Boot application. This creates the executable JAR that Docker will then use.

```bash
cd backend
mvn clean package -DskipTests
cd .. # Navigate back to the project root
```
-DskipTests is optional, but recommended for faster builds if you're certain your tests pass or want to skip them for deployment.

### 5.2. Start Docker Containers
From the root directory of your project (where docker-compose.yml is located), run Docker Compose. This command builds your images (if they haven't been built or changed), and starts all services defined in your docker-compose.yml in detached mode (-d).

```bash
docker compose up -d --build
```
up: Starts the services.
-d: Runs containers in detached mode (in the background).
--build: Forces a rebuild of images if there are changes in the Dockerfiles or build context.
If you are running Docker Desktop, you can also see the running containers there.

## 6. Usage

Once all containers are up and running:

Frontend: Open your web browser and navigate to http://localhost:5173
Backend API: The backend API will be accessible at http://localhost:8080 (though you'll primarily interact with it via the frontend).
You can now interact with the landing page:

Fill out the user registration form.
Select a plan (Free or Paid).
Submit your details.
The data will be stored in your PostgreSQL database.

## 7. Project Structure

```text
.
├── backend/                  # Spring Boot application
│   ├── src/                  # Java source code
│   ├── pom.xml               # Maven configuration
│   └── Dockerfile            # Dockerfile for backend image
├── frontend/                 # React application
│   ├── public/               # Static assets
│   ├── src/                  # React components, styles, etc.
│   ├── package.json          # NPM configuration
│   ├── vite.config.js        # Vite configuration
│   └── Dockerfile            # Dockerfile for frontend image
├── docker-compose.yml        # Defines multi-container Docker application
└── README.md                 # This file
```

## 8. Stopping the Project
To stop and remove the running Docker containers, networks, and volumes (for the database data), run the following command from the project root:

```bash
docker compose down -v
```
down: Stops and removes containers, networks, and images created by up.
-v: Removes named volumes declared in the volumes section of the docker-compose.yml file (e.g., postgres_data). Use this if you want a clean database state next time you start. Otherwise, remove -v to preserve your data.

## 9. License
[MIT, Apache 2.0]