import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import CarSection from "./pages/CarSection";
import ContactPage from "./pages/ContactPage";
import Impressum from "./pages/Impressum";
import MainPage from "./pages/MainPage";
import OurSchoolPage from "./pages/OurSchoolPage";
import PressSection from "./pages/PressSection";
import Privacy from "./pages/Privacy";
import SustainabilityPage from "./pages/SustainabilityPage";


const App:React.FC = ():JSX.Element => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<MainPage section={{name: "Home", referenceElementID: "FirstSection"}}></MainPage>}/>
        <Route path="/team" element={<MainPage section={{name: "Team", referenceElementID: "TeamSection"}}></MainPage>}/>
        <Route path="/car" element={<MainPage section={{name: "Auto", referenceElementID: "CarSection"}}></MainPage>}/>
        <Route path="/partner" element={<MainPage section={{name: "Partner", referenceElementID: "PartnerSection"}}></MainPage>}/>
        <Route path="/press" element={<PressSection NavBar Footer></PressSection>}/>
        <Route path="/school" element={<OurSchoolPage NavBar Footer></OurSchoolPage>}/>
        <Route path="/sustainability" element={<SustainabilityPage NavBar Footer></SustainabilityPage>}/>
        <Route path="/contact" element={<ContactPage NavBar Footer></ContactPage>}/>

        <Route path="/privacy" element={<Privacy></Privacy>}>Privacy</Route>
        <Route path="/impressum" element={<Impressum></Impressum>}>Impressum</Route>

        <Route path="*" element={<Navigate to="/home"/>}></Route>
      </Routes>

    </BrowserRouter>
  </>
  
}

export default App

