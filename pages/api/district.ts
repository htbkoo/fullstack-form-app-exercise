// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Reference for using GraphQL Code Generator: https://hasura.io/blog/your-guide-to-graphql-with-typescript/#tutorial-2-using-graphql-code-generator

import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import districtAreas from "@/resources/data/district_areas/lor_bezirksregionen.json";

type Data = {
  name: string;
};

const DISTRICT_JSON_MAPPING: any = Object.freeze({
  districtAreas,
});

// The root provides a resolver function for each API endpoint
const root = {
  district: ({ name }: any) => {
    console.log(name);
    if (name in DISTRICT_JSON_MAPPING) {
      // return DISTRICT_JSON_MAPPING[name];
      return JSON.stringify(DISTRICT_JSON_MAPPING[name]);
    } else {
      return null;
    }
  },
};

// Run the GraphQL query '{ hello }' and print out the response
// graphql(schema, '{ hello }', root).then((response) => {
//   console.log(response);
// });

// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(4000);
// console.log('Running a GraphQL API server at http://localhost:4000/graphql');

export default graphqlHTTP({
  rootValue: root,
  graphiql: true,
  schema: buildSchema(`
  type Query {
    district(name: String): String
  }
`),
});
