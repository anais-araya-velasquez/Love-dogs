import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
// ICONS Material UI
import PetsIcon from '@material-ui/icons/Pets';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import SchoolIcon from '@material-ui/icons/School';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// CSS
import Header from './header.css';
//Imagenes
import logoDog from './perro-header2.PNG'
import logoLarge from './dog-love-large.png';
import bulldog from './bulldog.png';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <div class="header-toolbar"><img class="header-logo-large" src={logoLarge}/></div>
            <a class="header-menu-a" href="#cuidados">Cuidados</a>
            <a class="header-menu-a" href="#filtro">Filtrar</a>
          </Toolbar>  
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container class="MuiContainer-maxWidthXl">
        <div class="header-fondo">
        <center>
          <h1 class="header-titulo">Fuerte y sano</h1>
          <p class="header-subtitulo">Lorem Ipsum is simply dummy text ofhe industry's standard dummynter took a galley of he leap into electronic typ</p>
        </center>
        <center><img class="header-img" src={logoDog}/></center>
        </div>
      </Container>
      <Container id="cuidados" class="seccion-info">
        <div >
          <center><h1 class="info-h1">Cuidados</h1></center>
          <center><div class="info-line"></div><PetsIcon class="icon-gris"/><div class="info-line"></div></center>
          <center class="info-text">

            <Grid  container>
              <Grid item xs={12} sm={6} md={4}>
                <div class="cuidados uno">
                  <LocalHospitalIcon/>
                  <h1>Visitas al veterinario</h1>
                  <p>Lorem Ipsum is simply dummy text ofhe industry's standard dummynter took a galley of he leap into electronic typ</p>
                </div>

                <div class="cuidados uno">
                  <EmojiFoodBeverageIcon/>
                  <h1>Alimentarlos</h1>
                  <p>Lorem Ipsum is simply dummy text ofhe industry's standard dummynter took a galley of he leap into electronic typ</p>
                </div>
              </Grid>
              <Hidden smDown>
                <Grid item xs={4}>
                  <Avatar class="" alt="Remy Sharp" src={bulldog} />
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={6} md={4}>
              <div class="cuidados uno">
                  <NaturePeopleIcon />
                  <h1>Hacer ejercicio</h1>
                  <p>Lorem Ipsum is simply dummy text ofhe industry's standard dummynter took a galley of he leap into electronic typ</p>
                </div>

                <div class="cuidados uno">
                  <SchoolIcon/>
                  <h1>Educar a tu perro</h1>
                  <p>Lorem Ipsum is simply dummy text ofhe industry's standard dummynter took a galley of he leap into electronic typ</p>
                </div>
              </Grid>
              
            </Grid>
          </center>
        </div>
      </Container>
    </React.Fragment>
  );
}
