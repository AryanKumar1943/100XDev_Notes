// //Creating an http server
// //express
// //node default library => no

// const express=require("express");

// const app=express(); //creating the clinic
// function sum(n)
// {   let ans=0;
//     for(let i=1;i<=n;i++)
//     {
//         ans=ans+i;
//     }
//     return ans;

// }
// app.get("/",function(req,res)
// {
//     const n=req.query.n;
//     const ans=sum(n);
//     res.send("hi your answer is "+ans);
// })

// app.listen(3000); // 3000 is port and doctor is taking room 
/* Question. Create a todo on your own HTTP server:
1.) Where you can perform the CRUD Operations
2.) Store the data of todos in json file example - todo.json
 */
const express=require("express");
const app=express();
var users=[{
    name:"John",
    kidneys:[{
        healthy:false
    }]
    }];
app.use(express.json());
app.get("/",function(req,res)
{
    const johnkidneys=users[0].kidneys;
    const numberOfKidneys=johnkidneys.length;
    let numberOfHealthyKidneys=0;

    for(let i=0;i<johnkidneys.length;i++)
    {
        if(johnkidneys[i].healthy)
        {
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;
        }
    }
   const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
   res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
   })
})
//middlewares
   app.post("/",function(req,res)
   {
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push(
        {
            healthy:isHealthy
        })
        res.json({
            msg:"done!"
        })

})
app.put("/",function(req,res)
{
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})
app.delete("/",function(req,res)
{
    //removing all the unhealthy kidneys
    //you should retun a 411 when no kidney so wrong request
    if(isThereAtLeastOneUnhealthyKidney())
    {
        const newKidneys=[];
        for(let i=0;i<users[0].kidneys.length;i++)
        {
            if(users[0].kidneys[i].healthy)
            {
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=newKidneys;
        res.json({msg:"done"})
    }
    else{
        res.status(411).json({
            msg:"you have no bad kidneys"
        });
    }
   
})
function isThereAtLeastOneUnhealthyKidney()
{
    let atLeastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(!users[0].kidneys[i].healthy)
        {
            atLeastOneUnhealthyKidney=true;
        }
    }
    return atLeastOneUnhealthyKidney
}
app.listen(3000);
