import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import { StyleRulesCallback, withStyles } from '@material-ui/core/styles';
import React from 'react';

import "./Contact.css";

const styles: StyleRulesCallback = theme => ({
    paper: {
        color: theme.palette.text.secondary,
        padding: theme.spacing.unit * 2,
    },
    root: {
        flexGrow: 1,
    },
});

interface IContactProps {
    classes: {
        root: string,
        paper: string,
    }
}

function Contact(props: IContactProps) {
    const { classes } = props;

    return (
        <div className={`contact ${classes.root}`}>
            <Grid container={true} spacing={24}>
                <Grid item={true} lg={1} />
                <Grid item={true} lg={5} >
                    <h2>Contactanos</h2>
                    <br />

                    <p>
                        Al telefono: <span>xxxx-xxxx-xxxx</span>
                            </p>
                    <br />

                    <p>O mandanos un mail al correo: <span>tonopersianas@hotmail.com</span></p>
                    
                    <br />

                    <p>Tambien puedes visitarnos en las redes sociales</p>
                    <ul>
                        <li><a target="blank" href="https://www.facebook.com/tonopersianas/"><img src="/icons/social-media/facebook/drawable-hdpi/ic_facebook_box_black_36dp.png" alt="" />Facebook</a></li>
                        <li><a target="blank" href="https://www.youtube.com/channel/UC-AZfbJeJtBmMqg6EMoJNbg"><img src="/icons/social-media/youtube/drawable-hdpi/ic_youtube_black_36dp.png" alt="" />YouTube</a></li>
                        <li><a target="blank" href="https://www.instagram.com/explore/locations/671096006432615/tono-persianas"><img src="/icons/social-media/instagram/drawable-hdpi/ic_instagram_black_36dp.png" alt="" />Instagram</a></li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Contact);