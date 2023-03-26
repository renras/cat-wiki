import { useEffect } from "react";
import { getCats } from "./store/appSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Components/Header";
import CatInfo from "./Components/CatInfo/CatInfo";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.app.status);

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":catName" element={<CatInfo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
