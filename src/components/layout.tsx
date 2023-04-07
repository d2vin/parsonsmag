import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="dark:bg-neutral-900 z-0 mx-4 xs:mx-auto h-screen snap-y snap-mandatory overflow-scroll no-scrollbar">
      {children}
    </div>
  );
};

export default Layout;
