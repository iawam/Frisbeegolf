import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography} from '@material-ui/core/'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
}

function ButtonAppBar (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Head>
        <title> Discgolf </title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit' align='center' className={classes.flex}>
            <div onClick={() => Router.push('/')} label='index'>
            Discgolf
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
