var request = require("request");
var cheerio = require("cheerio");

function search(){
    console.log('1');
        var obj = document.getElementById('lel');
        console.log(obj.value);
        var unencoded = obj.value;
        obj.value = encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");    
        $("#link").attr('href', function() {
        var finLink = this.href + unencoded;
        console.log(finLink);
            // request (finLink, function(error, response, html) {
            //     if (!error && response.statusCode == 200) {
            //         var $ = cheerio.load(html);
            //         console.log('reached');
            //     }
            // });
        });
}
