import { Button, Card, CardContent, Grid } from '@mui/material';
import {Link} from "react-router-dom"
import React from 'react';

const SideBar = () => {
    return (
        <>
            {/* <h1>side bar</h1> */}
            <Grid container >
            <Grid item xs={12} >
                <Card>
                    <CardContent>
                      <Link style={{textDecoration: 'none'}}  to="/user" >
                      <Button  fullWidth  className="btn" >User</Button>
                      </Link>  

                    </CardContent>
                      
                </Card>
            </Grid>
            <Grid item xs={12} >
                <Card>
                    <CardContent>
                      <Link style={{textDecoration: 'none'}}  to="/login" >
                      <Button  fullWidth  className="btn" >Login</Button>
                      </Link>   

                    </CardContent>
                      
                </Card>
            </Grid>
            <Grid item xs={12} >
                <Card>
                    <CardContent>
                      <Link style={{textDecoration: 'none'}}  to="/registration" >
                      <Button  fullWidth  className="btn" >Registration</Button>
                      </Link>   

                      
                    </CardContent>
                </Card>
            </Grid>

            </Grid>
        </>
    );
};

export default SideBar;