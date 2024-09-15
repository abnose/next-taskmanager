import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const BasePage = ({ children }) => {
  const isOpen = useSelector((state: RootState) => state?.menu?.isOpen);

  return (
    <Box
      className={`${
        !isOpen ? "w-[calc(100%-120px)]" : "w-[calc(100%-295px)]"
      } h-[calc(100%-2vw)] shadow-md rounded-lg overflow-hidden fixed top-[1vw] left-[1vw]`}
      sx={{ backgroundColor: "rgb(240, 245, 255)" }}
    >
      {children}
    </Box>
  );
};

export default BasePage;
