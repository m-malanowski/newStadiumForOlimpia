import * as React from "react";
import Card from "./card";

const Projects = () => {
    return (
        <div className="section section--full section--primary">
            <div className="container">
                <h2 className="uppercase color-white">Podobne realizacje</h2>
                <div className="projects margin-top-lg">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Projects
