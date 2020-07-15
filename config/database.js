const mongoose = require('mongoose')

const setupDB = () => {
    mongoose.connect("mongodb+srv://dbUserAnil:iremember@cluster0.decdg.mongodb.net/RECIPE-APP?retryWrites=true&w=majority",{ useNewUrlParser: true })
            .then(()=>{
                console.log("DB ready")
            })
            .catch((err)=>{
                console.log(err)
            })
}
module.exports = setupDB