import { Route, Routes } from "react-router-dom";
import { routes } from "./pages/routes";

function App() {
  return (
    <div>
      <Routes>
        {routes?.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component {...route.options} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
