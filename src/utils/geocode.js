const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json/?access_token=pk.eyJ1Ijoic2NhcmVjcm93bmxlc3MiLCJhIjoiY2tjYzRqaW0wMDE1ejJxbWx4MTU2b3VsayJ9.yklstfhJj19WIVFv4rVBvg'

  request({ url, json: true }, (error, { body }) => {
      if (error) {
          callback('Unable to connect to location services.', undefined)
      } else if (body.features.length === 0) {
          callback('Unable to find location. Try another search', undefined)
      } else {
          const feature = body.features[0]
          callback(undefined, {
              latitude: feature.center[1],
              longitude: feature.center[0],
              location: feature.place_name
          })
      }
  })
}

module.exports = geocode