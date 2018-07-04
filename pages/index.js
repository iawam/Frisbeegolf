import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import LogInReg from '../layouts/main.js'
import Home from '../components/Home'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

const App = ({ classes }) => (
  <div className={classes.root}>
    <LogInReg>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={12} sm={4}>
          <Home />
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </LogInReg>
  </div>
)

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
