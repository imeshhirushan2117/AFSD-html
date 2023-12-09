function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      let data = ""

      for (let i = 0; i < json.length; i++) {
        console.log(json[i])
        data += ` <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">ID : ${json[i].id}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary"> Title : ${json[i].title}</h6>
          <p class="card-text">Body : ${json[i].body}</p>
        </div>
      </div>`
      }

      document.getElementById('display').innerHTML = data

    })
    .catch((err) => console.log(err))
    .finally(() => console.log("fainally run")) //pass unth fdaul unth monawa hari deyk karagann onanemn fainally use kri 
}


function postData() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'hiru',
      body: 'men',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}



function putData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Pakaya',
      body: 'female',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
}

function deletedData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
}