import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  textField: {
    display: "flex",
    flex: "0.5"
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 600
  }
}));

export default function SearchBar({ onChange, value, onKeyDown }) {
  const classes = useStyles();

  return (
    <TextField
      id="outlined-search"
      label="Search id,name,address etc."
      type="search"
      className={classes.textField}
      margin="normal"
      variant="outlined"
      onChange={onChange}
      value={value}
      onKeyDown={onKeyDown}
    />
  );
}
