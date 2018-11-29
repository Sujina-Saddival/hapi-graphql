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
        description: "Unique identifier of the service",
        resolve(service) {
          return service.id;
        }
      },
      name: {
        type: GraphQLString,
        description: "The unique name for the service",
        resolve(service) {
          return service.name;
        }
      },
    };
  }
});
