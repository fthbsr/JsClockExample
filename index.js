let isim = prompt("Lutfen Isminizi Giriniz");

if(isim == ""){
    alert("Lutfen Dogru Bilgi Giriniz:")
}else{
    let yazdir = document.querySelector("#myName");
yazdir.innerHTML = isim;

}



function goster (){
    let tarih =document.querySelector("#myClock");

    let days = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
    
    let now = new Date();
    
    
    tarih.innerHTML = days[now.getDay()];
    tarih.innerHTML += `    ${now.getHours()} ${now.getMinutes()} ${now.getSeconds()}`;
}
    
    
 

setInterval(goster,1000)

