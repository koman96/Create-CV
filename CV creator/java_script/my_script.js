var image = document.getElementById("image");
var file_btn = document.getElementById("file_btn");

file_btn.addEventListener("change" ,function(){
    const file = this.files[0];

    if (file){
        const file_reader = new FileReader();

        file_reader.addEventListener("load" ,function(){
            image.setAttribute("src" ,file_reader.result);
        });
    
        file_reader.readAsDataURL(file);
    }
    else{
        alert("problem in reading image");
    }
});