import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden min-h-screen items-center relative">
      {/* Sticky Header */}
      <div className="w-full sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full items-center overflow-y-auto">
        <div className="w-full">{props.children}</div>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
