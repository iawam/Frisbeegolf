import React from 'react'
import RecentCourse from '../layouts/main.js'
import { Grid } from '@material-ui/core'

export default function Courses () {
  return (
    <RecentCourse>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={12} sm={4}>
        Recent games
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </RecentCourse>
  )
}
