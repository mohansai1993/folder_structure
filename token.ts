import * as jwt from "jsonwebtoken";
import moment from "moment";
import {
  JWT_ACCESS_TIME,
  JWT_REFRESH_TIME,
  JWT_SECRET,
} from "../constant/constant";
import { tokenTypes } from "../config/token";
const generateToken = ({ userId, email, type, exp }: any) => {
  const payload = {
    userId: userId,
    iat: moment().unix(),
    email,
    type,
    role: "ADMIN",
  };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: exp,
  });
};

const generateAuthToken = ({ userId, email }: any) => {
  const accessToken = generateToken({
    userId,
    email,
    type: tokenTypes.ACCESS,
    exp: JWT_ACCESS_TIME,
  });
  const refreshToken = generateToken({
    userId,
    email,
    type: tokenTypes.REFRESH,
    exp: JWT_REFRESH_TIME,
  });
  return {
    accessToken,
    refreshToken,
  };
};

const verifyToken = async ({ token }: any) => {
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
};

export { generateToken, verifyToken, generateAuthToken };
