const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList

module.exports = new GraphQLObjectType({
  name: "Launch",
  fields() {
    return {
      id: {
        type: GraphQLString,
        description: "Unique identifier of the launch",
        resolve(launch) {
          return launch.id;
        }
      },
      name: {
        type: GraphQLString,
        description: "The unique name for the launch",
        resolve(launch) {
          return launch.name;
        }
      },
    };
  }
});
