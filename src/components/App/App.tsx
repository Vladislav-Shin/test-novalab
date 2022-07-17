import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../global.css";
import { SinglePage, MainPage, ErrorPage, UnknownPage, ProfilePage } from "../pages";

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<MainPage />} />
          <Route path="/unknown" element={< UnknownPage />} />
          <Route path="/users/:id" element={<SinglePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;
