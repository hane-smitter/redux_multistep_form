import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

const FileInput = () => {
  const dispatch = useDispatch();

  return (
    <input
      id="file"
      accept="image/*"
      name="file"
      encType="multipart/form-data"
      type="file"
      onChange={(event) => {
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
          dispatch({
            type: "SET_FILE",
            payload: {
              name: imgInfo.name,
              bin: reader.result,
              loaded: true,
            },
          });
        };
      }}
    />
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
