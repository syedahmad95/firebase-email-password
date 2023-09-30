import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <h1 className="text-2xl">Hello from Root</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;