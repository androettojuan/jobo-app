import { Route, Routes } from "react-router-dom";
import { routes, routesLogin } from "./pages/routes";
import BottomBar from "./components/BottomBar/BottomBar";
import AppLayout from "./components/AppLayout/AppLayout";
import "./App.css";

function App() {
  const user = false;
  return (
    <AppLayout>
      <AppLayout.AppContainer>
        <Routes>
          {user
            ? routes?.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component/>}
                />
              ))
            : routesLogin?.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component/>}
                />
              ))}
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
