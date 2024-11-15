import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/pages/frontend/Home";
import Gym from "./components/pages/backend/equipments/Equipments";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./components/store/storeContext";
import Accesories from "./components/pages/backend/accesories/Accesories";
import Apparels from "./components/pages/backend/apparels/Apparels";


function App() {
    const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/admin/gym' element={<Gym />} />
            <Route path='/admin/accesories' element={<Accesories />} />
            <Route path='/admin/apparels' element={<Apparels />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};




export default App;
