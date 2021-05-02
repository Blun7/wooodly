import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useClasses = makeStyles((theme) => ({
    title: {
        color: "#e36414ff",
        textTransform: "uppercase",
        fontSize: "5rem",
        padding: "0",
        margin: "0",
        letterSpacing: ".3rem"
    },
    tag: {
        color: "#0f4c5cff",
        padding: "0",
        margin: "0 0 0 1rem",
        fontWeight: "300",
        fontSize: "1.5rem"
    }
}));

function PageTitle() {
    const classes = useClasses();

    return (
        <Box display="flex" flexDirection="column">
            <h1 className={classes.title}>Woodly</h1>
            <h3 className={classes.tag}>the woodworkers' shop</h3>
        </Box>
    );
}

export default PageTitle;
