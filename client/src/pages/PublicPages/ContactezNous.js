import React from "react";

const ContactezNous = () => {
    return (
        <div>
            <h4
                style={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: "steelblue",
                    paddingTop: "50px",
                }}
            >
                Contact
            </h4>
            <div
                style={{
                    textAlign: "left",
                    paddingBottom: "50px",
                    fontSize: "20px",
                    fontWeight: "900px",
                    paddingLeft: "70px",
                }}
            >
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
            <div style={{ textAlign: "center" }}>
                {" "}
                <img
                    alt=""
                    src="./123.png"
                    style={{
                        width: "50rem",
                        height: "20rem",
                    }}
                />
            </div>
        </div>
    );
};

export default ContactezNous;
