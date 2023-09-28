import {Navigate, Route, Routes} from "react-router";
import Homepage from "../HomePage";

export const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Homepage />} />
            <Route path="*" element={<Navigate replace to={'/'} />} />
        </Routes>
    )
}