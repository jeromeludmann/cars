# README

_All is subject to change._

1.  [Get ready](#get-ready)
2.  [Develop](#develop)
3.  [Git](#git)
4.  [API (from client side)](#api-from-client-side)
5.  [Microservices](#microservices)
6.  [TODO](#todo)

## Get ready

First of all, make sure you already installed both `git` and `docker`.

Then, get the entire project by cloning it from Github:

```
git clone http://github.com/jeromeludmann/cars
```

It may be necessary to install dependencies locally:

```
cd cars
npm install
```

## Develop

In order to start to develop, just run the command below from the root of the newly created folder:

```
./dc up
```

_It's just a shortcut for `docker-compose --file docker/compose.yml`._

Since some things will have to be done, like Docker images building and required dependencies installing, it may take a while the first time you will execute it (but _much faster_ next time).

That being said `./dc` will automatically run for you the services below:

| Service    | Description                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| `webpack`  | Watch and rebuild project on changes (linting, type checking, transpiling, CSS post processing) |
| `node-api` | Watch and restart REST API server if needed                                                     |
| `node-ssr` | Watch and restart SSR server if needed                                                          |
| `nginx`    | Used as a reverse proxy and as a front server that provides direct access to assets             |

_See [Microservices](#microservices) for more details about this related architecture._

Once these services are fully started, depending to what you want to make you can write code either in :

| Path                  | Description                          |
| --------------------- | ------------------------------------ |
| `./src/client/`       | for React components and CSS modules |
| `./src/services/api/` | for API endpoints that serves JSON   |
| `./src/services/ssr/` | for precomputed HTML responses       |

Finally, go to http://localhost:8080 to check what you done.

You can also change the public port in `docker/compose.yml` (default to 8080):

```
services:
    nginx:
        ports:
            - "8080:80"
```

## Git

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

On Github, select your branch `user-list-feature` and make your Pull Request (PR) to `develop`.

Before doing that, it's recommended that your branch be already up to date with `develop`:

```
git pull --rebase origin develop
```

## API (from client side)

Available endpoints:

| Method | URL            | Description            |
| -----: | :------------- | :--------------------- |
|    GET | /api/cars      | Get all cars           |
|    GET | /api/cars/{id} | Get a specified car    |
|   POST | /api/cars      | Add a new car          |
| DELETE | /api/cars/{id} | Remove an existing car |

## Microservices

To go deeper with the global architecture, find below a microservice schema:

```
                                             +-------------------+
                                             |     node-api      |
                                             + - - - - - - - - - +
                                             | REST API          |
                                             | /api/*            |
                                             |                   |
                     +-------------------+   +-------------------+
                     |       nginx       |       |           |       +--------+
                     + - - - - - - - - - +       |           |       |        |
                     | Reverse Proxy     |--->---+           +--->---|   db   |
               +-->--| /api/*            |                           |        |
               |     | /*                |--->---+                   +--------+
browser --->---+     + - - - - - - - - - +       |
               |     | Static assets     |       |
               +-->--| /assets/*         |   +-------------------+
                     |                   |   |     node-ssr      |
                     +-------------------+   + - - - - - - - - - +
                                             | Server Rendering  |
                                             | /*                |
                                             |                   |
                                             +-------------------+
```

_Note that `db` is not set up yet. Coming soon, see [TODO](#todo)._

Moreover, there are 3 route types:

| Route       | Description                                                  |
| :---------- | :----------------------------------------------------------- |
| `/*`        | HTML. Pass to proxy and get precomputed HTML from SSR server |
| `/api/*`    | JSON. Pass to proxy and get JSON response from REST API      |
| `/assets/*` | Static files. Directly get React, CSS, etc. from Nginx       |

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
