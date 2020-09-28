const {
  User,
  Book
} = require('../models');

const {
  AuthenticationError
} = require('apollo-server-express');

const {
  signToken
} = require('../utils/auth');


const resolvers = {

  Query: {

    // helloWorld: () => {
    //   return 'Hello world!';
    // }
    //   ,


User: () => {
  return 'Hello World'
}


    // me: async (
    //   //parent, args, context
    //   ) => {
    //   if (context.user) {
    //     const userData = await User.findOne({ _id: context.user._id
    //       })
    //       .select('-__v -password')
    //       .populate('Books')

    //     return userData;
    //   }
    //   throw new AuthenticationError('Not logged in');
    // }
    // ,

    // users: async (parent, {
    //   username
    // }) => {
    //   const params = username ? {
    //     username
    //   } : {};
    //   return User.find(params).sort({
    //     createdAt: -1
    //   });

    // }
    // ,
    // // place this inside of the `Query` nested object right after `thoughts` 
    // users: async (parent, {
    //   _id
    // }) => {
    //   return User.findOne({
    //     _id
    //   });
    // }
    // ,

  //   // get all users
  //   users: async () => {
  //     return User.find()
  //       .select('-__v -password')
  //       .populate('books');
  //   },
  //   // get a user by username
  //   user: async (parent, {
  //     username
  //   }) => {
  //     return User.findOne({
  //         username
  //       })
  //       .select('-__v')

  //       .populate('books');
  //   },

  // },

  // Mutation: {
  //   SAVE_BOOK: async (parent, {
  //     Book
  //   }, context) => {
  //     if (context.user) {
  //       const updatedUser = await User.findOneAndUpdate({
  //         _id: context.user._id
  //       }, {
  //         $addToSet: {
  //           books: Book
  //         }
  //       }, {
  //         new: true
  //       }).populate('books');

  //       return updatedUser;
  //     }

  //     throw new AuthenticationError('You need to be logged in!');
  //   },
  //   REMOVE_BOOK: async (parent, {
  //     bookId
  //   }, context) => {
  //     if (context.user) {
  //       const updatedUser = await User.findOneAndDelete({
  //         _id: context.user._id
  //       }, )

  //       return updatedUser;
  //     }

  //     throw new AuthenticationError('You need to be logged in!');
  //   },

  //   ADD_USER: async (parent, args) => {
  //     console.log(args)
  //     const user = await User.create(args);
  //     // const token = signToken(user);

  //     return {
  //       //   token,
  //       user
  //     };
  //   },
  //   LOGIN_USER: async (parent, {
  //     email,
  //     password
  //   }) => {
  //     const user = await User.findOne({
  //       email
  //     });

  //     if (!user) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const correctPw = await user.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const token = signToken(user);
  //     return {
  //       token,
  //       user
  //     };
  //   }
   }
};

module.exports = resolvers;