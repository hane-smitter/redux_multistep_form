import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imageField: {
        width: '270px',
        padding: '5px 10px',
        marginTop: '10px',
        display: 'block'
    },
    para: {
        fontFamily: 'sans-serif',
        fontSize: '13px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '270px'
    }
});

export default useStyles;