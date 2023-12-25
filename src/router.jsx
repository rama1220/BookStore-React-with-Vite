import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Datadiri from "../datadiri";
import Booklist from "./bookslist";
import Detail from "./detail";
import Logout from "../logout";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "home/", Component: Home },
      { path: "about/", Component: About },
      { path: "datadiri/", Component: Datadiri },
      {
        path: "book-list",
        children: [
          { path: "", Component: Booklist },
          { path: "detail/:bookId", Component: Detail },
        ],
      },
      { path: "logout/", Component: Logout },
    ],
  },
]);

export default router;
