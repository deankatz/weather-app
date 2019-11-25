class TempManager {
    constructor() {
        this.cityData = []

    }

    async getDataFromDB() {
        let data = await $.get('./cities')
        this.cityData = data
        console.log(data)
        console.log(this.cityData)


    }


    async getCityData(cityName) {
        await $.get(`./city/${cityName}`, (result) => {
            let data = JSON.parse(JSON.stringify(result))
            let dataObj =
            {
                name: data.location.name,
                temp: data.current.temp_c,
                condition: data.current.condition.text,
                icon: data.current.condition.icon,
                timeLastUpdated: data.current.last_updated,
                new: true
            }
            this.cityData.push(dataObj)
            console.log(this.cityData)


        })
    }

    async saveCity(cityName) {
        //   const findCity = city => this.cityData.find(c=> c.name == cityName)
        for (let i in this.cityData) {
            if (this.cityData[i].name == cityName) {
                let theCity = this.cityData[i]
                //   console.log(this.cityData)
                console.log(theCity)
                await $.post(`./city/`, theCity, function (err, response) {
                    theCity.new = false
                    console.log("Saved", response)
                })
            }
        }
    }

    removeCity(cityName) {
        console.log("try TO DELETE")
        $.ajax({
            url: `./city/${cityName}`,
            method: "DELETE",
            success: function (result) {
                console.log(`delete result ${result}`)
            }
        })
    }

    async updateCity(cityName) {
        // for(let i in this.cityData){
        //     if (this.cityData[i].name == cityName)
        //     console.log(this.cityData)
        //     this.cityData.splice(i,1)
        //     console.log(this.cityData)
        // }
        await $.ajax({
            url: `./city/${cityName}`,
            method: "PUT",
            success:  (result)=> {
                let data = JSON.parse(JSON.stringify(result))
                console.log(data)
            //     let dataObj =
            // {
            //     name: data,
            //     temp: data.current.temp_c,
            //     condition: data.current.condition.text,
            //     icon: data.current.condition.icon,
            //     timeLastUpdated: data.current.last_updated,
            //     new: true
            // }
            console.log(this.cityData)
            // this.cityData.push(data)
            console.log(this.cityData)

            


            
               
    }

})
}






}

