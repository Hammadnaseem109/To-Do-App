const addnote = document.getElementById("addnote")
const mnotediv = document.getElementById("mnotediv")
const addedbtn = document.getElementById("addedbtn")
const cancelbtn = document.getElementById("cancelbtn")
const notetxt = document.getElementById("notetxt")
const notetitle = document.getElementById("notetitle")
const showcard = document.getElementById("showcard")
let notelist = [];
let firsttime = JSON.parse(localStorage.getItem("first")) ?? true;

if (!firsttime) {
    notelist = JSON.parse(localStorage.getItem("notelist")) || [];
} else {
    localStorage.setItem("first", JSON.stringify(false));
    localStorage.setItem("notelist", JSON.stringify(notelist));
}
cancelbtn.addEventListener("click", () => {
    mnotediv.style.display = "none"
showcard.style.display="grid"

})
renderingui()
addedbtn.addEventListener("click", () => {
    console.log("added btn click");
    
    mnotediv.style.display = "flex"
    let tile = notetitle.value.trim();
    let notee = notetxt.value.trim();
    let note = {
        title: tile,
        notetext: notee,
        complete: false
    };
    if (tile === "" && notee === "") {
        alert("Fill all fields");
    } else {
        notelist.push(note)
        
        console.log(notelist);
        localStorage.setItem("notelist", JSON.stringify(notelist))
        notetitle.value = "";
        notetxt.value = "";
        mnotediv.style.display = "none";
        renderingui()


    }
});
function newnotes(){

            mnotediv.style.display = "flex";
            showcard.style.display="none"

}


function renderingui() {
    showcard.innerHTML = ""
                showcard.style.display="grid"

   if(notelist!==null){
     notelist.forEach(element => {
        let notecard = document.createElement("div")
        notecard.className = "notecard"
        notecard.id = "notecard"
        const tilediv = document.createElement("div")
        tilediv.className = "tilediv"
        const textdiv = document.createElement("div")
        textdiv.className = "textdiv"
        const btndiv = document.createElement("div")
        btndiv.className = "btndiv"
        let notetile = document.createElement('h3')
        notetile.className = "notetile"
        notetile.id = "notetile"
        notetile.innerText = element.title
        let notetext = document.createElement('p')
        notetext.classList = "notetext"
        notetext.id = "notetext"
        notetext.innerText = element.notetext
        let compbtn = document.createElement('button')
        compbtn.id = "compbtn"
        compbtn.className = "compbtn"
        compbtn.textContent = "Complete Text"
        tilediv.appendChild(notetile)
        notecard.appendChild(tilediv)
        textdiv.appendChild(notetext)
        btndiv.appendChild(compbtn)
        notecard.appendChild(textdiv)
        notecard.appendChild(btndiv)
        showcard.appendChild(notecard)
        if (element.complete) {
            notecard.style.backgroundColor = "red"
        }


        compbtn.addEventListener('click', () => {
            element.complete = true
            localStorage.setItem("notelist", JSON.stringify(notelist))
            renderingui()

        })
    });

   }
}
function ontasklisk(){
    window.location.href = "/TaskList/tasklist.html";

}
function completetask(){
        window.location.href = "/CompleteTask/completetask.html";

}
function home(){
        window.location.href = "index.html";

}