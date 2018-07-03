import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function NewGame () {
  return (
    <div>
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
    </div>
  )
}
