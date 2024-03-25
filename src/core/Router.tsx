import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "@/app/page/Main.tsx";
import {Hello} from "@/app/page/Hello.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/hello',
        element: <Hello />
    }
])

export function Router() {
    return <RouterProvider router={router} />
}