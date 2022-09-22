# Getting started

## Installation

```
git clone https://github.com/mfloresss/2022_Proyecto_Integrador_Equipo_2_Back-end.git # using https
or
git clone git@github.com:mfloresss/2022_Proyecto_Integrador_Equipo_2_Back-end.git # using ssh

cd 2022_Proyecto_Integrador_Equipo_2_Back-end
npm i # install dependencies
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
```
