import React from "react";
import Content from "./Content.jsx";
import Slidebar from "./Slidebar";

function Layout() {
  return (
    <>
      <div class="antialiased bg-white/90 w-full min-h-screen text-slate-300 relative py-2">
        <div class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl">
          <Slidebar />
          <Content />
        </div>
      </div>
    </>
  );
}

export default Layout;
