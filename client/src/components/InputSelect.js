import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const InputSelect = (props) => {
    return (
        <>
            <Grid item xs={12} sm={props.sm}>
                <FormControl fullWidth>
                    <InputLabel id={props.id}>Tipo</InputLabel>
                    <Select
                        labelId={props.labelId}
                        id="tipo"
                    >
                        <MenuItem value={1}>Administrador</MenuItem>
                        <MenuItem value={2}>Funcionário</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </>
    )
}

export default InputSelect
