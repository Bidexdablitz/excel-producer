import type { NextApiRequest, NextApiResponse } from "next";
var xlsx = require("xlsx");

type ResponseData = {
    message: string;
};

type RequestBody = {
    data: string;
};
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { data }: RequestBody = req.body;
    const buffer = Buffer.from(data, "base64");
    console.log("data: ", data);
    console.log("atob: ", buffer);
    let wb = xlsx.read(new Uint8Array(buffer));
    console.log("sheets: ", wb.Sheets);
    res.status(200).json({ message: "Hello from Next.js!" });
}
