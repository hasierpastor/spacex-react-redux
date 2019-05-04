import React from '../../node_modules/react';

/**
 * Reusable layout component
 */
const Layout = ({ pageName, menu, children }) => (
  <main className={`${pageName} layout`}>
    <nav>{menu}</nav>

    <section>{children}</section>
  </main>
);

export default Layout;
