import { LightningElement, api, wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import getcontacts  from '@salesforce/apex/GetAllContacts.fetchcontacts';

//import NAME_FIELD from '@salesforce/schema/Account.Name'

export default class Demo extends LightningElement {


    @api user = '';
    @api recordId;

   @wire(getRecord, {recordId: '$recordId', fields: ['Account.Name']})
    record;

    @wire(getcontacts, {accId: '$recordId'})
    contacts;

    get user(){
        //return getFieldValue(this.record.data,NAME_FIELD);
        return this.record.data.fields.Name.value;
    }
} 