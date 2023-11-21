import React from "react";
import renderer from "react-test-renderer";
import AvisItem from "../../../components/avis/AvisItem";


describe("AvisItem tests", () => {
    // dumb test to check if jest is working
    test("jest test", () => {
        expect(1).toBe(1);
    })

    test("AvisItem renders correctly", () => {
        const avis = {
            id: 1, nom: "nom", prenom: "prenom", note: 9, job: "Serveur", date: "11/09/2023", titre: "titre avis 1",
            avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        }

        const tree = renderer.create(<AvisItem avis={avis} onpress={console.log("pressed")} />).toJSON();
        expect(tree).toMatchSnapshot();
        // on test que le composant ne change pas par rapport à sa version précédente
    })
})