
module.exports = {

    getResponse: (req, res) => {
            console.log("works");
            res.status(200).send("works2");
    },
    getInventory: (req, res, next) => {
     
    },

}