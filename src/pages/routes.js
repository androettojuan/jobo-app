import AccountPage from "./AccountPage";
import CategoryPage from "./CategoryPage";
import CommentsPage from "./CommentsPage";
import HomePage from "./HomePage";
import ProfessionPage from "./ProfessionPage";

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
    path: "/profesional/:id",
    component: ProfessionPage,
  },
  {
    path: "/comments",
    component: CommentsPage,
  },
];
