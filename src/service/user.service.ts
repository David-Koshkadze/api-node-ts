import User, { UserDocument } from "../models/user.model";
import logger from '../utils/logger'

type UserInput = Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">

export async function createUser(
  input: any // some ts errors and will fix soon
) {
  try {
    return await User.create(input);
  } catch (e: any) {
    logger.error(e);
    throw new Error(e);
  }
}
