

import Homepage from "./routes/homepage/Homepage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlepage/SinglePage";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
      ]
    },

  ]);
  return (
    // <div className="layout">
    //   <Navbar/>
    //   <div className="content">
    //   <Homepage/>
    //   </div>
    // </div>
    <RouterProvider router={router} />
  )
}

export default App