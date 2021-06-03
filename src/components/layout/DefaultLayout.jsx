import React from "react";
import HeaderTop from "./partials/HeaderTop";
import Footer from "./partials/Footer";

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <header className="header mb-2">
        <HeaderTop />
      </header>
      <main className="main">
        <h1>main</h1>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
