import { Link } from "react-router-dom";
import { MainPageStyled, CustomButton } from "../../styles/pages/MainPage.Styles";

const MainPage: React.FC = () => {
  return (
    <MainPageStyled>
      <Link to="/test">
        <CustomButton>Start</CustomButton>
      </Link>
    </MainPageStyled>
  );
};

export default MainPage;
