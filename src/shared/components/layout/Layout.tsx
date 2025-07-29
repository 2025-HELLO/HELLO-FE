import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header
        style={{ padding: "1rem", background: "#f1f1f1", textAlign: "center" }}
      >
        <h1>임시 헤더</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
