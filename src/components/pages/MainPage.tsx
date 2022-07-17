import AppHeader from "../AppHeader/AppHeader";
import Footer from "../Footer/Footer";
import Forma from "../form/form";
import Users from "../Users/Users";

const MainPage: React.FC = () => {
  return (
    <>
      <AppHeader />
      <main className="main">
        <div className="container">
          <Users />
          {/* <Forma /> */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
