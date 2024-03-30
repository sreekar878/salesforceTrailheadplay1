({
	packItem : function(component, event, helper) {
		  let packed = component.set("v.item.Packed__c","True");
          event.getSource().set("v.disabled","true");
	}
})