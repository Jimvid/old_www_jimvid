import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="max-w-2xl m-auto p-4 pt-12 pb-12">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
