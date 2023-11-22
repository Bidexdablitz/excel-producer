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
    // create worksheet for the transactions
    var ws = xlsx.utils.json_to_sheet(transactions);
    // create new workbook to store the ws
    let wb = xlsx.utils.book_new();
    // append the worksheet to the workbook
    xlsx.utils.book_append_sheet(wb, ws, "Sheet 1");
    // generate a bytes file to return to the user
    let file = xlsx.writeXLSX(wb);

    console.log("file: ", file);
    res.status(200).json({ json: file });
}
