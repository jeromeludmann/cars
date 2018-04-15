# README

_All is subject to change._

1.  [Installation](#installation)
2.  [Development](#development)
3.  [Git Best Practices](#git-best-practices)
4.  [Services Architecture](#services-architecture)
5.  [REST API](#rest-api)
6.  [GraphQL API](#graphql-api)
7.  [TODO](#todo)

## Installation

First of all, make sure you already installed both `git` and `docker`.

Then, get the entire project by cloning it from Github:

```
git clone http://github.com/<username>/cars
```

It may be necessary to install dependencies locally:

```
cd cars
npm install
npm run webpack
```

## Development

In order to start to develop, just run the command below from the root of the newly created folder:

```
./dc up
```

_It's just a shortcut for `docker-compose --file docker/compose.yml`._

Since some things will have to be done, like Docker images building and required dependencies installing, it may take a while the first time you will execute it (but _much faster_ next time).

That being said `./dc` will automatically run for you the services below:

| Service   | Description                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------- |
| `webpack` | Watch and rebuild project on changes (linting, type checking, transpiling, CSS post processing) |
| `rest`    | Watch and restart REST API if needed                                                            |
| `graphql` | Watch and restart GraphQL API if needed                                                         |
| `ssr`     | Watch and restart SSR server if needed                                                          |
| `nginx`   | Used as a reverse proxy and as a front server that provides direct access to assets             |
| `mongo`   | Start MongoDB                                                                                   |

_See [more details about services architecture](#services-architecture)._

Once these services are fully started, depending to what you want to make you can write code either in :

| Path                  | Description      |
| --------------------- | ---------------- |
| `./src/front/`        | for React or CSS |
| `./src/back/rest/`    | for REST API     |
| `./src/back/graphql/` | for GraphQL API  |
| `./src/back/ssr/`     | for pre-rendered |

Finally, go to http://localhost:8080 to check what you done.

You can also change the public port in `docker/compose.yml` (default to 8080):

```
services:
  nginx:
    ports:
      - "8080:80"
```

You can import samples into database by typing `./reset-db` (note that this will erase all the existing data).

Having trouble with Docker?

In doubt, you could try `./dc-prune` to remove containers, networks and volumes.

Then run again `./dc up`.

## Git Best Practices

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

If you are about to develop a new feature called _User List_, you have to create a new branch from `develop`.

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

On Github, select your branch `user-list-feature` and make your Pull Request (PR) to `develop`.

Before doing that, it's recommended that your branch be already up to date with `develop`:

```
git pull --rebase origin develop
```

## Services Architecture

To go deeper with the services architecture, find below a service routing schema:

```
                                                rest
                                         +-----------------+
                                     +---|  /api/rest/*    |---+
                                     |   +-----------------+   |
                                     |                         |
                                     |                         +--- db
                                     |         graphql         |
                                     |   +-----------------+   |
                                     +---|  /api/graphql   |---+
                                     |   +-----------------+
                      nginx          |
               +-----------------+   |
           +---|  /api/*         |---+
           |   |- - - - - - - - -|
browser ---+---|  /*             |---+
           |   |- - - - - - - - -|   |
           +---|  /assets/*      |   |
               +-----------------+   |           ssr
                                     |   +-----------------+
                                     +---|  /*             |
                                         +-----------------+
```

Moreover, there are 3 route types:

| Route          | Description                                                                |
| :------------- | :------------------------------------------------------------------------- |
| `/*`           | HTML. Pass to proxy and get precomputed HTML from SSR server               |
| `/api/rest/*`  | JSON. Pass to proxy and get JSON response from [REST API](#rest-api)       |
| `/api/graphql` | JSON. Pass to proxy and get JSON response from [GraphQL API](#graphql-api) |
| `/assets/*`    | Static files. Directly get React, CSS, etc. from Nginx                     |

## REST API

List of available endpoints:

| Method | URL               | Description   |
| -----: | ----------------- | ------------- |
|   POST |  /api/cars        |  Add a car    |
|    GET |  /api/cars/:name  |  Get all cars |
| DELETE | /api/cars/:name   | Remove a car  |

## GraphQL API

_In progress._

## TODO

### Required

* Write React components
* ~~Add type support (with Flow or TypeScript)~~
* ~~Containerize a database (postgresql or mongodb)~~
* ~~Set up REST API~~
* Implement a React/Redux architecture
  * Use components/containers (smart/dumb) React pattern
* Write some tests about:
  * API server endpoints
  * React components
* Set up production environment

### Optional

* ~~Set up GraphQL~~
* Server Sider Rendering (SSR)
