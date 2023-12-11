import React, {Component} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: ''
        }
    }

    handleChange = (event) => {
       this.setState((prevState) => ({
           country: `${event.target.value}`
       }))
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
                    <Select sx={{ width: 200 }}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={this.state.country}
                        onChange={this.handleChange}
                        autoWidth
                        label="country"
                    >
                        <MenuItem value="">
                            <em>Select country</em>
                        </MenuItem>
                        <MenuItem value={'usa'}>USA</MenuItem>
                        <MenuItem value={'ua'}>Ukraine</MenuItem>
                        <MenuItem value={'esp'}>Spain</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default DropDown;