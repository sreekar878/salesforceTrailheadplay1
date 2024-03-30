public class CampingListController {
    @AuraEnabled
    public static List<Camping_Item__c> getItems (){
        
        List<Camping_Item__c> campList = [Select Id,Name,Quantity__c,Price__c,Packed__c from Camping_Item__c];
        
        return campList;
    }
    @AuraEnabled
    public static Camping_Item__c saveItem (Camping_Item__c campingRecord){
        
       insert campingRecord;  
       return campingRecord;   
    }
}