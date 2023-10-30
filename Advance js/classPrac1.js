class Employee {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
    Fbh(){
        console.log("Name......",this.id, this.name);
    }
  };
  var emp = new Employee(3,"pavan")
  emp.Fbh();