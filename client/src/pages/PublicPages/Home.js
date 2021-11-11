import React from "react";
import { Carousel } from "react-bootstrap";
const Home = () => {
    return (
        <div>
            <h2 style={{ color: "steelblue", textAlign: "center" }}>
                {" "}
                Bienvenue au cabinet dentaire.
            </h2>
            <p>
                {" "}
                Notre équipe soignante vous accueille dans son cabinet à Jarry –
                Baie-Mahault pour une prise en charge globale et personnalisée,
                nous sommes spécialisé en esthétique dentaire, parodontologie,
                chirurgie dentaire et implantologie.
            </p>
            <p>
                A ce titre, nous pourrons réaliser pour vous tous types de
                prothèses dentaires, amovible (appareils dentaire) ou fixe
                (couronnes et bridges), de prothèses implantaires (implant et
                couronne implantaire), de soins esthétiques (facettes,
                blanchiment, alignement par gouttières invisibles, inlay et
                onlays …), des traitements de gencive (parodontie, greffe de
                gencive) et tous types de chirurgies (extraction des dents de
                sagesse, greffe osseuse, Sinus Lift, Summers, régénération
                osseuse guidée, traction de dents incluses et pose de tous types
                d’implants. Notre structure est équipée de 3 salles de soins et
                d’un bloc opératoire dédié à la chirurgie. Notre équipement
                moderne (Cône Beam-imagerie 3D, laser, laboratoire de chirurgie
                guidée, caméra optique, microscope, aide optique) nous permettra
                de vous proposer des soins de qualité alliant confort tout au
                long de votre traitement et prise en charge personnalisée
            </p>
            <Carousel style={{ textAlign: "center" }}>
                <Carousel.Item>
                    <img
                        className=" w-25 p-3"
                        src="https://th.bing.com/th/id/OIP.2y9k6bgdSj8foOF7CPEKuQHaE8?pid=ImgDet&rs=1"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-25 p-3"
                        src="https://media.sciencephoto.com/image/f0244175/800wm/F0244175-Prosthetic_dentistry_technician_at_work.jpg"
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-25 p-3"
                        src="https://th.bing.com/th/id/OIP.VwVLHR4_Z9M4ejwwyg3GyQAAAA?pid=ImgDet&w=470&h=320&rs=1"
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>

            {/* <img
                    alt=""
                    src="https://th.bing.com/th/id/R.b9aa33e8ec9adc4bd967788797dde3d1?rik=YOmJhkryUOBqtA&pid=ImgRaw&r=0"
                    style={{
                        width: "300px",
                        height: "350px",
                        float: "right",
                        paddingBottom: "90px",
                    }}
                />
                <h4 style={{ color: "steelblue", fontSize: "30px" }}>
                    {" "}
                    Le blanchiment
                </h4>
                <p>
                    Après avoir soigné les caries et les gencives le blanchiment
                    dentaire est réalisé avec des gouttières que nous fabricons
                    sur mesure.
                </p>
                <p>
                    Une attention particulière est apportée au choix du produit
                    de blanchiment et à sa concentration. Le patient effectue
                    ensuite le traitement chez lui, en portant tous les jours
                    les goutières remplies de produit de blanchiment.
                </p>
                <p>
                    Le résultat s’obtient en une quinzaine de jours en moyenne
                    et est à entretenir par des rappels de temps en temps.
                </p>
                <h4 style={{ color: "steelblue", fontSize: "30px" }}>
                    {" "}
                    Les Dévitalisations
                </h4>
                <p>
                    Les dévitalisations sont des actes longs et compliqués. Nous
                    essayons toujours d’éviter d’en arriver à ce stade.
                    Lorsqu’une carie devient trop profonde, il faut dévitaliser
                    la dent.{" "}
                </p>
                <p>
                    Dans les cas complexes, nous travaillons avec des
                    spécialistes qui réalisent le traitement sous microscope.
                    Dépister et soigner sans tarder des caries débutantes permet
                    d’éviter les douleurs et l’atteinte du nerf.{" "}
                </p>
                <p>
                    Cela diminue également le nombre de rendez-vous et le coût
                    des traitements.
                </p>

                <img
                    alt=""
                    src="https://www.richeidee.com/wp-content/uploads/2013/03/mutuelle_carie_medium.jpg"
                    style={{
                        width: "300px",
                        height: "350px",
                        float: "right",
                        paddingBottom: "90px",
                    }}
                /> */}
        </div>
    );
};
export default Home;
