import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import GolfCourse from '@material-ui/icons/GolfCourse'

const Menstad = ({ text }) => <div>{<GolfCourse />}{text}</div>

const SkienFritidspark = ({ text }) => <div>{<GolfCourse />}{text}</div>

const Bakkane = ({ text }) => <div>{<GolfCourse />}{text}</div>

class SimpleMap extends Component {
  render () {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '85vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyC3Obq9UWS47-Y6U_8rhvh3bNwhtfGrcHI'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Menstad
            lat={59.172417}
            lng={9.645975}
            text={'Menstad'}
          />
          <SkienFritidspark
            lat={59.186465}
            lng={9.596446}
            text={'Skien Fritidspark'}
          />
          <Bakkane
            lat={59.191694}
            lng={9.579342}
            text={'Bakkane'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

SimpleMap.defaultProps = {
  center: {
    lat: 59.18,
    lng: 9.59
  },
  zoom: 11
}

export default SimpleMap
