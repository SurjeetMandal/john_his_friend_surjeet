/** @format */

/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let NewArr = arr.filter((item) => {
        return item.profession === "developer";
    });

    NewArr.map((item) => {
        console.log(item);
    });
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
        if(employee.profession === "developer"){
            console.log(employee);
        }
    })
  }
  
  function addData() {
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});

    arr.map((item) => {
        console.log(item);
    })
  }
  
  function removeAdmin() {
    let NewArray = arr.filter((item) => {
        return item.profession !== "admin";
    });

    NewArray.forEach((item) => {
        console.log(item);
    })
  }
  
  function concatenateArray() {
    let NewEntry = [{ id: 1, name: "surjeet", age: "20", profession: "Front-end-developer" },
                    { id: 2, name: "aditya", age: "18", profession: "ui/ux-designer" },
                    { id: 3, name: "jagu", age: "21", profession: "backend-developer" ,}];

    let finalArray = [...arr,...NewEntry];

    console.log(finalArray);
  }
