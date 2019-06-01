import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import SearchResultItem from "./SearchResultItem";
import { Card } from "@material-ui/core";
import React, { createRef, useRef } from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    height: "60vh",
    overflow: "overlay"
  },
  active: {
    color: "gray"
  },
  empty: {
    marginTop: 24
  }
}));

export default React.forwardRef((props, ref) => {
  const classes = useStyles();
  const { data, cursor, onMouseOver } = props;

  function emptyPlaceholder() {
    return (
      <Typography className={classes.empty} variant="h6" color="textSecondary">
        {"No user found"}
      </Typography>
    );
  }

  return (
    <Card className={classes.root}>
      {data.length > 0 ? (
        <List>
          {data.map((item, i) => {
            return (
              <SearchResultItem
                ref={ref}
                {...item}
                index={i}
                key={item.id}
                active={cursor === i}
                onMouseOver={onMouseOver}
              />
            );
          })}
        </List>
      ) : (
        emptyPlaceholder()
      )}
    </Card>
  );
});
