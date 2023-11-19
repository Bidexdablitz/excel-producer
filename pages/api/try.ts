import type { NextApiRequest, NextApiResponse } from "next";
import { log } from "next-axiom";

type ResponseData = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    console.log("hi there");
    res.status(200).json({ message: "Hello from Next.js!" });
}
