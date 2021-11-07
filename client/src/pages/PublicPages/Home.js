import React from "react";
import { Carousel } from "react-bootstrap";
const Home = () => {
    return (
        <div>
            <h2 style={{ color: "steelblue" }}>
                {" "}
                Bienvenue au cabinet dentaire des Docteurs Flandrin et Lloh2
                set.
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
            <Carousel>
                <Carousel.Item>
                    <img
                        className=" w-50 p-3"
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
                        className="w-50 p-3"
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
                        className="w-50 p-3"
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
            
            
        </div>
    );
};
export default Home;
