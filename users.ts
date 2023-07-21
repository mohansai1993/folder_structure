import { BAD_REQUEST } from "http-status";
import PostModel from "../model/post.controller";
import UsersModel from "../model/users.model";
import { ApiError } from "../utils/ApiError";
import { USER_NOT_FOUND } from "../constant/message";

//Create a new User
export const createUser = async (userBody: any) => {
  const user = new UsersModel(userBody);
  return await user.save();
};
//Login a User
export const loginUser = async (userBody: any) => {
  const user = getUserByEmail(userBody.email);

  // if (user) {
  //   //check if password matches
  //   const result = req.body.password === user.password;
  //   if (result) {
  //     res.render("secret");
  //   } else {
  //     res.status(400).json({ error: "password doesn't match" });
  //   }
  // } else {
  //   res.status(400).json({ error: "User doesn't exist" });
  // }
  return user;
};
//Update the a user info
export const updateUserById = async (userId: string, userBody: any) => {
  // let _user = await getUserById(userId);
  const user = await UsersModel.findByIdAndUpdate(userId, userBody);
  return user;
};

// Get All post of User
const getAllPosts = async (userId: string) => {
  try {
    return await PostModel.find({ creator: userId });
  } catch (err: any) {
    throw new ApiError(err?.message, BAD_REQUEST);
  }
};

//Find user by object id of mongooose
const getUserById = async (id: string) => {
  try {
    let user = await UsersModel.findById(id);
    if (!user) {
      throw new ApiError(USER_NOT_FOUND, BAD_REQUEST);
    }
    return user;
  } catch (err: any) {
    throw new ApiError(err?.message, BAD_REQUEST);
  }
};

//Find user by Email address
const getUserByEmail = async (email: string) => {
  try {
    let user = await UsersModel.findOne({ email });
    if (!user) {
      throw new ApiError(USER_NOT_FOUND, BAD_REQUEST);
    }
    return user;
  } catch (err: any) {
    throw new ApiError(err?.message, BAD_REQUEST);
  }
};

// Get ALL user of subadmin
const getAllUsersInfo = async (role: string) => {
  try {
    console.log(role);
    return await UsersModel.find({ role });
  } catch (err: any) {
    throw new ApiError(err?.message, BAD_REQUEST);
  }
};

export { getAllPosts, getUserById, getAllUsersInfo };
