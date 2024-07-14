

const fs = require("fs")
const data10 = require("./data10.js")
const yargs = require("yargs")
yargs.command({
    command : "add",
    describe :"this is add command",
    builder : {
        fname : {
            describe : "the first name of the developer" ,
            demandOption : true ,
            type :"string"
        },
        lname : {
            describe : "the last name of the developer" ,
            demandOption : false ,
            type :"string"
        }

    },
    handler : (x) =>{ 
        // console.log("Added successfully")
         data10.addperson( x.id ,  x.fname , x.lname)
        
    }
})
// console.log(yargs.argv)
// yargs.parse() //   


yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler : (x)=> {
        data10.deleteditem(x.id)
    }
 })

//  yargs.parse()

////////////////////////////////
yargs.command(
    {
        command : "read",
        describe: "to read an item",
        handler : (x)=> {
            data10.readitem(x.id)
        }

    }
)
// yargs.parse()

yargs.command(
    {
        command : "list",
        describe: "to print fname and lname for each item",
        handler : ()=> {
            data10.listitems()
        }

    }
)
yargs.parse()
