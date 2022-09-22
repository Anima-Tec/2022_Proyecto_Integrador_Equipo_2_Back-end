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
How the first step is create the database (with name alidar), on the command line of your database provider. And the next step is run this command on the project:

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
