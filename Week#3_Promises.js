function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = { name: "Alice", age: 25 };
        resolve(data);
      }, 1500);
    });
  }
  
  fetchData()
    .then(user => console.log("User Data:", user))
    .catch(err => console.log("Error:", err));
  