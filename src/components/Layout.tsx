import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-[1280px] mx-auto font-['Pretendard']">
      <main className="">{children}</main>
    </div>
  );
}

export default Layout;
