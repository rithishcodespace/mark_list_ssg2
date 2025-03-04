import {createBrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import MarkEntryPage from "./components/MarkEntryPage";
import View from "./components/view";

let route = createBrowserRouter([{
    path:"/",
    element:<Login/>
},
{
    path:"/markentry",
    element:<MarkEntryPage/>
},
{
    path:"getmarks",
    element:<View/>
}])

export default route;