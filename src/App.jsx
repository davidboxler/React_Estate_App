import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./routes/AboutPage/AboutPage";
import AgentsPage from "./routes/AgentsPage/AgentsPage";
import ContactPage from "./routes/ContactPage/ContactPage";
import HomePage from "./routes/HomePage/HomePage";
import Layout from "./routes/Layout/Layout";
import ListPage from "./routes/ListPage/ListPage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import SingInPage from "./routes/SingInPage/SingInPage";
import SingUpPage from "./routes/SingUpPage/SingUpPage";
import SinglePage from "./routes/SinglePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/agents",
          element: <AgentsPage />
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/sing-in",
          element: <SingInPage />
        },
        {
          path: "/sing-up",
          element: <SingUpPage />
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
