import { DATE_PIPE_DEFAULT_TIMEZONE } from "@angular/common";
import { InjectionToken } from "@angular/core";

export class Clients {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    doj: Date = new Date();
    mobileNum : number = 0;
    state : string = '';
    totalPaymentReceived : number = 0;
    termsAndConditions : boolean = false
}


