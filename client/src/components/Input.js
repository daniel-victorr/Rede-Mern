import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';

const Input = (props) => {
    return(
        <>
            <Grid item xs={12} sm={props.sm}>
            <TextField
                required
                type={props.type}
                id={props.id}
                name={props.name}
                label={props.label}
                fullWidth
                autoComplete={props.autoComplete}
                variant="standard"
          
            />
            </Grid>
        </>
    )
}

export default Input

