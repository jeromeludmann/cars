# README

_All is subject to change._

1.  [Setting up](#setting-up)
2.  [Get ready to develop](#get-ready-to-develop)
3.  [Git workflow](#git-workflow)
4.  [API](#api)
5.  [TODO](#todo)

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
| :------: | ----------------------------------------------------------------------------------------------- |
|  build   | Run Webpack. Watch and build project on changes (eslint, babel, postcss).                       |
|   api    | Run Nodemon. Watch and restart API server if needed.                                            |
|   web    | Run Nginx. Used as a reverse proxy and as a front server that provides direct access to assets. |

Once these services are fully started, you can write code either in `src/client/` or `src/server/` depending to what you want to develop (React or Node).

Finally, go to http://localhost:8080 to check what you done.

You can also change the Nginx port in `docker/compose.yml`:

```
services:
    web:
        ports:
            - "8080:80"
```

## Git workflow

Set up your `~/.gitconfig` like this:

```
[user]
name = Your full name
email = your@email
```

Adding also this following make commands less tiring:

```
[alias]
co = checkout
ci = commit
st = status
br = branch
```

If you are about to develop a new feature called "User List", you have to create a new branch from `develop`.

`develop` is the reference branch for all new features. Do **NOT** push directly to this branch.

Get the latest updates by pulling `develop`:

```
git checkout develop
git pull origin develop
```

and create your new branch from it:

```
git branch user-list-feature
git checkout user-list-feature
```

You can now code within the branch `user-list-feature`.

Once the job is done, add your changes, commit and push them:

```
git add src/client/UserList/*
git commit -m "Add User List feature"
git push origin user-list-feature
```

On Github, select your branch `user-list-feature` and make your pull request (to `develop`).

## API

Available endpoints:

| Method | URL            | Description            |
| -----: | :------------- | :--------------------- |
|    GET | /api/cars      | Get all cars           |
|    GET | /api/cars/{id} | Get a specified car    |
|   POST | /api/cars      | Add a new car          |
| DELETE | /api/cars/{id} | Remove an existing car |

## TODO

### Required

* Write React components
* Containerize a database (postgresql or mongodb)
* Implement the REST API
* Implement a React/Redux architecture
  * Use components/containers (smart/dumb) React pattern
* Write some tests about:
  * API server endpoints
  * React components
* Set up production environment

### Optional

* GraphQL (instead of REST API)
* Server Sider Rendering (SSR)
