import client from "@libs/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({ data: { email: "xx", name: "xxx" } });
  res.json({ ok: true, data: "xx" });
}
