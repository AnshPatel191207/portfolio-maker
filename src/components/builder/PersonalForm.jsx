import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const PersonalForm = () => {
    const { portfolioData, setPortfolioData } = useContext(PortfolioContext);

    const handleChange = (e) => {
        setPortfolioData({
            ...portfolioData,
            personal: {
                ...portfolioData.personal,
                [e.target.name]: e.target.value
            }
        });
    };

    return (
        <div className="form-card">
            <h2>Personal Information</h2>

            <input name="name" placeholder="Full Name" onChange={handleChange} />
            <input name="title" placeholder="Professional Title" onChange={handleChange} />

            <input name="email" placeholder="Email Address" onChange={handleChange} />
        </div>
    );
};

export default PersonalForm;
