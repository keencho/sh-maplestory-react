import {Route, Routes} from "react-router-dom";
import {Main} from "@/app/page/Main.tsx";
import {Hello} from "@/app/page/Hello.tsx";
import React from "react";

interface IMenu {
    path: string
    element: React.ReactElement
    name: string
    useOnHeader?: boolean
}

export const Menu: IMenu[] = [
    { path: '/', element: <Main />, name: '메인', useOnHeader: true },
    { path: '/hello', element: <Hello />, name: '테스트', useOnHeader: true }
]

export function Router() {
    return (
        <Routes>
            { Menu.map(item => (<Route key={item.path} path={item.path} element={item.element} />)) }
        </Routes>
    )
}