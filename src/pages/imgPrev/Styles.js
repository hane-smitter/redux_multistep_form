import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imageField: {
        width: '270px',
        padding: '5px 10px',
        marginTop: '10px',
        display: 'block',
        position: 'relative'
    },
    para: {
        fontFamily: 'sans-serif',
        marginBottom: '10px',
        fontSize: '13px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '270px'
    },
    delImg: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 0,
        width: '35px',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default useStyles;