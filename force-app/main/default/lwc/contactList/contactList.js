import { LightningElement,wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import CONTACT_FNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import CONTACT_LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: CONTACT_FNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: CONTACT_LNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: CONTACT_EMAIL_FIELD.fieldApiName, type: 'text' }
];
export default class ContactList extends LightningElement {

    columns = COLUMNS;
    @wire(getContacts)
    contacts;
    get errors() {
        return (this.accounts.error) ?
            reduceErrors(this.accounts.error) : [];
    }
}