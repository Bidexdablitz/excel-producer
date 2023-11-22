import type { NextApiRequest, NextApiResponse } from "next";
var xlsx = require("xlsx");

type ResponseData = {
    json: any;
};

type RequestBody = {
    transactions: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    let { transactions }: RequestBody = req.body;
    transactions = JSON.parse(transactions);
    console.log(transactions);

    res.status(200).json({ json: "" });
}
