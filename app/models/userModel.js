import mongoose from "mongoose";
import bcrypt from "bcrypt";
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: String,
  password: String
});

UserSchema.statics = {
  findByEmail(email) {
    return this.findOne({email: email});
  }
}

UserSchema.methods = {
  comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

module.exports = mongoose.model("user", UserSchema);
