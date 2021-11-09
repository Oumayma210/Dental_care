// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { editRDV } from "./../../JS/actions/doctor";
// // import { moment } from "moment";

// const EditRdv = ({ match }) => {
//     const dispatch = useDispatch();

//     const [newRendezVous, setNewRendezVous] = useState({
//         PatientName: "",
//         date: "",
//         médicament: "",
//         note: "",
//         Numero: "",
//         message: "",
//     });

//     const handleChange = (e) => {
//         setNewRendezVous({ ...newRendezVous, [e.target.name]: e.target.value });
//     };
//     const editRendez = () => dispatch(editRDV(match.params.id, newRendezVous));
//     return (
//         <div>
//             <h2>Edit Rdv</h2>
//             <div
//                 style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     flexWrap: "wrap",
//                     width: "500px",
//                     paddingLeft: "500px",
//                 }}
//             >
//                 <label htmlFor="PatientName">Patient Name</label>
//                 <input
//                     style={{ width: "400px", textAlign: "center" }}
//                     type="text"
//                     name="PatientName"
//                     value={newRendezVous.PatientName}
//                     placeholder="enter the patient Name"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="date">Date</label>
//                 <input
//                     style={{
//                         width: "400px",
//                         textAlign: "center",
//                     }}
//                     type="text"
//                     name="date"
//                     value={newRendezVous.date}
//                     placeholder="DD-MM HH h"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="médicament">médicament</label>
//                 <input
//                     style={{ width: "400px", textAlign: "center" }}
//                     type="text"
//                     name="médicament"
//                     value={newRendezVous.médicament}
//                     placeholder="médicament"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="phone">phone </label>
//                 <input
//                     style={{ width: "400px", textAlign: "center" }}
//                     type="tel"
//                     name="Numero"
//                     value={newRendezVous.Numero}
//                     placeholder="Enter you phone"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="note">Motif de consultation</label>
//                 <select style={{ textAlign: "center", width: "400px" }}>
//                     <option value="">Choisissez un motif</option>
//                     <option value="1">Première consultation dentaire</option>
//                     <option value="2">Consultation de suivi dentaire</option>
//                     <option value="3">Détartrage </option>
//                     <option value="4">Urgence dentaire</option>
//                     <input
//                         style={{ width: "400px", textAlign: "center" }}
//                         type="string"
//                         name="note"
//                         value={newRendezVous.note}
//                         placeholder="Choisissez un motif"
//                         onChange={handleChange}
//                     />
//                 </select>
//                 <label htmlFor="Date de Naissance ">Date de Naissance</label>
//                 <input
//                     style={{ width: "400px", textAlign: "center" }}
//                     type="date"
//                     name="message"
//                     value={newRendezVous.message}
//                     placeholder="Date de naissance"
//                     onChange={handleChange}
//                 />

//                 <Link to="/rdv">
//                     <Button onClick={() => editRendez()}>Edit</Button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default EditRdv;
