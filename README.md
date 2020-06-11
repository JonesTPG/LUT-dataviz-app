# Card App

## Running the application

### Docker

Instructions for running the application with docker:

1. git clone https://github.com/JonesTPG/LUT-dataviz-app

2. docker build -t app .

3. docker run -p 3000:80 app

4. Go to localhost:3000 with a browser

### Manually

Instructions for running the application manually:

The local environment assumes that the backend is located at localhost:1337. You can override this by creating a

.env.development.local

file in the root of repository and changing the variable REACT_APP_API_URL.

1. git clone https://github.com/JonesTPG/LUT-dataviz-app

2. npm install

3. npm start

4. Go to localhost:3000 with a browser
