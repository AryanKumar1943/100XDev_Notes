const express=require('express');
const app=express();
//function that returns a boolean if the age of the person is more than 14
// function isOldEnough(age)
// {
//     if(age>=14)
//     {
//         return true;

//     }
//     else
//     {
//         return false;
//     }
// }
function isOldEnoughMiddleware(req,res,next)
{
    const age=req.query.age;
    if(age>=14)
    {
        next();
    }
    else
    {
        res.json({
            msg:"sorry you are not of age yet",
        })
    }
}
// app.use(isOldEnoughMiddleware); either this or isoldEnoughMidd.. individually this will work for everything  below it
app.get("/ride2",isOldEnoughMiddleware,function(req,res)
{
    // if(isOldEnough(req.query.age))
    // {
    res.json({
        msg:"you have sucessfully riden the ride1"
 })
// }
// else
// {
//     res.status(411).json({
//         msg:"sorry you are not of age yet"
//     });
// }
});
app.get("/ride1",isOldEnoughMiddleware,function(req,res)
{
    // if(isOldEnough(req.query.age))
    // {
    res.json({
        msg:"you have sucessfully riden the ride1"
 })
// }
// else
// {
//     res.status(411).json({
//         msg:"sorry you are not of age yet"
//     })
// }
})
app.listen(3000);