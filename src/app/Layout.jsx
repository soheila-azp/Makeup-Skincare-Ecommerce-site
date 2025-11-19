import React from 'react';
import Header from '../components/landing/Header/Header';
import Menu from '../components/landing/topMenu/Menu';
import { Outlet } from 'react-router-dom';
import Footer from '../components/landing/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet /> {/* اینجا محتوای صفحات رندر می‌شه */}
      <Footer/>
    </div>
  );
};

export default Layout;
