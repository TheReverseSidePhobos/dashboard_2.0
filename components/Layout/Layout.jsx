import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Task Manager 2.0</title>
        <meta name="description" content="Task Manager" />
        <link rel="shortcut icon" href="/task.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&family=Montserrat+Alternates:ital,wght@1,400;1,500;1,700;1,900&family=Outfit:wght@400;700&family=Spline+Sans:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="main__wrapper">
        <div className="header">
          <Header />
        </div>
        
        <div className="main">{children}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
