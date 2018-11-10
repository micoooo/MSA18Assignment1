import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';

interface IState{
    city: any
}


export default class Searchbar extends React.Component<any, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            city: "Auckland"
        }
    }

    public handleChangeText = (event: any) => {
        this.setState({
            city: event.target.value
        });
    }

    public HandleClick = () => {
        this.props.onSearch(this.state.city);
    }

    public render(){
        const SearchbarStyle = {
            color: 'black'
        };

        const city = this.state.city;

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
                            value={this.state.city}
                            onChange={this.handleChangeText}
                        />
                        <Button style={{height: '50px', display: 'inline-block', margin: 8}} onClick={this.HandleClick}>click me</Button>
                    </div>
                </div>
            </Card>
        )
    };

}