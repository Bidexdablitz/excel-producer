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
    let wb = xlsx.read(new Uint8Array(buffer));
    console.log("sheets: ", wb.SheetNames);
    res.status(200).json({ message: wb.SheetNames });
}
