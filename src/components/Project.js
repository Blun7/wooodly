import ProjectPicture from "./ProjectPicture";
import ProjectHeader from "./ProjectHeader";
import ProjectFooter from "./ProjectFooter";

function Project() {
    return (
        <div className="p-3">
            <ProjectHeader />
            <ProjectPicture />
            <ProjectFooter />
        </div>
    );
}

export default Project;
