import AccountPage from "./AccountPage";
import CategoryPage from "./CategoryPage";
import CommentsPage from "./CommentsPage";
import HomePage from "./HomePage";
import ProfessionPage from "./ProfessionPage";
import ProfesionalPage from "./ProfesionalPage";
import LoginPage from "./LoginPage";

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
    path: "/categories",
    component: CategoryPage,
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
    path: "/login",
    component: LoginPage,
  }
];
