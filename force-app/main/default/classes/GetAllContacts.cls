public with sharing class GetAllContacts {

    @AuraEnabled(cacheable=true)
    public static List<Contact> fetchcontacts(Id accId) {
        try{

        return [Select Id ,Firstname, Lastname from Contact where AccountId =: accId];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}