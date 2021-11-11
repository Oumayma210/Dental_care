import React from "react";

const ContactezNous = () => {
    return (
        <div
            style={{
                textAlign: "left",
                paddingBottom: "250px",
                paddingTop: "50px",
                fontSize: "20px",
                fontWeight: "900px",
                paddingLeft: "70px",
            }}
        >
            <h4
                style={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: "steelblue",
                }}
            >
                Contact
            </h4>
            <div>
                <ul>
                    <li>
                        {" "}
                        <span>Adresse:</span>
                        Parvis Sainte-Alix 45A, 1150 Woluwe-Saint-Pierre,
                        Belgium
                    </li>

                    <br />
                    <li>
                        {" "}
                        <span>Telephone:</span>
                        02 779 81 92
                    </li>

                    <br />
                    <li>
                        {" "}
                        <span>Email:</span>
                        <a href="cabinet@baradent.be">cabinet@baradent.be</a>
                    </li>
                </ul>
            </div>{" "}
        </div>
    );
};

export default ContactezNous;
