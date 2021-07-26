import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B79B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            color: "white",
            height: "45px"
        }
    }
});