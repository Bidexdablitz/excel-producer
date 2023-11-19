import type { NextApiRequest, NextApiResponse } from "next";
var xlsx = require("xlsx");

type ResponseData = {
    json: string;
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
    let json = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
    console.log(json);
    res.status(200).json({ json });
}
