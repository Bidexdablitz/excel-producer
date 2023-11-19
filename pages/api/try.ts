import type { NextApiRequest, NextApiResponse } from "next";
var xlsx = require("xlsx");

type ResponseData = {
    message: string;
};

type RequestData = {
    data: string;
};
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const body: RequestData = req.body;
    const buffer = Buffer.from(body.data, "binary");

    let wb = xlsx.read(buffer);
    console.log(wb.SheetNames);

    res.status(200).json({ message: "Hello from Next.js!" });
}
