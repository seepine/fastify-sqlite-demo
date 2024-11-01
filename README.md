## Build

Eg.1

```sh
docker build -t fastify-tl -f Dockerfile .
```

Eg.2

```sh
docker build -t fastify-tl -f Dockerfile.node .
```

Eg.3

```sh
docker build -t fastify-tl -f Dockerfile.single .
```

## Test

```sh
docker run --rm fastify-tl
```

All dockerfile got error log
```log
$ docker run --rm fastify-tl                       
{"level":50,"time":1730463478442,"pid":1,"hostname":"c5e6185ef4c8","err":{"type":"Error","message":"Error loading shared library /workspace/node_modules/better-sqlite3/build/Release/better_sqlite3.node: Exec format error","stack":"Error: Error loading shared library /workspace/node_modules/better-sqlite3/build/Release/better_sqlite3.node: Exec format error\n    at Module._extensions..node (node:internal/modules/cjs/loader:1465:18)\n    at Module.load (node:internal/modules/cjs/loader:1206:32)\n    at Module._load (node:internal/modules/cjs/loader:1022:12)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)\n    at bindings (/workspace/node_modules/bindings/bindings.js:112:48)\n    at new Database (/workspace/node_modules/better-sqlite3/lib/database.js:48:64)\n    at BetterSqlite3Driver.Database [as sqlite] (/workspace/node_modules/better-sqlite3/lib/database.js:11:10)\n    at BetterSqlite3Driver.createDatabaseConnection (/workspace/node_modules/typeorm/driver/better-sqlite3/BetterSqlite3Driver.js:88:41)\n    at async BetterSqlite3Driver.connect (/workspace/node_modules/typeorm/driver/sqlite-abstract/AbstractSqliteDriver.js:171:35)","code":"ERR_DLOPEN_FAILED"},"msg":"Error loading shared library /workspace/node_modules/better-sqlite3/build/Release/better_sqlite3.node: Exec format error"}
```