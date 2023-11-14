





var allproducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn1 = document.querySelector("#btn1")
var totalprice = 0
Comment 
allproducts.forEach(function(item){
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        content.innerHTML += item.textContent + "&nbsp; &nbsp; &nbsp; &nbsp;"
        if(content.innerHTML !=""){
            btn1.style.display="block"
            btn1.style.backgroundColor="gray"
            btn1.style.color="blue"
            btn1.style.width="200px"
            btn1.style.height="50px"
            

        }
    }
})
Comment 
btn1.onclick = function(){
    console.log(totalprice)
}