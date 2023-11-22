<template>
    <div class="card-content">
        <div class="search">
            <input id="text-box" v-model="citySearch" type="text" placeholder="Name of the city" @keyup.enter="getWeatherData">
            <button id="search-btn" @click="getWeatherData">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>
        <div class="description" :class="hideDescription">
            <div class="city-container">
                <font-awesome-icon id="location-dot" class="top-content" icon="fa-solid fa-location-dot" />
                <p id="city-name" class="top-content">{{ city }}</p>
                <img :src="apiCountryURL" alt="Country Flag">
            </div>
            <p>{{ temp }} ºC</p>
            <div class="weather-conditions-container">
                <p id="weather-conditions">{{ desc }}</p>
                <img id="weather-icon" :src="weatherConditionsURL" alt="Weather Conditions">
            </div>
            <div class="card-footer">
                <font-awesome-icon icon="fa-solid fa-droplet" />
                <p class="footer-content">{{ humidity }}</p>
                <font-awesome-icon icon="fa-solid fa-wind" class="footer-spacing" />
                <p class="footer-content">{{ wind }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'weatherCard',
    data() {
        return {
            citySearch: '',
            city: '',
            apiKey: process.env.VUE_APP_APIKEY,
            temp: '',
            desc: '',
            humidity: '',
            wind: '',
            hideDescription: 'hide-description',
            apiCountryURL: 'https://flagsapi.com/BR/flat/64.png',
            weatherConditionsURL: 'https://openweathermap.org/img/wn/10d@2x.png'
        }
    },
    methods: {
        async getWeatherData() {
            const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&units=metric&appid=${this.apiKey}&lang=en_us`;

            try {
                const res = await fetch(apiWeatherURL);
                const data = await res.json();
                this.city = data.name;
                this.temp = parseInt(data.main.temp);
                this.desc = data.weather[0].description;
                this.humidity = `${data.main.humidity}%`;
                this.wind = `${data.wind.speed}km/h`;

                this.apiCountryURL = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
                this.weatherConditionsURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

                this.hideDescription = false;
                this.citySearch = '';
            } catch (error) {
                alert("City not found!");
                this.citySearch = '';
                this.hideDescription = 'hide-description';
                console.clear();
            }
        }
    }
}
</script>

<style scoped>
.card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.card-footer {
    display: flex;
    align-items: center;
}

.footer-spacing {
    border-left: 2px solid #006a9b;
    padding-left: 20px;
    margin-left: 25px;
}

.footer-content {
    margin-left: 12px;
}

.city-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #006a9b;
    padding-top: 20px;
    margin-top: 20px;
    padding-bottom: 10px;
    width: 90%;
}

.description {
    font-size: 22px;
    font-weight: bold;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
    align-items: center;
    color: #006a9b;
}

.weather-conditions-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

#weather-conditions {
    padding: 0 20px;
    text-align: center;
}

#weather-icon {
    height: 55px;
}

.search {
    display: flex;
    align-items: center;
}

.hide-description {
    display: none;
}

#search-btn {
    margin-left: 30px;
    padding: 5px 7px;
    color: #006a9b;
    border-radius: 25px;
    background-color: transparent;
    font-size: 25px;
    border: 2px solid #006a9b;
}

#search-btn:hover {
    background-color: #00d0ff96;
    transition: .2s;
    cursor: pointer;
}

#location-dot {
    font-size: 32px;
    color: #006a9b;
}

#text-box {
    width: 250px;
    padding: 9px;
    font-size: 17px;
    border: none;
    border-radius: 10px;
    border-bottom: 2px solid #006a9b;
    background-color: #00d0ff96;
    color: #004d70;
}

#text-box:focus {
    outline: none;
}

#text-box::placeholder {
    color: #004c70af;
}
</style>