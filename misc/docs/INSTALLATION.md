# Installing the application on a linux-based server

## Server prerequisities

(These are the only tested versions, latest stable versions should work)

- docker: version 19.03.12, build 48a66213fe
- docker-compose: version 1.26.0, build d4451659
- nginx: nginx/1.14.0 (Ubuntu)
- certbot verson: 0.31.0-1+ubuntu18.04.1+certbot+1

## Server file structure

The file structure of the application need to follow the following hierarchy:

- docker-compose.yml (file, you can leave empty for now)
- api (folder)
- app (folder)

Create the following file structure. You can place the it anywhere in the server, the only requirement is that docker-compose needs to be able to read the files.

## Downloading the source code

### API

Download the latest source code from the master branch of https://github.com/JonesTPG/LUT-dataviz-strapi to the **api** folder.

### APP

Download the latest source code from the master branch of https://github.com/JonesTPG/LUT-dataviz-app to the **app** folder.

## Setting up environment variables

### docker-compose

The only thing that needs to be configured to docker-compose.yml file is the database-related information. If you plan to run this setup in a public server, it is stronly recommended to change the default values provided in the files. Refer to the docker-compose.yml file below:

[Example docker-compose.yml](./files/docker-compose.yml)

Make the appropriate changes to the file and copy its contents to the server.

### Strapi

The React application doesn't have any secrets to hide, but the Strapi CMS needs to know database connection credentials. These are provided to Strapi by creating a .env file in the **api** folder. The database related information need to match in the **docker-compose.yml** and the **.env** file. Refer to this example Strapi .env file:

[Example production .env file](./files/.env)

## Running the docker-compose environment

When the above configurations are made, you are ready to run the application with docker-compose. First, build it with

**docker-compose build**

and then run with

**docker-compose up -d**

## Uploading initial data to database

TBD.

## Setting up the nginx reverse proxy

The docker-compose file is configured in such a way that it exposes the containers to the linux host machine in the following manner:

- app: 3000
- api: 3001
- mongodb: 3002

This information is the starting point in setting up the nginx reverse proxy. Before configuring anything, you should have the following information gathered:

- the domain of the application (the A record of the domain needs to point to the linux server public ip)
- whether or not you want to use SSL connection (https:// instead of http://)

### Nginx config files

Create a config file for the reverse proxy setup:

**sudo touch /etc/nginx/sites-available/reverse_proxy.conf**

Paste in the content from [here:](./files/reverse_proxy_initial.conf)

Change the value of **server_name** directive to your domain. Then create a symlink that enables the configuration in nginx: **sudo ln -s /etc/nginx/sites-available/reverse_proxy /etc/nginx/sites-enabled/**

Next, create a config file for upstream config for Strapi:

**sudo touch /etc/nginx/conf.d/upstream.conf**

Paste in the content from [here:](./files/upstream.conf)

### Setting up SSL certificate (skip if https is not needed)

Install the SSL certificate with Certbot:

**sudo certbot --nginx -d DOMAIN_NAME** (replace DOMAIN_NAME with your domain, eg. datacardulator.eu)

Follow the instructions of Certbot, and choose "redirect" when asked whether or not the site should be forced to always use https.

Now you can inspect **/etc/nginx/sites-available/reverse_proxy.conf** and verify that Certbot has added some custom directives to the config file.
