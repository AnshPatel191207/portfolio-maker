import "../styles/builder.css";
import PersonalForm from "../components/builder/PersonalForm";
import SkillsForm from "../components/builder/SkillsForm";
import ProjectsForm from "../components/builder/ProjectsForm";
import AboutForm from "../components/builder/AboutForm";
import EducationForm from "../components/builder/EducationForm";
import AchievementsForm from "../components/builder/AchievementsForm";
import LinksForm from "../components/builder/LinksForm";
import NextButton from "../components/common/NextButton";

const Builder = ({setPage}) => {
  return (
    <>
    <div className="builder-page">
      <div className="forms">
        <PersonalForm />
        <AboutForm />
        <SkillsForm />
        <EducationForm />
        <ProjectsForm />
        <AchievementsForm />
        <LinksForm />
        <NextButton
        label="Choose Template"
        onNext={() => setPage("templates")}
      />
      </div>
    </div>
    </>
  );
};

export default Builder;
