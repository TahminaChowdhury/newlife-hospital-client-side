import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home/Home";
import Emergency from "./components/Home/Departments/Emergency";
import Cardiology from "./components/Home/Departments/Cardiology";
import CancerSurgery from "./components/Home/Departments/CancerSurgery";
import DiabetesEndocrinology from "./components/Home/Departments/DiabetesEndocrinology";
import NeuroSurgery from "./components/Home/Departments/NeuroSurgery";
import PlasticSurgery from "./components/Home/Departments/PlasticSurgery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/cardiology" element={<Cardiology />} />
      <Route path="/cancer-surgery" element={<CancerSurgery />} />
      <Route path="/cancer-surgery" element={<DiabetesEndocrinology  />} />
      <Route path="/neuro-surgery" element={<NeuroSurgery />} />
      <Route path="/plastic-surgery" element={<PlasticSurgery />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
