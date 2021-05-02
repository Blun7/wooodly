import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    imageInput: {
        marginTop: theme.spacing(2)
    },
    box: {
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(25),
        marginRight: theme.spacing(25)
    }
}));

function AddProject() {
    const [value, setValue] = React.useState("no");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Typography variant="h5">Add Project</Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="projectName"
                            variant="outlined"
                            required
                            fullWidth
                            id="projectName"
                            label="Project Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="price"
                            label="Price"
                            name="price"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">
                                Accept Commisions?
                            </FormLabel>
                            <RadioGroup
                                aria-label="acceptCommision"
                                name="acceptCommision"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio />}
                                    label="No"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">
                                Upload Image
                            </FormLabel>
                            <input
                                accept="image/*"
                                id="raised-button-file"
                                multiple
                                type="file"
                                className={classes.imageInput}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Done
                </Button>
            </form>
        </Box>
    );
}

export default AddProject;
