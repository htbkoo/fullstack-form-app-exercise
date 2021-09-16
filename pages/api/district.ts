// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { graphql } from "graphql";
import { schema } from "@/schema";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const query = ` { district(name: "${req.query.districtName??''}") }`

  const executionResult = await graphql(schema, query, root);
  res.status(200).json(executionResult)
}

// The root provides a resolver function for each API endpoint
const root = {
  district: (args: any) => {
    console.log(args.name)
    return `district name is ${args.name}`;
  },
};

// Run the GraphQL query '{ hello }' and print out the response
// graphql(schema, '{ hello }', root).then((response) => {
//   console.log(response);
// });
