({
    doInit : function (component,event,helper){
        
        let action = component.get("c.getItems");
        
        action.setcallBack(this,function(response){
           let state = response.getState();
            if(state === "SUCCESS"){
              component.set("v.items", response.getReturnValue());
            }else{
                console.log("Failed with state: " + state);  
            }
         
            
        });
        $A.enqueueAction(action);
    },
    clickCreateItem : function(component, event, helper){
         let validItem = component.find("item").reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            // inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get("v.validity").valid;
        }, true);
        if(validItem){
           let itemsData = component.find("v.newItem");
           //let expenseArray = component.find("v.items");
           // expenseArray.push(itemsData);
           // component.set("v.items",expenseArray);
           // component.set("v.newItem","null")
           
            //let expenseArray  = component.find("v.items");
            helper.createItem(component,itemsData);
            
        }
    }
})