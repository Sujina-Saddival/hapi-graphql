// const resolvers = (models) => ({
//   Query: {
//     getUserById(root, { id }) {
//       return models.User.findById(id).then((response) => response);
//     },

//     getUserByEmail(root, { email }) {
//       return models.User.findOne({ email }).then((response) => response);
//     },
//   },
//   Mutation: {
//     createUser(root, args) {
//       const user = new models.User(args);
//       return user.save().then((response) => response);
//     },
//     async createLaunch(root, args) {
//       await models.Launch.create(args.input).then((service) => {
//           response.service = service
//       }).catch((err) => {
//           let errors = err.errors.map(error => {
//               return {
//                   code: error.path,
//                   message: error.message
//               }
//           })
//           response.message = "There was an error creating the action"
//           response.errors = errors
//       })
//       // return response
//       console.log(response)
//       return response
//     }
//   },
// });

// module.exports = resolvers;
