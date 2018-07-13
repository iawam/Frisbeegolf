import React from 'react'
import SelectCourse from '../layouts/main.js'
import Grid from '@material-ui/core/Grid'
import TestMap from '../components/map'

export default function Courses () {
  return (
    <SelectCourse>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={12} sm={4}>
          <TestMap />
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </SelectCourse>
  )
}
