import {createBrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import MarkEntryPage from "./components/MarkEntryPage";
import View from "./components/view";
import Edit from "./components/Edit";

let route = createBrowserRouter([{
    path:"/",
    element:<Login/>
},
{
    path:"/markentry",
    element:<MarkEntryPage/>
},
{
    path:"/getmarks",
    element:<View/>
},
{
    path:"/edit/:id",
    element:<Edit/>
}])

export default route;