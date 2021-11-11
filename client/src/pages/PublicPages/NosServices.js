import React from "react";
import { Button } from "react-bootstrap";

const NosServices = () => {
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
                    fontSize: "35px",
                    color: "steelblue",
                }}
            >
                Nos Services{" "}
            </h4>
            <div
                style={{
                    paddingTop: "40px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}
            >
                {" "}
               
                <Button
                    style={{
                        width: "175px",
                        height: "100px",
                        backgroundColor: "black",
                    }}
                >
                    BLANCHIMENT
                </Button>
                <Button
                    style={{
                        width: "175px",
                        height: "100px",
                        backgroundColor: "black",
                    }}
                >
                    CARIES{" "}
                </Button>
                <Button
                    style={{
                        width: "175px",
                        height: "100px",
                        backgroundColor: "black",
                    }}
                >
                    DÉVITALISATION{" "}
                </Button>
                <Button
                    style={{
                        width: "175px",
                        height: "100px",
                        backgroundColor: "black",
                    }}
                >
                    EXTRACTIONS{" "}
                </Button>
                <Button
                    style={{
                        width: "175px",
                        height: "100px",
                        backgroundColor: "black",
                    }}
                >
                    IMPLANTS{" "}
                </Button>
                <Button
                    style={{
                        width: "175px",
                        height: "100px",
                        backgroundColor: "black",
                    }}
                >
                    PROTHÈSES
                </Button>
            </div>
        </div>
    );
};

export default NosServices;
