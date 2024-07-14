const fs = require("fs")


const addperson= ( id,fname , lname) =>{
    const alldata = loadinfo()
    const dublicated = alldata.filter((data) => {
        return data.id === id 
    })
    if(dublicated.length === 0){        
        alldata.push({
            id : id,
            fname : fname , 
            lname : lname
        })
        saveinfo(alldata)
        console.log("Added successfully")
    }
    else{
        console.log("error Dublicated items ")
    }
}
////////////////////////////////////////////////////////
const loadinfo = ()=>{
    try{
        const data = fs.readFileSync("data10.json").toString()
        const dataobj = JSON.parse(data)
        return dataobj
    }
    catch{
        return []
    }
}
const saveinfo = (alldata) => {
    const alldatajson = JSON.stringify(alldata)
    fs.writeFileSync("data10.json",alldatajson)
}
//////////////////////////////////////////////////////


const deleteditem = (id) =>{
    const alldata = loadinfo()
    const dataremained = alldata.filter((data) => {
        return data.id !== id })
        if(alldata.length !== dataremained.length){
            saveinfo(dataremained)
            console.log("Deleted successfully")
        }
        else{
            console.log("id not found")
        }
}
////////////////////////////////////////////////////////////////////////
const readitem = (id) => {
    const alldata = loadinfo()
    const itemtoread = alldata.find((data)=>{return data.id === id })
    if(itemtoread){
        console.log(itemtoread)
    }
    else{
        console.log("no item found")
    }

}
//////////////////////////////////////////////////////////////////////
const listitems = () => {
    const alldata = loadinfo()
     alldata.forEach(element => {
      console.log(element.fname, element.lname)  
    })
}


module.exports={
    addperson ,
    deleteditem,
    readitem,
    listitems
}
