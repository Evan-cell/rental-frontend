

import Homepage from "./routes/homepage/Homepage"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Layout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/list",
          element:<ListPage/>
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