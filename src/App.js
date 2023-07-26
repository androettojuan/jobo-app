import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import BottomBar from "./components/BottomBar/BottomBar";
import { routes, routesRegister } from "./pages/routes";
import { UserDataProvider } from "./utils/userData";
import { useEffect, useState } from "react";

function App() {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);

  async function getUser(userId) {
    const response = await fetch("http://localhost:8080/user/" + userId);
    const data = await response.json();
    setUser(data[0]);
  }

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, [userId]);

  return (
    <UserDataProvider value={user}>
      <AppLayout>
        <AppLayout.AppContainer>
          <Routes>
            {user
              ? routes?.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))
              : routesRegister.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
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
    </UserDataProvider>
  );
}

export default App;
