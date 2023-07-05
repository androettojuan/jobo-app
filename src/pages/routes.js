import AccountPage from "./AccountPage";
import CategoryPage from "./CategoryPage";
import CommentsPage from "./CommentsPage";
import HomePage from "./HomePage";
import ProfessionPage from "./ProfessionPage";
import ProfessionalPage from "./ProfessionalPage";

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
    path: "/professional",
    component: ProfessionalPage,
  },
  {
    path: "/categories/:id",
    component: ProfessionPage,
  },
];
