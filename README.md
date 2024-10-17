
## Table of Contents

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)
## About The Project
![1](https://github.com/user-attachments/assets/bd8a78be-e69a-41cf-bd2e-7f912c2f9718)
Weather App, a project created using OpenWeatherAPI. It has user-friendly and simple UI, making it simple to use and just get started. 
### Built With
These are the frameworks/libraries used to create this project. 

* [![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.3.3-563d7c)](https://getbootstrap.com)
* [![Expressjs](https://img.shields.io/badge/Express-v4.19.02-eeeeee)](https://expressjs.com)
* [![Node.js](https://img.shields.io/badge/Node.js-v22.9.0-417e38)](https://nodejs.org/en)
* [![body-parser](https://img.shields.io/badge/body--parser-v1.20.2-blue)](https://www.npmjs.com/package/body-parser)
* [![OpenWeatherAPI](https://img.shields.io/badge/OpenWeatherAPI-orange)](https://openweathermap.org/api)



### Features

- Shows current forecast 
- Search the place you are interested in
- Forecast available in both metric and imperial units
- Shows additional information such as humidity, wind speed




## Getting Started
This section will guide you through setting up and running the weather app on your local machine.
### Prerequisites
Ensure you have the following installed on your local development machine:
* Node.js (v18 or above) – [Download here](https://nodejs.org/en/download/package-manager)
* npm (Node package manager) – Comes with Node.js
* Code editor or IDE. Recommended - [Visual Studio Code](https://code.visualstudio.com/download)
* OpenWeather API key - [API](https://openweathermap.org/api)
* Install nodemon globally:
```bash
  npm install -g nodemon
```
### Installation

Clone the project

```bash
  git clone https://github.com/pragyan-ghimire/WeatherApp.git
```

Go to the project directory

```bash
  cd /path/WeatherApp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon index.js
```


## Usage

Once the server is running, you can use the WeatherApp webpage as follows:

### 1. Access the main page

- Open your browser and go to `http://localhost:3000`.
- Here, you will find everything you need. Explore!
![1](https://github.com/user-attachments/assets/bd8a78be-e69a-41cf-bd2e-7f912c2f9718)


### 2. Select imperial unit

- Click on F &deg; button.
![2](https://github.com/user-attachments/assets/4b47ac7a-77b0-44d4-afd7-e1f7526e786e)


### 3. Search location you want

- Just got to search bar and type the location you want to search for.
![3](https://github.com/user-attachments/assets/3e67f3a2-888f-4318-8ebf-6b2970ea2557)


## FAQ

#### Is it responsive?

Yes, it is responsive for large devices like laptop, computer etc. and medium sized devices like tablets.

#### Is the search feature availabe?

Yes, it is available.

#### Can I search for any location I want?

Yes, you can search for any location you want but remember two things while searching.
- You can only search for city of country and not the country itself.
- The name of the city should be correct.

