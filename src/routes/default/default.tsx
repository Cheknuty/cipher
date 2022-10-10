import { Route, Routes } from "react-router-dom";
import { AboutUs } from "../../pages/aboutUs/aboutUs";
import { Ciphers } from "../../pages/ciphers/ciphers";
import { Home } from "../../pages/home/home";
import { useAppDispatch } from "../../redux/hooks";
import { drawerToggle } from "../../redux/slice/drawerSlice";
import { DefaultWrapper } from "./default.style";

export function Default() {
    const dispatch = useAppDispatch()
    return (
        <DefaultWrapper onClick={() => dispatch(drawerToggle(false))}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/ciphers" element={<Ciphers />} />
                
            </Routes>
        </DefaultWrapper>
    )
}