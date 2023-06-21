import { Route, Routes } from "react-router-dom";
import { routes } from "./pages/routes";
import BottomBar from "./components/BottomBar/BottomBar";
import AppLayout from "./components/AppLayout/AppLayout";
import "./App.css";

function App() {
  return (
    <AppLayout>
      <AppLayout.AppContainer>
        <Routes>
          {routes?.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component {...route.options} />}
            />
          ))}
        </Routes>
      </AppLayout.AppContainer>
      <AppLayout.NavContainer>
        <BottomBar />
      </AppLayout.NavContainer>
    </AppLayout>
  );
}

export default App;
