import type { NextApiRequest, NextApiResponse } from "next";
import { log } from "next-axiom";

type ResponseData = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    log.info("new sign-in challenge", { customerId: 32423, auth: "session" });
    res.status(200).json({ message: "Hello from Next.js!" });
}
