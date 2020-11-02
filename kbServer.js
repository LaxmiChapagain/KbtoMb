
var conversion ={
    datainKb: function(datainKb){
        var datainMb= ((1/1024)*datainKb);
        console.log ('The required data in Mb is: ' + datainMb);
    }
}
module.exports =conversion
