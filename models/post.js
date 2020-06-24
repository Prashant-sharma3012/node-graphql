var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: String,
    content: String,
    imageUrl: String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
    skipVersioning: true
  }
);

module.exports = mongoose.model('Post', PostSchema);
