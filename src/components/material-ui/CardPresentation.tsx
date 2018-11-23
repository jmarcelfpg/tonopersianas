import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import YouTube from 'react-youtube';

const styles: StyleRules = {
    card: {
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        maxWidth: 1100,
        minWidth: 275,
    },
    content: {
        minWidth: 275
    },
    pos: {
        marginBottom: 12,
    },
    title: {
        fontSize: 14,
    },
    youtube: {
        flex: 1,
    },
    youtubeContainer: {
        display: "flex",
        flex: 1,
        maxWidth: 600,
        minHeight: 300,
        minWidth: 275,
    },
    youtubeWrapper: {
        display: "flex",
        flex: 1,
        maxWidth: 600,
        minHeight: 300,
        minWidth: 275,
    }
};

interface ICardPresentationProps {
    classes: {
        card: string,
        pos: string,
        title: string,
        content: string,
        youtube: string,
        youtubeContainer: string,
        youtubeWrapper: string,
    };
}

function CardPresentation(props: ICardPresentationProps) {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <div className={classes.youtubeWrapper}>
            <YouTube containerClassName={classes.youtubeContainer} className={classes.youtube} videoId="" opts={{ height: "", width: "", playerVars: { autoplay: 1, loop: 1, playlist: "b8VKmzcxAvw" } }} />
            </div>
            <CardContent className={classes.content}>
                <Typography className={classes.title} color="textSecondary" gutterBottom={true} >
                    Conocenos
        </Typography>
                <Typography variant="h5" component="h2">
                    Armamos e instalamos persianas.
        </Typography>
                <br />
                <Typography className={classes.pos} color="textSecondary">
                    Elegancia
        </Typography>
                <Typography component="p">
                    Confort en tu casa.
                </Typography>
                <br />
                <CardActions>
                    <Button size="small">Leer Mas</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(CardPresentation);
