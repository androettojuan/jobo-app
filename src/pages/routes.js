import AccountPage from "./AccountPage";
import CommentsPage from "./CommentsPage";
import HomePage from "./HomePage";
import ProfessionPage from "./ProfessionPage";
import ProfesionalPage from "./ProfesionalPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import FavoritePage from "./FavoritePage";

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
  {
    path: "/favorites",
    component: FavoritePage,
  }
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
