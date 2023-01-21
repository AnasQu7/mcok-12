const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { amount, intrest,years } = req.body;
    let P = amount
    let i = (intrest / 100)
    let n = years
    let totalMaturity  = 1+i;
        totalMaturity = totalMaturity**n;
        totalMaturity = totalMaturity-1;
        totalMaturity = totalMaturity/i;
        totalMaturity = Math.round(totalMaturity*P);
    let totalInvestment = (amount*years)
    let totalIntrest = (totalMaturity-totalInvestment)
    console.log({i,P,n},{ amount, intrest,years } ,{totalMaturity , totalInvestment  , totalIntrest  })
    res.send({totalMaturity , totalInvestment  , totalIntrest  })
  } catch (err) {
    res.status(404).send({message:err.message});
  }
});
module.exports = router;
