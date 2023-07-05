import type { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

function handler(req: NextApiRequest, res: NextApiResponse) {
  // const { email, phone } = req.body;

  // let user;
  // if (email) {
  //   user = client.user.findUnique({ where: email });
  //   if (!user) {
  //     client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         email,
  //       },
  //     });
  //   }
  // }
  console.log(req.body);
  return res.status(200).json({ ok: true });
  // return res.status(200).end();
}

export default withHandler("POST", handler);
