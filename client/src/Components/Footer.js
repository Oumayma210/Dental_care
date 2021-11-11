import React from "react";
const Footer = () => {
    return (
        // <footer>
        //     {" "}
        //     <h2>Contact</h2>
        //     <p>66B Rue du Marechal Foch Hauptstross, 67190 Mutzig, France</p>
        //     cabinet.offerle@gmail.com 03 88 38 60 47
        // </footer>
        <footer className="w-100 py-2 flex-shrink-0">
            <div className="container py-1">
                <div className="row gy-2 gx-1">
                    <div className="col-lg-10 col-md-1">
                        <h5 className="h4 text-black">Contact</h5>
                        <p className="small text-muted">
                            <address>
                                <span>Adresse:</span>
                                Parvis Sainte-Alix 45A, 1150
                                Woluwe-Saint-Pierre, Belgium
                                <br />
                                <span>Telephone:</span>
                                02 779 81 92
                                <br />
                                <span>Email:</span>
                                <a href="cabinet@baradent.be">
                                    cabinet@baradent.be
                                </a>
                            </address>
                        </p>
                        {/* 66B Rue du Marechal Foch Hauptstross, 67190 Mutzig,
                            France cabinet.offerle@gmail.com 03 88 38 60 47.
                        </p> */}
                        <p className="small text-muted mb-0">
                            © Copyrights. All rights reserved.{" "}
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <ul
                            className="list"
                            style={{ fontSize: "18px", paddingTop: "30px" }}
                        >
                            <ol>
                                <a href="/">Accueil</a>
                            </ol>
                            <ol>
                                <a href="/about">About</a>
                            </ol>
                            <ol>
                                <a href="#">Nos Services</a>
                            </ol>
                            <ol>
                                <a href="/signup">Rendez-vous</a>
                            </ol>
                        </ul>
                    </div>
                    <div
                        className="col-lg-2 col-md-6"
                        style={{ textAlign: "center" }}
                    >
                        {/* <h5 className="text-black mb-3">Contact</h5>
                        <p className="small text-muted">
                           <p>  Address :Parvis Sainte-Alix 45A, 1150</p>
                           <p>Woluwe-Saint-Pierre, Belgium Telefon: 02 779 81 92</p>
                           <p> Email : cabinet@baradent.be</p>
                         
                        </p> */}
                        {/* <p className="small text-muted mb-0">
                            © Copyrights. All rights reserved.{" "}
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
