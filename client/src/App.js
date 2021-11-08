import "./App.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router";
import Home from "./pages/PublicPages/Home";
import About from "./pages/PublicPages/About";
// import Edit from "./pages/PatientPages/Edit";
import RendezVous from "./pages/PatientPages/RendezVous";
import Signup from "./pages/PublicPages/SignUp";
import SignIn from "./pages/PatientPages/SignIn";
import Profile from "./pages/PatientPages/Profile";
import Error from "./pages/PublicPages/Error";
import Doctor from "./pages/DoctorPages/Doctor";
import SigninDoc from "./pages/DoctorPages/SigninDoc";
import AddRdv from "./pages/PatientPages/AddRdv";
import EditRdv from "./pages/DoctorPages/EditRdv";
import RDV from "./pages/DoctorPages/RDV";
// import Editmodal from "./pages/DoctorPages/Editmodal";
import PatientsList from "./Components/PatientsList";
function App() {
    return (
        <div className="App">
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />

                {/* rdv */}
                <Route path="/rendezvous" component={RendezVous} />
                <Route path="/addrdv" component={AddRdv} />
                <Route
                    path="/editrdv/:id"
                    render={(props) => <EditRdv {...props} />}
                />
                {/* patient */}
                <Route path="/addrdv" component={AddRdv} />

                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={SignIn} />
                <Route path="/profile" component={Profile} />
                {/* <Route
                    path="/Edit/:id"
                    render={(props) => <Edit {...props} />}
                /> */}
                {/* Doctor */}

                <Route path="/doctorroute" component={Doctor} />
                <Route path="/patientList" component={PatientsList} />
                <Route path="/doctor/signin" component={SigninDoc} />
                <Route path="/rdv" component={RDV} />
                <Route path="/*" component={Error} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
