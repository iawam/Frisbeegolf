import { Component } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import GolfCourse from '@material-ui/icons/GolfCourse'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Menu from './Menu'

const styles = {
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%'
  }
}

class SimpleBottomNavigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'newgame'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, value) {
    this.setState({ value })
  }

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction onClick={() => Router.push('/newgame')} label='New game' icon={<PlayArrow />} />
        <BottomNavigationAction onClick={() => Router.push('/courses')} label='Courses' icon={<GolfCourse />} />
        <BottomNavigationAction onClick={() => Router.push('/recent')} label='Recent' icon={<RestoreIcon />} />
        <BottomNavigationAction label='More ' value='more' icon={<Menu />} />
      </BottomNavigation>
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleBottomNavigation)
