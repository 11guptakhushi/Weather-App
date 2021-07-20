const cityName = document.getElementById("cityName");

const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide=document.querySelector(".middle_layer");

const submitBtn = document.getElementById("submitBtn");
const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == ""){
        city_name.innerText = "Please enter city name before clicking on Search";
        datahide.classList.add("data_hide");
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d27e49c703a15f7cb138f75c0cdd8072`;
            const response = await fetch(url); 
            //console.log(response)  ;
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            //temp_status.innerText = arrData[0].weather[0].main;

            const tempStatus = arrData[0].weather[0].main; 
            if(tempStatus == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
            }
            else if(tempStatus == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
            }
            else if(tempStatus == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be'></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
            }
            datahide.classList.remove("data_hide");

        }
        catch(e){
            cityName.innerText = "Please enter city name properly";
            datahide.classList.add("data_hide");
        }
    }
}
submitBtn.addEventListener('click', getInfo);