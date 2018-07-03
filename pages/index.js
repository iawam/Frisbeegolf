import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import LogInReg from '../layouts/main.js'
import NewGame from '../components/Newgame'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    width: '100%',
    textAlign: 'center'
  }
})

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <LogInReg>
          <Grid container spacing={24}>
            <Grid item xs={4} />
            <Grid item xs={12} sm={4}>
              <NewGame />
            </Grid>
            <Grid item xs={4} />
          </Grid>
        </LogInReg>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
