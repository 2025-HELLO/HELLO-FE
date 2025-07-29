import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <h1>임시 헤더</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
