const connection = require('../config/connection');
const { Thought, User } = require('../models');
// import your models
// const { getRandomBody, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');


//   // Drop existing thoughts
  await Thought.deleteMany({});

//   // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // create and array of users

  // use insermany to push your users into a collcet


  // create an array of thoughs

    // use insermany to push your thoughts into a collection

  // Log out the seed data to indicate what should appear in the database
//   console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
