// When code executed line by line usse synchronous kahte hai.
// Asynchronous code runs in the background and doesn't block the main thread (your app keeps running while waiting for something like data from a server).
//any async nature code is directly sends to stack and run the sync code first after completing sync 
// then check the async get executed or not ,if not then keeep it to main stack and run it.