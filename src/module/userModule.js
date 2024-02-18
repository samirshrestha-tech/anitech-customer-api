import userSchema from "./userSchema.js";

export const postCustomer = async (obj) => {
  return userSchema(obj).save();
};
