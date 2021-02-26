import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    formBox: {
        padding: '20px'
    },
    button: {
        margin: theme.spacing(1),
    },
    imgUploadBox: {
        minHeight: '20px'
    },
    btnUpload: {
        marginLeft: '0!important',
        fontSize: 'small'
    },
    chooseImgPara: {
        fontSize: '13px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '15px',
        display: 'inline-block',
        maxWidth: '110px'
    }
}));