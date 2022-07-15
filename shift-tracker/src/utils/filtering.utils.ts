import { User } from "@types";

export function uniqueUsers(users: User[]) {
  // eslint-disable-next-line
  const seen: any = {};
  const newUsers = users.filter(function (user) {
    return Object.prototype.hasOwnProperty.call(seen, user.id)
      ? false
      : (seen[user.id] = true);
  });
  return newUsers;
}
