import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return ( 
        <Box m="20px">
            <Header title="Line Chart" subtitle="Line Chart Example" />
            <Box height="75vh">
            <LineChart />
            </Box>
        </Box>
     );
}
 
export default LineChart;