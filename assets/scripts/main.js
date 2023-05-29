$("#menu-item-asistentes").click(function(){
    fetch('http://localhost/parcialphp/index.html')
    .then(function(response) {
        return response.text();
    })
    .then(function(datos) {
        //console.log(datos);
        $("#main-content").php(datos);
    });
});
