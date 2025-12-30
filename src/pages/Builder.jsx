import "../styles/builder.css";
import PersonalForm from "../components/builder/PersonalForm";
import SkillsForm from "../components/builder/SkillsForm";
import ProjectsForm from "../components/builder/ProjectsForm";
import AboutForm from "../components/builder/AboutForm";
import EducationForm from "../components/builder/EducationForm";
import AchievementsForm from "../components/builder/AchievementsForm";
import LinksForm from "../components/builder/LinksForm";
import BackButton from "../components/common/BackButton";
import NextButton from "../components/common/NextButton";
import PageNavButtons from "../components/common/PageNavButtons";

const Builder = ({ setPage }) => {
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
          <PageNavButtons
            onBack={() => setPage("home")}
            onNext={() => setPage("templates")}
            nextLabel="Choose Template"
          />
        </div>
      </div>
    </>
  );
};

export default Builder;
