import {
  Paper,
  Tooltip,
  Box,
  Typography,
  CircularProgress,
} from "@material-ui/core";

import useStyles from "./Styles";

const Thumb = ({ file }) => {
  const classes = useStyles();

  if (!file) return null;

  return (
    <Paper variant="outlined" className={classes.imageField}>
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
