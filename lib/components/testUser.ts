import { getDefaultHighWaterMark } from "stream";
import type { User } from "../redux/slices/userSlice";

const user: User = {
  email: "",
  password: "",
  token: "",
  username: "",
  firstName: "",
  secondName: "",
  url: "",
};

export default user;
