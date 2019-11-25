class Renderer{
        renderData(data){
            $(".cities").empty()
            console.log(data)
        console.log("render")
        let source = $("#store-template").html()
        let template = Handlebars.compile(source)
        let newHtml = template({data}) 
        $(".cities").append(newHtml)
    }
}