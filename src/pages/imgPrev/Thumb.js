import {
  Paper,
  Tooltip,
  Box,
  Typography,
  CircularProgress,
  Button,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { useDispatch } from "react-redux";

import useStyles from "./Styles";

const Thumb = ({ file }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  if (!file) return null;

  return (
    <Paper variant="outlined" className={classes.imageField}>
      <Tooltip arrow title="Remove selected file">
        <Button
          className={classes.delImg}
          onClick={() => {
            dispatch({
              type: "DEL_FILE",
              payload: "",
            });
          }}
        >
          <Icon style={{ fontSize: "30px" }}>clear</Icon>
        </Button>
      </Tooltip>
      <Box>
        <Typography variant="h6" id="status">
          {!file?.loaded ? "loading..." : "current selected file:"}
        </Typography>
        <Tooltip arrow title={file?.tooltip ? file.tooltip : file.name}>
          <p className={classes.para}>{file.name}</p>
        </Tooltip>
        {file.bin ? (
          <img
            src={file.bin}
            alt={file.name}
            height={150}
            width={150}
            style={{ display: "block", borderRadius: "5px" }}
            id="preview"
          />
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Paper>
  );
};

export default Thumb;
