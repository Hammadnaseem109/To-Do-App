const showcard=document.getElementById("showcard")
let tasklistt=[]
tasklistt=JSON.parse(localStorage.getItem("notelist")|| null)
console.log("tasklistt"+tasklistt);

if(tasklistt===null || tasklistt.length===0){
alert("There is not Task is here")
}
else{
    renderingui()

}
function renderingui(){
    showcard.innerHTML = ""
tasklistt.forEach(element => {
    if(element. complete===true){
        let notecard=document.createElement("div")
    notecard.className="notecard"
    notecard.id="notecard"
    const tilediv=document.createElement("div")
    tilediv.className="tilediv"
    const textdiv=document.createElement("div")
    textdiv.className="textdiv"
    const btndiv=document.createElement("div")
    btndiv.className="btndiv"
    let notetile=document.createElement('h3')
     notetile.className="notetile"
     notetile.id="notetile"
     notetile.innerText=element.title
    let notetext=document.createElement('p')
    notetext.classList="notetext"
    notetext.id="notetext"
    notetext.innerText=element.notetext
    let  compbtn=document.createElement('button')
    compbtn.id="compbtn"
    compbtn.className="compbtn"
    compbtn.textContent="Complete Text"
    tilediv.appendChild(notetile)
    notecard.appendChild(tilediv)
    textdiv.appendChild(notetext)
    notecard.appendChild(textdiv)
    showcard.appendChild(notecard)
    notecard.style.backgroundColor="red"


    }
      


   
});

}
function home(){
    window.location.href="index.html"

}
function tasklist(){
    window.location.href = "tasklist.html";

}
function completetask(){
        window.location.href = "completetask.html";

}