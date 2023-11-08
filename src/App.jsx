import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SimProvisioning from "./components/SimProvisioning";
import DeviceProvisioning from "./components/DeviceProvisioning";
import MmiProvisioning from "./components/MmiProvisioning";
import Provisioning from "./components/Provisioning";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sim-provisioning" element={<SimProvisioning />} />
        <Route path="/device-provisioning" element={<DeviceProvisioning />} />
        <Route path="/mmi-provisioning" element={<MmiProvisioning />} />
        <Route path="/provisioning" element={<Provisioning />} />
      </Routes>
    </Router>
  );
}

export default App;
