import Fastify from "fastify";
import { dataSource, initDb } from "./typeorm";
import { User } from "./models/user";

const fastify = Fastify({ logger: true });

fastify.get("/", async (request, reply) => {
  const count = await dataSource.manager.count(User);
  if (count < 5) {
    await dataSource.manager.save(User, {
      name: new Date().toUTCString(),
    });
  }
  return await dataSource.manager.find(User);
});

const start = async () => {
  try {
    await initDb();
    await fastify.listen({
      host: "0.0.0.0",
      port: 3000,
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
