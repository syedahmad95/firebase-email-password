import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <h1 className="text-2xl">Hello from Root</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;