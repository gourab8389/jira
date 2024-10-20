import { Hono } from "hono";
import { ID } from "node-appwrite";
import { setCookie } from "hono/cookie";
import { zValidator } from "@hono/zod-validator";

import { createAdminClient } from "@/lib/appwrite";


import { loginSchema, registerSchema } from "../schemas";

const app = new Hono().post(
  "/login",
  zValidator(
    "json",
    loginSchema
  ),
  async (c) => {
    const { email, password } = c.req.valid("json");

    console.log({ email, password })

    return c.json({ email, password });
  }
)
.post(
  "/register",
  zValidator("json", registerSchema),
  async (c) => {
    const { name, email, password } = c.req.valid("json");

    const { account } = await createAdminClient();
    const user = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    const session = await account.createEmailPasswordSession(
      email,
      password,
    )

    // setCookie(c, "")

    return c.json({ name, email, password });
  }
)
export default app;