import { omit } from "lodash";
import User, { UserDocument } from "../models/user.model";
import logger from "../utils/logger";

type UserInput = Omit<
  UserDocument,
  "createdAt" | "updatedAt" | "comparePassword"
>;

export async function createUser(
  input: any // some ts errors and will fix soon
) {
  try {
    const user = await User.create(input);
    return omit(user.toJSON(), "password");
  } catch (e: any) {
    logger.error(e);
    throw new Error(e);
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await User.findOne({ email });

  if (!user) return false;

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
}
