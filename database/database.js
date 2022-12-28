import mongoose from "mongoose";

const CONNECTION_URL = "mongodb+srv://mimi:OV4Sk1MK0HAJj0GE@cluster0.3pny8mj.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to DB"))
    .catch ((error) => console.log(error.message));