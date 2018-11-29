const GraphQL = require('graphql')
const GraphQLList = GraphQL.GraphQLList
const GraphQLString = GraphQL.GraphQLString
const GraphQLInt = GraphQL.GraphQLInt
const ServiceType = require('../../types/launch.js')


const Models = require('../../../models/index.js')

module.exports = {
  type: new GraphQLList(ServiceType),
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sapien lacus, ut imperdiet orci elementum sed. Donec lobortis vel nunc sit amet luctus.',

  resolve(root, args) {
    return Models.Launch.findAll()
  }
};
