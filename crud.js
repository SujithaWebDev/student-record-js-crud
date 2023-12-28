let name = document.querySelector("#name");
    let age = document.getElementById("age");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let btn = document.querySelector(".registerbutton");
    let addingname = document.querySelector(".addingname");
    let backbtn=document.querySelector("#backbtn");
    let form=document.querySelector(".formcontent");
    backbtn.style.visibility="hidden";
    addingname.style.visibility="hidden";
    backbtn.addEventListener("click",()=>{
      form.style.display="block";
      addingname.style.visibility="hidden";
      backbtn.style.visibility="hidden";
    })
    btn.addEventListener("click", function crudop() {
      backbtn.style.visibility="visible";
      form.style.display = "none";
      addingname.style.visibility="visible";
      let newdiv = document.createElement("div");
      addingname.appendChild(newdiv);
      console.log(newdiv);
      newdiv.classList.add('newdivbg')
      
      let newnametag = document.createElement("input");  
      newnametag.value = name.value;
      newnametag.setAttribute("readonly", "readonly");
      newdiv.appendChild(newnametag);
      newnametag.classList.add('nameinputtag1')
      

      let newagetag = document.createElement("input");
      newagetag.value = age.value;
      newagetag.setAttribute("readonly", "readonly");
      newdiv.appendChild(newagetag);
      newagetag.classList.add('ageinputtag1')

      let newmailtag = document.createElement("input");
      newmailtag.value = email.value;
      newmailtag.setAttribute("readonly", "readonly");
      newdiv.appendChild(newmailtag);
      newmailtag.classList.add('emailinputtag1')
      

      let newphonetag = document.createElement("input");
      newphonetag.value = phone.value;
      newphonetag.setAttribute("readonly", "readonly");
      newdiv.appendChild(newphonetag);
      newphonetag.classList.add('phoneinputtag1')
      

      let deletebtn = document.createElement("a")
      // deletebtn.innerHTML = "Delete";
      newdiv.appendChild(deletebtn);
      deletebtn.addEventListener("click", () => {
        newdiv.style.display = "none";
      })
      deletebtn.classList.add('deletebtncss')

      let editbtn = document.createElement("a")
      // editbtn.innerHTML = "Edit";
      newdiv.appendChild(editbtn);
      editbtn.addEventListener("click", () => {
        newnametag.removeAttribute("readonly", "readonly");
        newagetag.removeAttribute("readonly", "readonly");
        newmailtag.removeAttribute("readonly", "readonly");
        newphonetag.removeAttribute("readonly", "readonly");
      })
      editbtn.classList.add('editbtncss')

      let savebtn = document.createElement("a")
      // savebtn.innerHTML = "Save";
      newdiv.appendChild(savebtn);
      savebtn.addEventListener("click", () => {
        newnametag.setAttribute("readonly", "readonly");
        newagetag.setAttribute("readonly", "readonly");
        newmailtag.setAttribute("readonly", "readonly");
        newphonetag.setAttribute("readonly", "readonly");
      })
      savebtn.classList.add('savebtncss');

      const data = {
        from_name: document.querySelector(".nameinputtag").value,
        age: document.querySelector(".ageinputtag").value,
        email_id: document.querySelector(".emailinputtag").value,
        phone: document.querySelector(".phoneinputtag").value,
        message: document.querySelector(".phoneinputtag").value,
      }
      emailjs.send("service_kjn74da", "template_6b0s99d", data).then(() => {
        // alert("submitted")
        console.log("Email sent through Email JS")
      })
    })