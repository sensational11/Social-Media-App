const { Schema, Types } = require('mongoose');
const reactionSchema = require('/Reaction')
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
    minLength: 1,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  username: {
    type: String,
    required: true,
  },
reaction: [reactionSchema]

},{
    
     toJSON: {
          virtuals: true,
        },
        id: false,
      
});

const Thought = model("Thought", thoughtSchema);
module.export = Thought;