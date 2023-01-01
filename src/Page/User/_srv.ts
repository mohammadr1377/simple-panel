import { ajax } from "../../utils/ajax";

export const GetUsers = () =>
  ajax( `users`, "GET", false);