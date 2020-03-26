// @flow
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import axios from 'axios';
import { AccentButton } from '../../common/atoms';
import { SearchBar, ClientCard } from '../../common';
import { Skeleton } from '@material-ui/lab';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import {  Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Market = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});
  const [open, setOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [newTalent, setNewTalent] = useState({
    name: 'test',
    phone: 'test'
  });

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const handleChangeTextInput = (event) => {
    const target = event.target;
    const name = target.name;
    setNewTalent({
      ...newTalent,
      [name]: target.value
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSnackbar = () => {
    setSnackBarOpen(false);
  };

  useEffect(() => {
    axios.get('http://192.168.0.7:80/clients')
    .then(function (response) {
      // handle success
      console.log(response);
      setClients(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setError({message: error, status: true});
    })
    .then(function () {
      // always executed
      console.log('CLIENTS',clients);
      setIsLoading(false);
    });
  },[]);

  const handleAddTalent = () => {
    const url = "http://192.168.0.7:80/clients";
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: JSON.stringify({}),
      url,
    };
    axios(options).catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log('clients posted',clients);
      setIsLoading(false);
    });
    handleClose();
    setSnackBarOpen(true);
  };
  return (
    <div style={styles.marketWrapper}>
      <div style={styles.searchBarWrapper}>
        <SearchBar />
      </div>
      <div style={styles.contentWrapper}>
        <div style={styles.circle} />
        <div style={styles.headerWrapper}>
          <p style={styles.label}>Market</p>
          <AccentButton width={175} text="Add new talent" onClick={handleClickOpen}/>
        </div>
        <div style={styles.listWrapper}>
          {isLoading ? [0, 1, 2, 3, 4, 5, 6].map(i => {
                  return (
                    <Grid item key={i}>
                      <Skeleton style={styles.skeletonCard}/>
                      <Skeleton style={styles.skeletonCard} animation={false} />
                      <Skeleton style={styles.skeletonCard} animation="wave" />
                    </Grid>
                  );
                })
              : null}
            {error.status ? (
              <div style={styles.newNotFound}>
                <div style={styles.newNotFoundCont}>
                  <SentimentDissatisfiedIcon color='error' fontSize='inherit' />
                  <h2>
                    There is something wrong. We are currently working on it.
                  </h2>
                  <h2>Please come back later!</h2>
                </div>
              </div>
            ) : null}
          {clients.map((client) => (
            <ClientCard
              key={client.id}
              name={client.name}
              title={client.title}
              insustry={client.industry}
              jobPosition={client.job_position}
              phone={client.phone}
              salary={client.salary}
              location={client.location}
              image={client.images}
            />))}
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a new Talent</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill all the fields in order to add a new talent.
          </DialogContentText>
          <TextField
            autoFocus
            name="name"
            margin="dense"
            onChange={handleChangeTextInput}
            label="Name"
            type="text"
            fullWidth
            value='test'

            value='test'
          />
           <TextField
            autoFocus
            name="title"
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value='test'

            onChange={handleChangeTextInput}
          />
           <TextField
            autoFocus
            name="job_position"
            margin="dense"
            id="job_position"
            label="Job Position"
            type="text"
            fullWidth
            value='test'

            onChange={handleChangeTextInput}
          />
           <TextField
            autoFocus
            name="phone"
            margin="dense"
            id="phone"
            label="Phone"
            type="number"
            fullWidth
            value='123'
            onChange={handleChangeTextInput}
          />
          <TextField
            autoFocus
            name="salary"
            margin="dense"
            id="salary"
            label="Salary"
            type="number"
            fullWidth
            value='123'
            onChange={handleChangeTextInput}
          />
           <TextField
            autoFocus
            name="location"
            margin="dense"
            id="location"
            label="location"
            type="text"
            fullWidth
            value='test'
            onChange={handleChangeTextInput}
          />
           <TextField
            autoFocus
            name="email"
            margin="dense"
            id="email"
            label="E-mail"
            type="email"
            fullWidth
            value='test'
            onChange={handleChangeTextInput}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddTalent}
            color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        {/* <Alert severity="error">An error ocurred while adding new Talent!</Alert> */}
        <Alert onClose={handleCloseSnackbar} severity="success">
            The talent was succesfullt added!
        </Alert>
      </Snackbar>
    </div>
  );
}
export default Market;
