function fetchData(callback)
{
    setTimeout(() => {
        console.log("Data received");
        callback();
    }, 2000);
}
fetchData(() => console.log("Processing data"));