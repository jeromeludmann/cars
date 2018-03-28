# README

First of all, make sure you already installed both `git` and `node.js`.

Then, get the entire project by cloning it from GitHub:

```
git clone http://github.com/jeromeludmann/cars
```

Enter within the new created folder and install all needed dependencies:

```
cd cars
npm install
```

When it's done, just start the dev workflow by typing:

```
npm run dev
```

This following tasks will automatically work without any handling on your part:

* webpack workflow (including eslint and babel)
* server monitoring (restart on change)

See `scripts` entry from `package.json` for more details.

Once the tasks are fully started, you can write code either in `src/client` (React components) or `src/server` depending to what you want to develop.

Finally, go to http://localhost:8080 to check what you done.
You can change the port, see `config/app.json`.
