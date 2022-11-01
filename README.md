# Getting started

## Installation

```
git clone https://github.com/mfloresss/2022_Proyecto_Integrador_Equipo_2_Back-end.git # using https
or
git clone git@github.com:mfloresss/2022_Proyecto_Integrador_Equipo_2_Back-end.git # using ssh

cd 2022_Proyecto_Integrador_Equipo_2_Back-end
npm i # install dependencies
```

### Database creation

How the first step is to create the database (named alidar), on the command line of your database provider. And the next step is to run the following command on the project:

```
npm run db:setup # Reset db, run migrations and seeds
```

## Run the app

```
npm run dev
```

## Environment Variables

By default, env files have been removed from the repo to securize our process. To work, you need to generate the env files.

Ensure the `.env` file has required environment variables:

```
DATABASE_URL=mysql://<USER>:<PASSWORD>@localhost:3306/alidar
SECRET_TOKEN=<YOUR_SECRET_GENERATE>
```

For the `SECRET_TOKEN` environment, you can enter anything but we recommend that you generate this secret from NODE console with following command:

```
require('crypto').randomBytes(64).toString('hex')
```

## Deploy to Production

1 - Join to server
```
ssh -p 2387 <USER_NAME>@10.1.0.12
```
2 - Pull project
```
cd /project

cd /2022_Proyecto_Integrador_Equipo_2_Back-end
git pull origin main
```
3 - Generate build
```
cd /project

cd /2022_Proyecto_Integrador_Equipo_2_Back-end
npm run build
```

4 - Run projects - PM2

To run both project we used a [PM2](https://pm2.keymetrics.io/)
```
cd /project

cd /2022_Proyecto_Integrador_Equipo_2_Back-end
pm2 start "npm start" --name "alidar-backend"
```
