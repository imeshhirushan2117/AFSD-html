var detailsArray = [];


const btnSubmit = () => {
  var getFName = document.getElementById('fName').value;
  var getSName = document.getElementById('sName').value;
  var getAge = document.getElementById('age').value;
  var getAddress = document.getElementById('address').value;


  if(getFName,getSName, getAge , getAddress == ""){
     alert("Place Enter Values !")

  }else{

    var detailsObject = {
      "firstName": getFName,
      "secondName": getSName,
      "age": getAge,
      "address": getAddress,
    };
    detailsArray.push(detailsObject);
    viewForm();
  clear();
  }
}

function viewForm() {
  var data = "";
  for (var i = 0; i < detailsArray.length; i++) {    

    data += `<div class="card m-2" style="width: 18rem;">
      <div class="card-body text-white  border-3 rounded" style="background-color:black;">
        <h5 class="card-title fs-5 fw-normal">First Name : ${detailsArray[i].firstName}</h5>
        <h5 class="card-title fs-5 fw-normal">Second Name : ${detailsArray[i].secondName}</h5>
        <h5 class="card-title fs-5 fw-normal">Age : ${detailsArray[i].age}</h5>
        <h5 class="card-title fs-5 fw-normal">Address : ${detailsArray[i].address}</h5>
        <br>
        <button type="button" onclick="deletedDetails(${i})" class="btn  w-100" style="background-color: #FA3E3E;">Deleted</button>
      </div>
    </div>`;

  }
  document.getElementById('display').innerHTML = data;
  console.log(data);
}

function clear(){
  fName.value = '';
  sName.value = '';
  age.value = '';
  address.value = '';
}

function deletedDetails(i) {
    detailsArray.splice(i, 1);
    viewForm();
}