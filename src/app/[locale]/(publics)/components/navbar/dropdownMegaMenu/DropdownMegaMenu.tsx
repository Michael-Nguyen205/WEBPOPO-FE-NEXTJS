import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownMenuProps {
  handleToggleMenu: () => void;
  isOpen: boolean;
  buttonRefWebSite1: React.RefObject<HTMLButtonElement>;
  buttonRefWebSite2: React.RefObject<HTMLButtonElement>;
}

const DropdownMegaMenu: React.FC<DropdownMenuProps> = ({ handleToggleMenu, isOpen, buttonRefWebSite1,buttonRefWebSite2 }) => {
  return (
    <div className="relative inline-block">
      <button
        ref={buttonRefWebSite1}
        type="button"
        className="relative justify-center gap-x-1.5 rounded-md bg-lime-400 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-lime-600 transform transition-transform duration-500 active:scale-75 z-50 hidden md:inline-flex"
        onClick={handleToggleMenu}
      >
        Website
      </button>





      <button
        ref={buttonRefWebSite2}
        type="button"
        className="relative inline-flex justify-center text-black z-50 md:hidden"
        onClick={handleToggleMenu}
      >
        <div className="flex flex-col">
          <div>
            Websiteee
            {isOpen ? (
              <FaChevronDown className="ml-3 inline text-xm animate__animated animate__fadeIn" />
            ) : (
              <FaChevronUp className="ml-3 inline text-xm animate__animated animate__fadeIn" />
            )}
          </div>

          <div className="bg-black w-full h-1 rounded-xl"></div>
        </div>
      </button>




    </div>
  );
};

export default DropdownMegaMenu;
