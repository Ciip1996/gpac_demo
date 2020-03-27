// @flow
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Skeleton } from '@material-ui/lab';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SearchBar, ClientCard } from '../../common';
import { AccentButton } from '../../common/atoms';
import { styles } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from "../../../database";

const Market = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});
  const [open, setOpen] = useState(false);
  const [responseStatus, setResponseStatus] = useState({
    message: '',
    succesful: false
  });

  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [newTalent, setNewTalent] = useState({});

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleChangeTextInput = event => {
    const { target } = event;
    const { name } = target;
    setNewTalent({
      ...newTalent,
      [name]: target.value
    });
  };

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
    axios
      .get(db)
      .then(response => {
        // handle success
        setClients(response.data);
        setResponseStatus({ message: 'The talent was succesfullt added!', succesful: true });
      })
      .catch(e => {
        // handle error
        console.log(e);
        setError({ message: e, status: true });
        setResponseStatus({
          message: 'An error ocurred while adding new Talent!',
          succesful: false
        });
      })
      .then(() => {
        // always executed
        setIsLoading(false);
      });
  }, [responseStatus]);

  const handleAddTalent = () => {
    console.log('newTalent', newTalent);
    const url = db;
    axios
      .post(url, null, { params: newTalent })
      .catch(e => {
        console.log(e);
        setSnackBarOpen(true);
      })
      .then(() => {
        console.log('clients posted', clients);
        setIsLoading(false);
      });
    handleClose();
    setSnackBarOpen(true);
  };
  return (
    <div className="w-100 h-100" style={styles.marketWrapper}>
      <div className="w-100" style={styles.searchBarWrapper}>
        <SearchBar />
      </div>
      <div style={styles.contentWrapper}>
        <div style={styles.circle} />
        <div style={styles.headerWrapper}>
          <p style={styles.label}>Market</p>
          <AccentButton width={175} text="Add new talent" onClick={handleClickOpen} />
        </div>
        <div className="overflow-auto container-fluid " style={styles.listWrapper}>
          {isLoading
            ? [0, 1, 2, 3, 4, 5, 6].map(i => {
                return (
                  <Grid item key={i}>
                    <Skeleton style={styles.skeletonCard} />
                    <Skeleton style={styles.skeletonCard} animation={false} />
                    <Skeleton style={styles.skeletonCard} animation="wave" />
                  </Grid>
                );
              })
            : null}
          {error.status ? (
            <div style={styles.newNotFound}>
              <div style={styles.newNotFoundCont}>
                <SentimentDissatisfiedIcon color="error" fontSize="inherit" />
                <h2>There is something wrong. We are currently working on it.</h2>
                <h2>Please come back later!</h2>
              </div>
            </div>
          ) : null}
          {!error.status
            ? clients.map(client => (
                <ClientCard
                  className="d-lg-none d-xl-block"
                  key={client.id}
                  name={client.name}
                  title={client.title}
                  insustry={client.industry}
                  jobPosition={client.job_position}
                  phone={client.phone}
                  salary={client.salary}
                  location={client.location}
                  image={client.images}
                />
              ))
            : null}
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
          />
          <TextField
            autoFocus
            name="title"
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            onChange={handleChangeTextInput}
          />
          <TextField
            autoFocus
            name="industry"
            margin="dense"
            id="industry"
            label="Industry"
            type="text"
            fullWidth
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
            onChange={handleChangeTextInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddTalent} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        {!responseStatus.succesful ? (
          <Alert onClose={handleCloseSnackbar} severity="error">
            {responseStatus.message}
          </Alert>
        ) : (
          <Alert onClose={handleCloseSnackbar} severity="success">
            {responseStatus.message}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};
export default Market;
