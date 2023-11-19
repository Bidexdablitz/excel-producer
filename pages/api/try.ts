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
    console.log("data: ", data);
    console.log("atob: ", atob(data));
    let wb = xlsx.read(data);
    console.log("sheets: ", wb.Sheets);
    res.status(200).json({ message: "Hello from Next.js!" });
}
