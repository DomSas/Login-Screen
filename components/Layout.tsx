import { ScriptProps } from "next/script";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }: ScriptProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
