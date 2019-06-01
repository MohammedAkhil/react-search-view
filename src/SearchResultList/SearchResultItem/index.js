import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  item: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  active: {
    background: "#d6d6d6"
  }
}));

export default React.forwardRef((props, ref) => {
  const { id, name, address, pincode, active, onMouseOver, index } = props;
  const classes = useStyles();

  // const elRef = useRef();

  const onHover = () => {
    onMouseOver(index);
  };

  return (
    <ListItem
      ref={ref[index]}
      alignItems="flex-start"
      divider
      className={active ? classes.active : null}
      onMouseOver={onHover}
    >
      <div className={classes.item}>
        <Typography variant="h6">{id}</Typography>
        <Typography color="textSecondary" variant="subtitle1" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {address}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {pincode}
        </Typography>
      </div>
    </ListItem>
  );
});
