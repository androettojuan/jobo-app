import { Route, Routes } from "react-router-dom";
import { routes } from "./pages/routes";
import BottomBar from "./components/BottomBar/BottomBar";
import AppLayout from "./components/AppLayout/AppLayout";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  const user = true;
  return (
    <AppLayout>
      <AppLayout.AppContainer>
        <Routes>
          {user ? (
            routes?.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component {...route.options} />}
              />
            ))
          ) : (
            <Route path="" element={<LoginPage />} />
          )}
        </Routes>
      </AppLayout.AppContainer>
      {user && (
        <AppLayout.NavContainer>
          <BottomBar />
        </AppLayout.NavContainer>
      )}
    </AppLayout>
  );
}

export default App;
