const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString
const GraphQLList = GraphQL.GraphQLList

const ServiceType = require('../../types/launch')

const Models = require('../../../models/index.js')

const CreateLaunchInput = new GraphQLInputObjectType({
    name: "CreateLaunchInput",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    fields() {
        return {
            name: {
                type: GraphQLString,
                description: 'Lorem ipsum dolar sit'
            },
        }
    }
})

const CreateLaunchPayload = new GraphQLObjectType({
    name: 'CreateLaunchPayload',
    description: 'Lorem ipsum dolar sit',
    fields() { 
        return {
            message: {
                type: GraphQLString,
                description: 'Lorem ipsum dolar sit'
            },
            service: {
                type: ServiceType,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})

module.exports = {
  type: CreateLaunchPayload,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  args: {
    input: {
      type: CreateLaunchInput,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }
  },
  
  resolve: async (root, args) => {
    let response = {}
    await Models.Launch.create(args.input).then((service) => {
        response.service = service
    }).catch((err) => {
        let errors = err.errors.map(error => {
            return {
                code: error.path,
                message: error.message
            }
        })
        response.message = "There was an error creating the action"
        response.errors = errors
    })
    // return response
    console.log(response)
    return response
  }
};
