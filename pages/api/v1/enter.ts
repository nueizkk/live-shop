import type { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";

function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
}

export default withHandler("POST", handler);
