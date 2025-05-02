
import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F4E9]">
      {/* Верхняя декоративная полоса */}
      <div className="h-6 bg-gradient-to-r from-[#F5DEB3] via-[#D2B48C] to-[#F5DEB3]"></div>
      
      {/* Основной контент */}
      <div className="container max-w-4xl mx-auto px-4 py-8 flex-1">
        {children}
      </div>
      
      {/* Подвал */}
      <footer className="text-center py-6 text-[#59534D] text-sm">
        <p>С любовью, Александр и Екатерина</p>
        <p className="mt-2">© 2025</p>
      </footer>
    </div>
  );
};

export default PageLayout;
