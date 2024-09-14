import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const BasePage = ({ children }) => {
  const isOpen = useSelector((state: RootState) => state?.menu?.isOpen);

  return (
    <Box
      className={`${
        !isOpen ? "w-[90%]  translate-x-[-53%]" : "w-[78%] translate-x-[-62%]"
      } h-[95vh] shadow-md rounded-lg p-5 overflow-hidden absolute top-[50%] left-[50%] translate-y-[-50%]`}
      sx={{ backgroundColor: "rgb(240, 245, 255)" }}
    >
      {children}
    </Box>
  );
};

export default BasePage;
