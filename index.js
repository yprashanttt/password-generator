const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
 let suggestion1 = document.getElementById("pswrd1")
 let suggestion2 = document.getElementById("pswrd2")



function generatePassword(){
    suggestion1.textContent = ""
    suggestion2.textContent = ""

    for(let i =0; i<=14; i++){
        let a = Math.floor(Math.random() * characters.length)
        let b = Math.floor(Math.random() * characters.length)

        let s1 = characters[a]
        let s2 = characters[b]

        suggestion1.textContent += s1
        suggestion2.textContent += s2
           
    }
    
}