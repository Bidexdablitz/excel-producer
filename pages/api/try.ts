import type { NextApiRequest, NextApiResponse } from "next";
var xlsx = require("xlsx");

type ResponseData = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    // let file = xlsx.read()
    const body = JSON.parse(req.body);
    console.log("body: ", body);
    res.status(200).json({ message: "Hello from Next.js!" });
}
