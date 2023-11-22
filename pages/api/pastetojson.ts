import type { NextApiRequest, NextApiResponse } from "next";
var xlsx = require("xlsx");

type ResponseData = {
    json: any;
};

type RequestBody = {
    paste: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { paste }: RequestBody = req.body;
    let data: string[] = [];
    let headers = paste.split("\n")[0].split("\t");
    paste
        .split("\n")
        .slice(1, -1)
        .forEach((row) => {
            let obj: any = {};
            row.split("\t").forEach((cell, i) => {
                obj[headers[i]] = cell.trim();
            });
            data.push(obj);
        });
    res.status(200).json({ json: data });
}
