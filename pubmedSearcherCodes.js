function search(){
    console.log('working');
        var obj = document.getElementById('lel');
        var unencoded = obj.value;
        obj.value = encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");    
        $("#link").attr('href', function() {
        return this.href + unencoded;
        });
        console.log($("#link"));
        location.href=document.getElementById("link");
}
