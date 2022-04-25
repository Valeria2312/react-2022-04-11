import { render } from "@testing-library/react-hooks";
import Logo from "../../ui/header/img/logo.svg";

describe('test product component', () => {
  it('should correct render header', () => {
    render(<img  alt=" " src={Logo}/>);
  });
});