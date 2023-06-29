
let form = document.querySelector("#AttendanceForm");
let table =document.querySelector("#AttendanceTable");

let student= JSON.parse(localStorage.getItem("Enroments"))||[];




form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const FormData={
        id:"BTA00"+(student.length + 1),
        name:form.name.value,
        class:form.class.value,
        phone:form.phone.value,
        time:form.time.value,
        date:form.date.value

    }
 let tr =document.createElement("tr");
tr.innerHTML =
`
<td>${FormData.id}</td>
<td>${FormData.name}</td>
<td>${FormData.class}</td>
<td>${FormData.phone}</td>
<td>${FormData.time}</td>
<td>${FormData.date}</td>

<td>
<button id ="${FormData.id}" 
data-identity="${FormData.id}"
onclick = "deletestd 
('${FormData.id}') " > Delete </button>

<button id ="${FormData.id}"
 onclick = "editstd ('${FormData.id}') " >
  Edit </button>

</td>





`
table.appendChild(tr)
student.push(FormData);
localStorage.setItem("Enroments",JSON.stringify(student))
form.reset();
   
})
 document.addEventListener("DOMContentLoaded",()=>{
    student.forEach ((FormData) => {
      
  table.innerHTML = "";

      
        
          let tr =document.createElement("tr"); tr.innerHTML =
 `
 <td>${FormData.id}</td>
 <td>${FormData.name}</td>
 <td>${FormData.class}</td>
 <td>${FormData.phone}</td>
 <td>${FormData.time}</td>
 <td>${FormData.date}</td>

 <td>

 <button id ="${FormData.id}" 
 data-identity="${FormData.id}"
 onclick= "deletestd ('${FormData.id}' )" >
  Delete </button>

 <button id ="${FormData.id}"
 onclick = "editstd ('${FormData.id}') " >
  Edit </button>

 </td>


 `
 
 table.appendChild(tr)

 
 
 

    
})
 })

 function deletestd(s) {
  var result = confirm("Are you sure you want to delete this row?");

  if (result) {
    student = student.filter((x) => x.id !== s);
    localStorage.setItem("Enroments", JSON.stringify(student));
    let row = document.getElementById(s).parentElement.parentElement;
    row.parentElement.removeChild(row);
    ("Delete operation executed!");
  } else {
    ("Delete operation cancelled.");
  }
}



 const editstd = (s) => {
    let submitButton = document.getElementById('installs');
    submitButton.style.display = 'none';
  
    let row = document.getElementById(s).parentElement.parentElement;
    const [idcell, Namecell, phonecell, classcell, timecell, datecell] = row.cells;
  
    form.name.value = Namecell.textContent;
    form.class.value = classcell.textContent;
    form.phone.value = phonecell.textContent;
    form.time.value = timecell.textContent;
    form.date.value = datecell.textContent;
  
    let updateButton = document.getElementById('Formbtn');
    updateButton.style.display = 'block';

    updateButton.onclick = () => {
      
      // Update the row cells with the new values
      Namecell.textContent = form.name.value;
      classcell.textContent = form.class.value;
      phonecell.textContent = form.phone.value;
      timecell.textContent = form.time.value;
      datecell.textContent =form.date.value;
  
      // Hide the update button and display the submit button again
      updateButton.style.display = 'none';
      submitButton.style.display = 'block';
  
      // Reset the form
      form.reset();
    };

  
  };
  function populateTable() {
  // Initialize DataTables with the table ID

  
  const dataTable = $("#AttendanceTable").DataTable({
    data: student,
    columns: [
      { data: "id" },
      { data: "name" },
      { data: "class" },
      { data: "phone" },
      { data: "time" },
      { data: "date" },
    ],
    
  });
 
}

populateTable();

