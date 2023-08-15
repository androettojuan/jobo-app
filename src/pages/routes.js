import AccountPage from "./AccountPage";
import CommentsPage from "./CommentsPage";
import HomePage from "./HomePage";
import ProfessionPage from "./ProfessionPage";
import ProfesionalPage from "./ProfesionalPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/account",
    component: AccountPage,
  },
  {
    path: "/comments",
    component: CommentsPage,
  },
  {
    path: "/categories/:CategoryId/profesional/:id",
    component: ProfesionalPage,
  },
  {
    path: "/categories/:id",
    component: ProfessionPage,
  },
];

export const routesRegister = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
];
