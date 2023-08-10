const apiurl ="https://api.github.com/users"
let users =[]

async function fetchUser (){
    const res = await fetch(apiurl)
  
    const data =await res.json()
   users.push(...data)
   setData()

}

fetchUser()
let listType = document.getElementById("list")
let tableType = document.getElementById("table")


function setData(){
   users.map((elem)=>{
    let ullist = document.createElement("ul")
    let list = document.createElement("li")
    ullist.style.padding = "0px 50px"
    listType.appendChild(ullist)
    ullist.appendChild(list)

    console.log(elem)
    list.innerHTML = `💯 Login : ${elem.login} Type : ${elem.type}  Url : ${elem.url}`







    let tablerow = document.createElement("tr")
    let tabled1= document.createElement("td")
    let tabled2= document.createElement("td")
    let tabled3= document.createElement("td")
    let tabled4= document.createElement("td")




    tableType.appendChild(tablerow)
    tablerow.appendChild(tabled1)
    tablerow.appendChild(tabled2)
    tablerow.appendChild(tabled3)
    tablerow.appendChild(tabled4)


    tabled1.innerHTML = elem.id
    tabled2.innerHTML = elem.login
    tabled3.innerHTML = elem.type
    tabled4.innerHTML = elem.url




   })
}
