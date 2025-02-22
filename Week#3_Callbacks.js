function greet(name, callbacks)
{
    console.log("Hello! "+ name);
    callbacks();
}
function say() 
{
    console.log("Morning");
}

greet("Laiba", say);