import React from 'react'
import Game from '../layouts/main.js'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function NewGame () {
  return (
    <Game>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={12} sm={4}>
          <List component='nav'>
            <ListItem button>
              <ListItemText align='center' inset primary='Select course' />
            </ListItem>
            <ListItem button>
              <ListItemText align='center' inset primary='Invite friends' />
            </ListItem>
            <ListItem divider />
            <ListItem button>
              <ListItemText align='center' inset primary='Start' />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </Game>
  )
}
