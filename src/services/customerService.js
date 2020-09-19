var model ={};
var customers = [
	{id:1, name:'Vivek', email:'Vivek@gmail.com', phone:'9908436', address:'ahmedabad'},
	{id:2, name:'Ramesh s', email:'ramesh@gmail.com', phone:'675445', address:'davangere'},
	{id:3, name:'Krishna', email:'krishnakumar@gmail.com', phone:'112554233', address:'mumbai'},
	{id:4, name:'Rahim', email:'rahim@gmail.com', phone:'53466', address:'delhi'}
];

model.getRecords = function(){
	return customers;
}
model.getRecordById=(recordId)=>{
    for (let i = 0; i < customers.length; i++) {
        if(recordId==customers[i].id){
            return customers[i]
        }
        
    }
    // customers.forEach(element => {
        
    //     if(recordId==element.id){
            
            
    //         return element;
    //     }
    // });
    
    return {};
}
model.searchByFieldAndText=(field,stext)=>{
	let searchCustomers=[]
	console.log(stext.toLowerCase());
	for (let i = 0; i < customers.length; i++) {
		if(customers[i][field].toLowerCase().startsWith(stext)) {
			searchCustomers.push(customers[i])
		}	
	}
	return searchCustomers;
}

model.addRecord = function(record){
	return customers.push(record);
}

model.deleteRecord = function(id){
	let temp = [];
	for (var i = 0; i < customers.length; i++) {
		if(id != customers[i].id){
			temp.push(customers[i]);
		}
	}
    customers = temp;
    return "deleted";
}

model.updateRecord = function(record){
	let customer = record;
	for (var i = 0; i < customers.length; i++) {
		if(customer.id == customers[i].id){
			customers[i] = customer;
		}
	}
}
module.exports = model;