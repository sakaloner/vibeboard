import React from "react";
import ProjectSummary from './ProjectSummary';

function ProjectListing({ projects }) {
    return (
        <div className="grid grid-cols-2 gap-4 p-4 items-stretch">
           {projects.map((project, index) => (
                <ProjectSummary key={index} project={project} />
           ))}
        </div>
    );
}

export default ProjectListing;
