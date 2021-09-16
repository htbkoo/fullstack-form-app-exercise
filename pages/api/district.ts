// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { schema } from "@/schema";

import { graphqlHTTP } from "express-graphql";

type Data = {
  name: string;
};

// The root provides a resolver function for each API endpoint
const root = {
  district: (args: any) => {
    console.log(args.name);
    return `district name is ${args.name}`;
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
  schema,
});
