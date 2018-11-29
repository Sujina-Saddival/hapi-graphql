const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;

module.exports = new GraphQLObjectType({
  name: "Program",
  fields() {
    return {
      id: {
        type: GraphQLString,
        description: "Unique identifier of the user",
        resolve(user) {
          return user.id;
        }
      },
      name: {
        type: GraphQLString,
        description: "Full name of the user",
        resolve(user) {
          return user.name;
        }
      },
    };
  }
});
