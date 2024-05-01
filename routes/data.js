const express =  require("express")

const router = express.Router();


router.get('/', (req , res) => {
    res.send("this is Data route");
})

router.get("/101", (req , res) => {
    res.send('this is data 101 route')
})

router.get('102', (req, res)=> {
    res.send("this is data 102")
})


module.exports = router;