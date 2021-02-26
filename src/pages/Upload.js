import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, Box, Tooltip } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import useStyles from "./Styles";

const FileInput = ({ file }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  //the hidden input element
  const hiddenInp = useRef(null);

  //when custom button is clicked
  const onButtonClicked = () => {
    hiddenInp.current.click();
  };

  return (
    <>
      <Tooltip title={file?.name ? file.name : "No file chosen"} placement="top-start">
        <Box
          component="span"
          onClick={onButtonClicked}
          className={classes.imgUploadBox}
        >
          <Button
            variant="contained"
            color="primary"
            className={`${classes.button} ${classes.btnUpload}`}
            startIcon={<Icon>file_upload</Icon>}
          >
            choose image
          </Button>
          <p className={classes.chooseImgPara}>{file?.name ? file.name : ""}</p>
        </Box>
      </Tooltip>

      <input
        id="file"
        accept="image/*"
        name="file"
        encType="multipart/form-data"
        type="file"
        style={{ display: "none" }}
        ref={hiddenInp}
        onChange={(event) => {
          if (!event.currentTarget.files.length) return;

          let imgInfo = event.currentTarget.files[0];

          const reader = new FileReader();
          reader.readAsDataURL(imgInfo);
          reader.onloadstart = () => {
            dispatch({
              type: "SET_FILE",
              payload: {
                loaded: false,
                tooltip: "loading",
                bin: "",
              },
            });
          };

          reader.onload = () => {
            setTimeout(() => {
              dispatch({
                type: "SET_FILE",
                payload: {
                  name: imgInfo.name,
                  bin: reader.result,
                  loaded: true,
                },
              });
            }, 600);
          };
        }}
      />
    </>
  );
};

/* <FileBase
    type="file"
    accept="image/*"
    multiple={false}
    onDone={({name, base64}) => {
        dispatch({type: 'SET_FILE', payload: {
          name,
          bin: base64,
          loaded: true
        }} )
    }}
    /> */

export default FileInput;
