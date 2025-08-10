// src/components/Layout.tsx
import React from "react";
import BackgroundEffects from "./BackgroundEffects";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-background to-muted/30">
      <BackgroundEffects />
      <div className="z-10">{children}</div>
    </div>
  );
};

export default Layout;
