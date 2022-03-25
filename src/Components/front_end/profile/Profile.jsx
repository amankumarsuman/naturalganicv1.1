import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />  */}
        {/* {/* {JSON.stringify(user, null, 2)} */}
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img src={user.picture} alt={user.name} />
            </Grid>
            <Grid item xs={12}>
              <TextField value={user.email} />
            </Grid>
          </Grid>
        </form>
      </div>
    )
  );
};

export default Profile;
