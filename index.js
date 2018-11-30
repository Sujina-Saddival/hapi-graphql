const hapi = require('hapi');
// const mongoose = require('mongoose');
const { apolloHapi, graphiqlHapi } = require('apollo-server');
const { apolloUploadExpress, processRequest } =  require("apollo-upload-server");
const Schema = require("./graphql");

// const { makeExecutableSchema } = require('graphql-tools');

// const User = require('./models/user');

// const graphqlSchema = require('./graphql/schema');
// const createResolvers = require('./graphql/resolvers');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

// mongoose.connect('mongodb://localhost:27017/test_db1');

// const executableSchema = makeExecutableSchema({
//   typeDefs: [graphqlSchema],
//   resolvers: createResolvers({ User }),
// });

server.register({
  register: apolloHapi,
  options: {
    path: '/graphql',
    apolloOptions: () => ({
      pretty: true,
      schema: Schema,
    }),
  },
});

server.register({
  register: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql',
    },
  },
    route: {
            pre: [
                {
                    method: async (req, reply) => {
                        try {
                            const processedRequest = await processRequest(req, {
                                uploadDir: '/tmp'
                            });
                        } catch(e) {
                            console.log(e);
                        }
                    },
                    assign: 'fileUpload'
                }
            ]
        },
});

// server.register({
//   register: apolloUploadExpress,
//   options: {
//     uploadDir: './',
//   },
// });

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
