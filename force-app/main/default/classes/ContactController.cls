public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        /*
        return [
            SELECT FirstName, LastName, Email, Phone
            FROM Contact
            WITH SECURITY_ENFORCED
       ];*/

       throw new AuraHandledException('Forced error');


    }
}