import { Divider, Paper, Grid, Select, FormControl, MenuItem, InputLabel, TextField, Button} from '@material-ui/core'
import React, { PureComponent } from 'react'
import { Add, Clear } from '@material-ui/icons';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import logo from "../logo.svg"
import { DatePicker } from '@mui/lab';
import { IconButton } from '@mui/material';

class Invoice extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: "",
            dDate: "",
            items: [],
            types: ["App Design", "App Develop", "App prod"],
            invoice: "",
        }
    }

    render() {
        return (
            <Paper elevation={8} style={{padding: "40px"}}>
                <Grid container>
                    <Grid item sm={6}>
                        <div style={{display: 'flex', justifyContent: "flex-start", alignItems: "center"}}>
                            <img src={logo} style={{height: "60px", width: "60px"}}/>
                             <h2 style={{color: "#7ec8e3"}}>Vuexy</h2>
                        </div>
                        <div style={{height: "10px"}}></div>
                        <div style={{display: 'flex', justifyContent: "flex-start"}}>Office 149, 450 South Brand Brooklyn</div>
                        <div style={{height: "10px"}}></div>
                        <div style={{display: 'flex', justifyContent: "flex-start"}}>San Diego County, CA 91905, USA</div>
                        <div style={{height: "10px"}}></div>
                        <div style={{display: 'flex', justifyContent: "flex-start"}}>+1(123) 456 7891, +44(876) 543 2195</div>
                    </Grid>
                    <Grid item sm={6}>
                        <div style={{display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
                            <div><h4>Invoice</h4></div>
                            <div item>
                                <div style={{
                                    backgroundColor: "rgb(187, 187, 187)",
                                    width: "250px",
                                }}>
                                    <TextField
                                        fullWidth 
                                        variant="outlined" 
                                        placeholder="# 5007"
                                        onChange={(event) => {
                                            this.setState({
                                                invoice: event.target.value
                                            });
                                        }}/>
                                </div>
                            </div>
                        </div>
                        <div style={{height: "20px"}}></div>
                        <div style={{display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
                            <div>Date: </div>
                            <div style={{width: "250px"}}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={this.state.date}
                                        onChange={(newValue) => {
                                            this.setState({
                                                date: newValue
                                            });
                                        }}
                                        renderInput = {(params) =>  <TextField fullWidth variant="outlined" {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div style={{height: "20px"}}></div>
                        <div style={{display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
                            <div>Due Date: </div>
                            <div style={{width: "250px"}}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={this.state.dDate}
                                        onChange={(newValue) => {
                                            this.setState({
                                                dDate: newValue
                                            });
                                        }}
                                        renderInput = {(params) =>  <TextField fullWidth variant="outlined" {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <div style={{height: "50px"}}></div>

                <Divider/>

                <div style={{height: "50px"}}></div>

                <div>
                    <div style={{display: "flex", justifyContent: "flex-start"}}>
                        Invoice to:
                    </div>
                    <div style={{height: "20px"}}></div>
                    <div>
                        <FormControl fullWidth>
                            <Select
                                className=""
                                variant="outlined"
                                disableUnderline
                                labelId='label'
                                id="select"
                                value= {1}
                                onChange={()=>{}}>
                                <MenuItem value={1}>Value 1</MenuItem>
                                <MenuItem value={2}>Value 2</MenuItem>
                                <MenuItem value={3}>Value 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{height: "20px"}}></div>
                    <div style={{paddingLeft: "20px"}}>
                        <div style={{display: "flex", justifyContent: "flex-start"}}>Payment Details:</div>
                        <div style={{height: "20px"}}></div>
                        <Grid container>
                            <Grid item xs={3} style={{justifyContent: "flex-start"}}>
                                <div style={{display: "flex", justifyItems: "flex-start"}}>Total Due:</div>
                            </Grid>
                            <Grid item>$12,110.55</Grid>
                        </Grid>
                        <div style={{height: "10px"}}></div>
                        <Grid container>
                            <Grid item xs={3} style={{justifyContent: "flex-start"}}>
                                <div style={{display: "flex", justifyItems: "flex-start"}}>Bank Name:</div>
                            </Grid>
                            <Grid item>American Bank</Grid>
                        </Grid>
                        <div style={{height: "10px"}}></div>
                        <Grid container>
                            <Grid item xs={3} style={{justifyContent: "flex-start"}}>
                                <div style={{display: "flex", justifyItems: "flex-start"}}>Country: </div>
                            </Grid>
                            <Grid item>United States</Grid>
                        </Grid>
                        <div style={{height: "10px"}}></div>
                        <Grid container>
                            <Grid item xs={3} style={{justifyContent: "flex-start"}}>
                                <div style={{display: "flex", justifyItems: "flex-start"}}>IBAN: </div>
                            </Grid>
                            <Grid item>ETD95476213874685</Grid>
                        </Grid>
                        <div style={{height: "10px"}}></div>
                        <Grid container>
                            <Grid item xs={3} style={{justifyContent: "flex-start"}}>
                                <div style={{display: "flex", justifyItems: "flex-start"}}>SWIFT code: </div>
                            </Grid>
                            <Grid item>BR91905 </Grid>
                        </Grid>
                    </div>
                </div>

                <div style={{height: "20px"}}></div>

                <div style={{
                    backgroundColor: "#efefef",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "30px",
                    paddingBottom: "30px"
                }}>

                    {
                        this.state.items.length !==0 && 
                        <>
                            {
                                this.state.items.map((item, index) => {
                                    return(
                                        <>
                                            <div>
                                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                                    <div>Item</div>
                                                    <div>
                                                        <IconButton onClick={() => {
                                                            let tempon = this.state.items;
                                                            tempon.splice(index, 1);
                                                            this.setState({
                                                                items: tempon
                                                            })
                                                        }}>
                                                            <Clear />
                                                        </IconButton>
                                                    </div>
                                                </div>
                                                <div style={{height: "10px"}}></div>
                                                <FormControl fullWidth>
                                                    <Select
                                                        className=""
                                                        variant="outlined"
                                                        disableUnderline
                                                        labelId='label'
                                                        id="select"
                                                        value= {this.state.types.indexOf(this.state.items[index].type)}
                                                        onChange={(event)=>{
                                                            let tempon = this.state.items;
                                                            tempon[index].type = this.state.types[event.target.value];
                                                            this.setState({
                                                                items: tempon
                                                            })
                                                        }}>
                                                            {
                                                                this.state.types.map((type, i) => {
                                                                    return(
                                                                        <MenuItem value={i}>{type}</MenuItem>
                                                                    );
                                                                })
                                                            }
                                                    </Select>
                                                </FormControl>
                                                <div style={{height: "20px"}}></div>
                                                <TextField
                                                fullWidth 
                                                variant="outlined" 
                                                placeholder="Customization & Bug Fixes"
                                                onChange={(event) => {
                                                    let tempon = this.state.items;
                                                    tempon[index].custom = event.target.value;
                                                    this.setState({
                                                        items: tempon
                                                    });
                                                }}/>
                                            </div>
                                            <div style={{height: "20px"}}></div>
                                            <div>
                                                <div style={{display: "flex", justifyContent: "flex-start"}}>Cost</div>
                                                <div style={{height: "10px"}}></div>
                                                <TextField
                                                fullWidth 
                                                variant="outlined" 
                                                type="number"
                                                placeholder={24}
                                                onChange={(event) => {
                                                    let tempon = this.state.items;
                                                    tempon[index].cost = event.target.value;
                                                    this.setState({
                                                        items: tempon
                                                    });
                                                }}/>
                                            </div>
                                            <div style={{height: "20px"}}></div>
                                            <div style={{display: "flex", justifyContent: "flex-start"}}>Discount: 0% 0% 0%</div>
                                            <div style={{height: "20px"}}></div>
                                            <div>
                                                <div style={{display: "flex", justifyContent: "flex-start"}}>Qty</div>
                                                <div style={{height: "10px"}}></div>
                                                <TextField
                                                fullWidth 
                                                variant="outlined" 
                                                type="number"
                                                placeholder={1}
                                                onChange={(event) => {
                                                    let tempon = this.state.items;
                                                    tempon[index].qty = event.target.value;
                                                    this.setState({
                                                        items: tempon
                                                    });
                                                }}/>
                                            </div>
                                            <div style={{height: "20px"}}></div>
                                            <div style={{display: "flex", justifyContent: "flex-start"}}>Price</div>
                                            <div style={{height: "10px"}}></div>
                                            <div style={{display: "flex", justifyContent: "flex-start"}}>${this.state.items[index].cost * this.state.items[index].qty}</div>
                                            <div style={{height: "30px"}}></div>
                                        </>
                                    );
                                })
                            }
                        </>
                    }
                    
                    <div style={{height: "20px"}}></div>
                    <div style={{display: "flex", justifyContent: "flex-start"}}>
                        <Button color="primary" variant="contained" startIcon={<Add/>} onClick={()=> {
                            let tempon = this.state.items;
                            tempon.push({
                                type: this.state.types[0],
                                custom: "",
                                cost: 0,
                                qty: 1,
                                price: 24.00
                            });
                            this.setState({
                                items: tempon
                            })
                        }}>Add item</Button>
                    </div>
                </div>
                
                <div style={{height: "20px"}}></div>
                
                <div>
                    <Grid container>
                        <Grid item sm={7}>
                            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", marginRight: "10px"}}>
                                <div style={{marginRight: "10px"}}>Salesperson: </div>
                                <TextField
                                    fullWidth 
                                    variant="outlined" 
                                    placeholder="EDWARD "/>
                            </div>
                        </Grid>
                        <Grid item sm={2}></Grid>
                        <Grid item sm={3}>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>Subtotal: </div>
                                <div>$1800 </div>
                            </div>
                            <div style={{height: "10px"}}></div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>Discount:  </div>
                                <div>$28 </div>
                            </div>
                            <div style={{height: "10px"}}></div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>Tax:  </div>
                                <div>21% </div>
                            </div>
                            <div style={{height: "10px"}}></div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>Total:  </div>
                                <div>$1690 </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div style={{height: "20px"}}></div>
                
                <Divider/>

                <div style={{height: "20px"}}></div>

                <div>
                    <div style={{display: "flex", justifyContent: "flex-start"}}>Note: </div>
                    <div style={{height: "10px"}}></div>
                    <TextField
                        fullWidth 
                        multiline
                        minRows={3}
                        variant="outlined" 
                        placeholder="It was a pleasure working with you and your team. we hope you will keep
                        us in mind for future freelance projects. Thank you!"/>
                </div>
            </Paper>
        )
    }
}

export default Invoice