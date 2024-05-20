const mongoose = require("mongoose");
const initdata = require("./Data");
const Listing = require("../models/listing");
const Mongo_URL = "mongodb://127.0.0.1/rentify";

main().then(() => {
    console.log("Mongoose Connected");
}).catch((error) => {
    console.log(error);
})

async function main(){
    await mongoose.connect(Mongo_URL);
}

const initDB = async  () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);  
    console.log("data was initalized");
}

initDB();
