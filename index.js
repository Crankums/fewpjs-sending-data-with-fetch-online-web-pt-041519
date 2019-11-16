// Add your code here
function submitData(name, email) {
  return  fetch("http://localhost:3000/users", configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
      })
      .then(function(response){
        return response.json()
      })

}
