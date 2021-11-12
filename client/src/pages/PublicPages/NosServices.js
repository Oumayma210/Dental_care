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

            <h1>Card Image with description on :hover</h1>
            <div className="cards">
                <div
                    className="card"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "#34495e",
                    }}
                >
                    <h2 className="card-title">Les Dévitalisations</h2>
                    <img
                        src="https://www.richeidee.com/wp-content/uploads/2013/03/mutuelle_carie_medium.jpg"
                        alt
                    />
                    <p className="card-desc">
                        <p>
                            Les dévitalisations sont des actes longs et
                            compliqués. Nous essayons toujours d’éviter d’en
                            arriver à ce stade. Lorsqu’une carie devient trop
                            profonde, il faut dévitaliser la dent.{" "}
                        </p>
                        <p>
                            Dans les cas complexes, nous travaillons avec des
                            spécialistes qui réalisent le traitement sous
                            microscope. Dépister et soigner sans tarder des
                            caries débutantes permet d’éviter les douleurs et
                            l’atteinte du nerf.{" "}
                        </p>
                        <p>
                            Cela diminue également le nombre de rendez-vous et
                            le coût des traitements.
                        </p>
                    </p>
                </div>
                <div
                    className="card"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "#34495e",
                    }}
                >
                    <h2 className="card-title">Le Blanchiment</h2>
                    <img
                        src="https://th.bing.com/th/id/R.b9aa33e8ec9adc4bd967788797dde3d1?rik=YOmJhkryUOBqtA&pid=ImgRaw&r=0"
                        alt
                    />
                    <p className="card-desc">
                        <p>
                            Après avoir soigné les caries et les gencives le
                            blanchiment dentaire est réalisé avec des gouttières
                            que nous fabricons sur mesure.
                        </p>
                        <p>
                            Une attention particulière est apportée au choix du
                            produit de blanchiment et à sa concentration. Le
                            patient effectue ensuite le traitement chez lui, en
                            portant tous les jours les goutières remplies de
                            produit de blanchiment.
                        </p>
                        <p>
                            Le résultat s’obtient en une quinzaine de jours en
                            moyenne et est à entretenir par des rappels de temps
                            en temps.
                        </p>
                    </p>
                </div>
                <div
                    className="card"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "#34495e",
                    }}
                >
                    <h2 className="card-title">Les Extractions</h2>
                    <img
                        src="https://th.bing.com/th/id/R.044ca0e7465249159d33b872386aedde?rik=teco8eXI%2fWS41g&riu=http%3a%2f%2fbssident.ma%2fwp-content%2fuploads%2f2018%2f10%2fextraction-dentaire.jpg&ehk=N3C9yYSZNF3m5Ikb%2fto8SIUhr1HOW3eYAzYUwkPGMLo%3d&risl=&pid=ImgRaw&r=0"
                        alt
                    />
                    <p className="card-desc">
                        Les extractions se font au cabinet sauf en cas de
                        demande d’une anesthésie générale ou de complications
                        possibles, nécessitant une infrastructure hospitalière.
                        Dans ce cas, nous travaillons avec des stomatologues et
                        chirurgiens maxillo-faciaux.
                    </p>
                </div>
            </div>
            <h1>Card Image with description on :hover</h1>
            <div className="cards">
                <div
                    className="card"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "#34495e",
                    }}
                >
                    <h2 className="card-title">LES PROTHÈSES DENTAIRES </h2>
                    <img
                        src="https://th.bing.com/th/id/R.c0cfaaf16363b6ccba9552c9e00de34e?rik=XFgmpU4XTWOI4w&riu=http%3a%2f%2fwww.tourismedentairecolombie.com%2fwp-content%2fuploads%2f2019%2f03%2fprothese.jpg&ehk=dMEbLD4NKc84e5bOJA2kchBzA5VM2%2bXcoWDebQIiTRs%3d&risl=&pid=ImgRaw&r=0"
                        alt
                        style={{height:"200px"}}
                    />
                    <p className="card-desc">
                        Les prothèses dentaires fixes et amovibles sont
                        réalisées en partenariat avec les meilleurs laboratoires
                        dentaires en Belgique.
                    </p>
                </div>
                <div
                    className="card"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "#34495e",
                    }}
                >
                    <h2 className="card-title">LES IMPLANTS</h2>
                    <img
                        src="https://th.bing.com/th/id/R.3861a8a869b5e222fbc59bd7e32c687f?rik=v786zXhgN7R6Ow&pid=ImgRaw&r=0"
                        alt
                        style={{height:"200px"}}

                    />
                    <p className="card-desc">
                        Le remplacement des dents asbentes par des implants est
                        effectué après pose des implants chez un spécialiste en
                        implant.
                    </p>
                </div>
                <div
                    className="card"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "#34495e",
                    }}
                >
                    <h2 className="card-title">LE SOIN DES GENCIVES</h2>
                    <img
                        src="https://th.bing.com/th/id/OIP.p_rf7nFnWHszYe2Yrg7pTgHaFj?pid=ImgDet&rs=1"
                        alt
                        style={{height:"200px"}}

                    />
                    <p className="card-desc">
                        Le soin des gencives commence par une hygiène
                        quotidienne méticuleuse et par des détartrages réguliers
                        et soigneux. Nous accordons une grand importance à la
                        propreté de la bouche et insistons beaucoup sur ce
                        point. Cela permet ensuite de réaliser des soins dans un
                        environnement sain. En cas de maladie de gencive, nous
                        travaillons avec des parodontologues.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NosServices;
