import User, { UserDocument } from "../models/user.model";
import logger from '../utils/logger'

export async function createUser(
  input: Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
) {
  try {
    return await User.create(input);
  } catch (e: any) {
    logger.error(e);
    throw new Error(e);
  }
}
