import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';


export default class Searchbar extends React.Component{
    constructor(props: any){
        super(props);
    }

    public render(){
        const SearchbarStyle = {
            color: 'black'
        };

        return(
            <Card style={{padding: '15px 0', margin: '0 0 10px 0'}}>
                <div style={{textAlign: "center", backgroundColor:"white"}}>
                    <div style={SearchbarStyle}>
                        <TextField
                            id="outlined-full-width"
                            label="City"
                            style={{ margin: 8, width: '80%'} }
                            placeholder="Placeholder"
                            fullWidth={true}
                            margin="normal"
                            variant="outlined"
                        />
                        <Button style={{height: '50px', display: 'inline-block', margin: 8}}>click me</Button>
                    </div>
                </div>
            </Card>
        )
    };

}