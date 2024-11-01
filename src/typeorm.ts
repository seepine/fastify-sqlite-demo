import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "better-sqlite3",
  database: "./sqlite.db",
  synchronize: true,
  logger: "debug",
  entities: ["src/models/*.ts", "src/models/*.js"],
});

export const initDb = async () => {
  return dataSource.initialize();
};
 