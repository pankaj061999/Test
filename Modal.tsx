import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';
import { ResponsiveImage } from '../skins';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MSelectItem } from '../skins';

const factoryData = [
  {
    value: 1,
    label: "Amaya Creations",
  },
  {
    value: 2,
    label: "Abc Creations",
  },
  {
    value: 3,
    label: "Xyz Creations",
  },
];

const assignDesignData = [
  {
    value: 1,
    label: "Design name 1",
    subLabel: "DM-08",
    img: "https://i.pinimg.com/originals/b1/f8/a6/b1f8a6a397e239cbd072f331164a7f30.jpg",
  },
  {
    value: 2,
    label: "Design name 2",
    subLabel: "DM-09",
    img: "https://fashionclothesforwomenblog.files.wordpress.com/2017/03/763224647163fce7342b19a23090d762.jpg",
  },
  {
    value: 3,
    label: "Design name 3",
    subLabel: "GQ-24",
    img: "https://cdn.shopify.com/s/files/1/0182/1471/5470/products/swagat-6403_large.jpg?v=1582638331",
  },
];


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '0.5rem',
    },
  }),
);

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
      maxWidth: '575px',
    },
  }),
);

export default function TransitionsModal(props: any) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const { open, handleClose } = props;
  const [factory, updateFactory] = React.useState('');
  const [designAssignee, updateDesignAssignee] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    updateFactory(event.target.value as string);
  };
  const handleChangeDesign = (event: React.ChangeEvent<{ value: unknown }>) => {
    updateDesignAssignee(event.target.value as string);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Material details</h2>
            <div id="transition-modal-description">
              <Grid container spacing={2}>
                <Grid xs={3}>
                  <ResponsiveImage src="https://fashionclothesforwomenblog.files.wordpress.com/2017/03/763224647163fce7342b19a23090d762.jpg" alt="dummy image" />
                </Grid>
                <Grid xs={9}>
                  <h4>Assign to factory</h4>
                  <FormControl className={classes2.formControl}>
                    <InputLabel id="demo-simple-select-label">Factory</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={factory}
                      onChange={handleChange}
                    >
                      {factoryData.map(ele => <MenuItem value={ele.value}>{ele.label}</MenuItem>)}
                    </Select>
                  </FormControl>
                  {factory && (
                    <FormControl className={classes2.formControl}>
                      <InputLabel id="demo-simple-select-label-2">Assign for design</InputLabel>
                      <Select
                        labelId="demo-simple-select-label-2"
                        id="demo-simple-select-2"
                        value={designAssignee}
                        onChange={handleChangeDesign}
                      >
                        {assignDesignData.map(ele =>
                          <MenuItem value={ele.value}>
                            <MSelectItem>
                              <div className="image-con">
                                <img src={ele.img} alt={ele.label} />
                              </div>
                              <div>
                                <div className="heading">{ele.label}</div>
                                <div className="sub-label">{ele.subLabel}</div>
                              </div>
                            </MSelectItem>
                          </MenuItem>
                        )}
                      </Select>
                    </FormControl>
                  )}
                </Grid>
              </Grid>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}