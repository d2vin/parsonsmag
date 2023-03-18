import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="z-0 mx-auto h-screen snap-y snap-mandatory overflow-scroll">
      {children}
    </div>
  );
};

export default Layout;
