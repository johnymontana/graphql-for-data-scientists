const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");
require("dotenv").config();

const { NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD } = process.env;

const typeDefs = gql`
  type Group @exclude(operations: [CREATE, UPDATE, DELETE]) {
    name: String
    urlname: String
    eventCount: Int
    topics: [Topic!]! @relationship(type: "HAS_TOPIC", direction: OUT)
    similar(first: Int! = 3): [Group!]!
      @cypher(
        statement: """
        MATCH (this)-[r:SIMILAR]->(rec:Group)
        RETURN rec ORDER BY r.score DESC LIMIT $first
        """
      )
  }

  type Topic @exclude(operations: [CREATE, UPDATE, DELETE]) {
    name: String
    degree: Int
    groups: [Group!]! @relationship(type: "HAS_TOPIC", direction: IN)
  }
`;

const driver = neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
    cors: {
        origin: "*"
    }
  });
  server.listen().then(({ url }) => {
    console.log(`GraphQL server ready at ${url}`);
  });
});
