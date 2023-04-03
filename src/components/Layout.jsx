import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex">
        <Navbar />
        <div
          // id="contents"
          className="w-full mt-14 ml-10 outline-none"
          // tabIndex="1"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
