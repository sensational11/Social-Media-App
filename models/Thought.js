const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxLength: 300
    }, 
    username: {
      type: String,
      require: true
    },
  },
)

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

thoughtSchema.virtual("reactionCount").get(function(){
  return this.reactions.length

})
const Thought = model("Thought", thoughtSchema);
module.export = Thought;