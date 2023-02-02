import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./approutes";
import { AuthRoutes } from "./authroutes";

export function Routes(){
    return(
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}