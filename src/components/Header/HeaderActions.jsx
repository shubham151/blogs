import Button from "../Button/Button";
import personBook from "../../assets/person-book.svg";
import { HeaderConstant } from "./HeaderConstant";

const HeaderActions = () => {
  return (
    <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-3 mt-3 mt-lg-0">
      <Button
        variant="secondary"
        startIcon={<img src={personBook} alt="user" width="16" height="16" />}
      >
        {HeaderConstant.ClientLoginLabel}
      </Button>

      <Button variant="primary" to="/book-discovery-call" size="lg">
        {HeaderConstant.BookDiscoveryCallLabel}
      </Button>
    </div>
  );
};

export default HeaderActions;
