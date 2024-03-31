import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
  const body = await c.req.json();
  console.log("BODY>", body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({
    message: "Hello Hono!",
    body: body,
    header: c.req.header("Authorization"),
    query: c.req.query("param"),
  });
});

export default app;
