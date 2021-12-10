import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import AuthToken from "./components/AuthToken";
import AboutPage from "./pages/AboutPage";
import PageLogin from "./pages/LoginPage";
import PageRegister from "./pages/PageRegister";
import GuestToken from "./components/GuestToken";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <GuestToken>
                {" "}
                <PageLogin />
              </GuestToken>
            }
          />
          <Route
            path="/register"
            element={
              <GuestToken>
                {" "}
                <PageRegister />
              </GuestToken>
            }
          />

          <Route
            path="/todo"
            element={
              <AuthToken>
                {" "}
                <TodoPage />
              </AuthToken>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
