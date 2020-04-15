console.log("Java Script page Loaded")

const weather = document.querySelector('form')
const serach = document.querySelector('input')

const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
const msg3 = document.querySelector('#msg3')
const msg4 = document.querySelector('#msg4')
const msg5 = document.querySelector('#msg5')
const msg6 = document.querySelector('#msg6')

document.getElementById('location').style.display ="none"
document.getElementById('temp').style.display ="none"
document.getElementById('humid').style.display ="none"
document.getElementById('wind').style.display ="none"
document.getElementById('rain').style.display ="none"  
document.getElementById('summury').style.display ="none"

weather.addEventListener('submit',(e) => {

    e.preventDefault()
    const location = serach.value
      

    msg1.textContent = 'Loading...'
    msg2.textContent = ''
    msg3.textContent = ''
    msg6.textContent = ''
    msg4.textContent = ''
    msg5.textContent = ''

    fetch('/weather?address='+location).then((response) =>{
        response.json().then((data) => {

            if(data.error){
                msg1.textContent = data.error
            } else{
                document.getElementById('location').style.display ="block"
                msg1.textContent = data.location
                document.getElementById('temp').style.display ="block" 
                msg2.textContent = data.forecast_temp + " " + String.fromCharCode(176) +'C'
                document.getElementById('humid').style.display ="block"
                msg3.textContent = data.forecast_humid + '%'
                document.getElementById('wind').style.display ="block"
                msg6.textContent = data.forecast_wind +'km/h'
                document.getElementById('rain').style.display ="block"
                msg4.textContent = data.forecast_rain + '%'
                document.getElementById('summury').style.display ="block"
                msg5.textContent = data.forecast_summary
               
            }
        })
    })
})