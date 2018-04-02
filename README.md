# README

## Setting up

First of all, make sure you already installed:

* Git
* Docker

Then, get the entire project by cloning it from Github:

```
git clone http://github.com/jeromeludmann/cars
```

## Get ready to develop

In order to start to develop, just run the command below from the root of the newly created folder:

```
./dc up
```

Since some things will have to be done, like Docker images building and required dependencies installing, it may take a while the first time you will execute it (but _much faster_ next time).

That being said, `./dc` (which is a shortcut for `docker-compose --file docker/compose.yml`) will automatically run for you the services below:

| Service  | Description                                                                                     |
| -------: | ----------------------------------------------------------------------------------------------- |
|    build | Run Webpack. Watch and build project on changes.                                                |
|      api | Run Nodemon. Watch and restart API server if needed.                                            |
|      web | Run Nginx. Used as a reverse proxy and as a front server that provides direct access to assets. |

Once these services are fully started, you can write code either in `src/client/` or `src/server/` depending to what you want to develop (React or Node).

Finally, go to http://localhost:8080 to check what you done.

You can also change the Nginx port in `docker/compose.yml`:

```
services:
    web:
        ports:
            - "8080:80"
```

## API

Available endpoints:

| Method | URL            | Description            |
| -----: | :------------- | :--------------------- |
|    GET | /api/cars      | Get all cars           |
|    GET | /api/cars/{id} | Get a specified car    |
|   POST | /api/cars      | Add a new car          |
| DELETE | /api/cars/{id} | Remove an existing car |
