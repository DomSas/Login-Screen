import { ScriptProps } from "next/script";
import Footer from "./Footer";

type BoxProps = {
    children: React.ReactNode; // 👈️ type children
  };

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }: ScriptProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
