import React from "react";
import Wrapper from "./Wrapper";
import Projects from "./projects";
import project from "../project.json";


class ProjectGallery extends React.Component {

    render(){
        return (
            <Wrapper>
                <Title>projects</Title>
                <Projects alt={project[0].name} name={project[0].name} gif={project[0].gif} github={project[0].github} url={project[0].url} />
                <Projects alt={project[1].name} name={project[1].name} gif={project[1].gif} github={project[1].github} url={project[1].url} />
                <Projects alt={project[2].name} name={project[2].name} gif={project[2].gif} github={project[2].github} url={project[2].url} />
                <Projects alt={project[3].name} name={project[3].name} gif={project[3].gif} github={project[3].github} url={project[3].url} />
                <Projects alt={project[4].name} name={project[4].name} gif={project[4].gif} github={project[4].github} url={project[4].url} />
                <Projects alt={project[5].name} name={project[5].name} gif={project[5].gif} github={project[5].github} url={project[5].url} />
            </Wrapper>
        );
    }
}

export default ProjectGallery;