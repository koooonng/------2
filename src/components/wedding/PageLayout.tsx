
import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f4f1]">
      {/* Верхняя декоративная полоса */}
      <div className="h-6 bg-gradient-to-r from-[#d6bcfa] via-[#9b87f5] to-[#d6bcfa]"></div>
      
      {/* Основной контент */}
      <div className="container max-w-4xl mx-auto px-4 py-8 flex-1">
        {children}
      </div>
      
      {/* Подвал */}
      <footer className="text-center py-6 text-[#8E9196] text-sm">
        <p>С любовью, Александр и Екатерина</p>
        <p className="mt-2">© 2025</p>
      </footer>
    </div>
  );
};

export default PageLayout;
