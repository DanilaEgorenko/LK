import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";

export const NO_USER_ID = "-1";

interface User {
  id: string;
  name: string;
  photo: string;
  course: number;
}

interface UserStore {
  currentUser: User | null;
}

const useUser = () => {
  return useStore($userStore);
};

const login = createEvent<{ login: string; password: string }>();
const logout = createEvent();

const $userStore = createStore<UserStore>({
  currentUser: null,
})
  .on(login, (oldState, newState) => ({
    currentUser: {
      id: "0",
      name: newState.login,
      photo: "",
      course: 0,
    },
  }))
  .on(logout, () => ({
    currentUser: null,
  }));

export const selectors = {
  useUser,
};

export const events = {
  login,
  logout,
};
