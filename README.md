# davidmonroeparker.com

### Build with initial dependencies
```
docker-compose build
```

### Enter container shell
```
docker-compose run --rm --service-ports frontend
```
Now everything is normal. Install/reinstall dependencies, call `package.json` scripts, etc.

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Deployment
```
yarn deploy
```
or outside container
```
docker-compose run --rm frontend yarn deploy
```