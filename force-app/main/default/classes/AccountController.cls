public with sharing class AccountController {
    public static List<Account> getAllActiveAccounts() {
      return [SELECT Id, Name, Active__c, Email FROM Account WHERE Active__c = 'Yes' WITH SECURITY_ENFORCED];
    }
  }