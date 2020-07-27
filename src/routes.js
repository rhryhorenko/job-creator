import paths from "./paths";
import JobsListPage from "./pages/JobsListPage";
import PostJobPage from "./pages/PostJobPage";

export default [
  {
    path: paths.jobsList,
    Component: JobsListPage,
  },
  {
    path: paths.postJob,
    Component: PostJobPage,
  },
];
