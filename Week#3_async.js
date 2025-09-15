async function fetchData() {
    let promise = new Promise((resolve) => {
      setTimeout(() => resolve("Data fetched!"), 2000);
    });
  
    let result = await promise; // Waits for the promise to resolve
    console.log(result);
  }
  
  fetchData(); 
  console.log("Fetching..."); // Runs first, because fetchData() waits
  