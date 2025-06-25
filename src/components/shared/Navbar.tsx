import { ModalStateProvider } from "../context/ModalContext";
import NavbarDropdown from "../dropdown/NavbarDropdown";
import NewRecordDropDown from "../dropdown/NewRecordDropDown";

const Navbar = () => {
  return (
    <div className="py-6 px-8 mb-8 flex">
      <ModalStateProvider>
        <NewRecordDropDown />
      </ModalStateProvider>
      <div className="ms-auto border-l ps-2 border-gray-300">
        <NavbarDropdown />
      </div>
    </div>
  );
};
export default Navbar;
