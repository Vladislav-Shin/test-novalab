import AppHeader from "../appHeader/AppHeader";
import Footer from "../footer/Footer";
import Users from "../users/Users";

const MainPage: React.FC = () => {
  return (
    <>
      <AppHeader />
      <main className="main">
        <div className="container">
          <Users />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
