// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { editProfile } from "./../../JS/actions/patient";

// const Edit = ({ match }) => {
//     const dispatch = useDispatch();

//     const [newPatient, setNewPatient] = useState({
//         name: "",
//         email: "",
//         password: "",
//         nickname: "",
//         age: "",
//         phone: "",
//     });

//     const handleChange = (e) => {
//         setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
//     };
//     const edit = () => dispatch(editProfile(match.params.id, newPatient));
//     console.log(newPatient);
//     return (
//         <div>
//             <h2>Edit profile patient</h2>
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
//                 <label htmlFor="name">name</label>
//                 <input
//                     style={{ width: "400px", textAlign: "center" }}
//                     type="text"
//                     name="name"
//                     value={newPatient.name}
//                     placeholder="enter your name"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="email">email</label>
//                 <input
//                     style={{ width: "400px", textAlign: "center" }}
//                     type="email"
//                     name="email"
//                     value={newPatient.email}
//                     placeholder="enter your email"
//                     onChange={handleChange}
//                 />{" "}
//                 <label htmlFor="phone">phone</label>
//                 <label htmlFor="password">Password</label>
//                 <input
//                     style={{
//                         width: "400px",
//                         textAlign: "center",
//                     }}
//                     type="password"
//                     name="password"
//                     value={newPatient.password}
//                     placeholder="enter your password"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="nickname">nickname</label>
//                 <input
//                     style={{
//                         width: "400px",
//                         textAlign: "center",
//                     }}
//                     type="text"
//                     name="nickname"
//                     value={newPatient.nickname}
//                     placeholder="enter your nickname"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="age">age</label>
//                 <input
//                     style={{
//                         width: "400px",
//                         textAlign: "center",
//                     }}
//                     type="number"
//                     name="age"
//                     value={newPatient.age}
//                     placeholder="enter your age"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="phone">phone</label>
//                 <input
//                     style={{
//                         width: "400px",
//                         textAlign: "center",
//                     }}
//                     type="phone"
//                     name="phone"
//                     value={newPatient.phone}
//                     placeholder="enter your phone"
//                     onChange={handleChange}
//                 />
//                 <Link to="/profile">
//                     <Button onClick={() => edit()}>Edit</Button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Edit;
