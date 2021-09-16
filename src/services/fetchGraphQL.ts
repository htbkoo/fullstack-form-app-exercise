// your-app-name/src/fetchGraphQL.js
export async function fetchGraphQL(apiPath: string, query: string, variables?: any) {
  // const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(apiPath, {
    method: "POST",
    headers: {
      // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

// export default fetchGraphQL;
