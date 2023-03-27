import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
const Layout = () => {
  return (
    
<>
      <Outlet/>
      <Footer/>
</>


  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      // {
      //   path: "/profiles",
      //   element: <Profiles/>
      // },
      // {
      //   path: "/ers",
      //   element: <Ers/>
      // },
      // {
      //   path: "/news",
      //   element: <News/>
      // },
      // {
      //   path: "/survey",
      //   element: <Survey/>
      // },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  // {
  //   path: "/login",
  //   element: <Login/>
  // }
]);

function App() {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
