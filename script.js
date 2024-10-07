function sendWhatsAppMessage(){

    const number = "+8766453107";

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    console.log(name+ message);

    const url = "https://wa.me/"  + number +"?text="+ "Name : " +name+ "%0a" +"Message : " +message + "%0a%0a";
    
    window.open(url, '_blank').foucs();

}