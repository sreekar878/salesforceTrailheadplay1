({
	createItem : function(component,expenseData) {
        
	   let action = component.get("c.saveItem");
         action.setParams({
            "campingRecord": expenseData
        });
        action.setcallBack(this,function(response){
           let state = response.getState();
            if(state === "SUCCESS"){
             let expenseArray  = component.find("v.items");
             expenseArray.push(response.getReturnValue()) ;
             component.set("v.items", expenseArray);
            }else{
                console.log("Failed with state: " + state);  
            }
         
            
        });
        $A.enqueueAction(action);
	}
})