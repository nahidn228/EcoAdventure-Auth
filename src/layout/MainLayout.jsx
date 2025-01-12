import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Snowfall } from "react-snowfall";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
       <Snowfall snowflakeCount={100} />
      <header>
        <NavBar></NavBar>
      </header>
      <main className="min-h-screen ">
        <Banner></Banner>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
