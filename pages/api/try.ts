import type { NextApiRequest, NextApiResponse } from "next";
var xlsx = require("xlsx");

type ResponseData = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    // let file = xlsx.read()
    console.log("body: ", req.body);
    res.status(200).json({ message: "Hello from Next.js!" });
}
