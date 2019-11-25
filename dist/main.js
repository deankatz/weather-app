let render = new Renderer()
let tempMan = new TempManager()


// let loadPage = async function(data){
//     tempMan.getDataFromDB()
//     await 
    
// }

let loadPage = async function(){
    await tempMan.getDataFromDB()
    render.renderData(tempMan.cityData)
    console.log(tempMan.cityData)
}

$("document").ready(function(){
    loadPage()
    
})


let handleSearch = async function(){
    let input = $(".input").val()
    console.log(input)
    await tempMan.getCityData(input)
    render.renderData(tempMan.cityData)
    $(".input").val("")

}



$("body").on("click",".fa-plus-circle", function(){
    $(this).removeClass("fas fa-plus-circle").addClass("fas fa-minus-circle")
    let cityName = $(this).closest(".city").find(".name").text()
    console.log(cityName)
    tempMan.saveCity(cityName)

} )


$("body").on("click", ".fa-minus-circle", function(){
    $(this).removeClass("fas fa-minus-circle").addClass("fas fa-plus-circle")

    console.log("deleteBTN")
    let cityName = $(this).closest(".city").find(".name").text()
    console.log(cityName)
    tempMan.removeCity(cityName)
    // render.renderData(tempMan.cityData)
    console.log("DELETE?")


})

$("body").on("click", ".update", function(){
    let cityName = $(this).closest(".city").find(".name").text()
    console.log(cityName)
    tempMan.updateCity(cityName)
    render.renderData(tempMan.cityData)

})