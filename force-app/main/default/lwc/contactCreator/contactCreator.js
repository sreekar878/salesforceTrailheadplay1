import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_FNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import CONTACT_LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';
export default class ContactCreator extends LightningElement {

    contactObject = CONTACT_OBJECT;
    allFields = [CONTACT_FNAME_FIELD,CONTACT_LNAME_FIELD,CONTACT_EMAIL_FIELD];


   /* handleSuccess(event){
        const recordInput = {
            apiName: contactObject,
            fields: allFields

        };
        createRecord(recordInput)
            .then(contact => {
                const toastEvent = new ShowToastEvent({
                    title: "Contact created",
                    message: "Record ID: " + event.detail.id,
                    variant: "success"
                });
                this.dispatchEvent(toastEvent);
            })
            .catch(error => {
                // code to execute if create operation is not successful
            });
    }*/
  
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

}