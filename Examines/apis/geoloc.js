document.getElementById('getLocation').addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude
        const userLon = position.coords.longitude
  
        const output = document.getElementById('output')
        output.innerHTML = `<h2>Your Location: (${userLat.toFixed(4)}, ${userLon.toFixed(4)})</h2>`
      }, (error) => {
        alert('Error getting location: ' + error.message)
      })
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  })
//Strip
function geoget(){
    navigator.geolocation.getCurrentPosition(position => {
        console.log("lat"+position.coords.latitude)
        console.log("lon"+position.coords.longitude)
    })
}
