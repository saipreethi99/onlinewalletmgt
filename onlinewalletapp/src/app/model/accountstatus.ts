import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class AccountStatus{
    ACTIVE;
    INACTIVE;

  constructor(ACTIVE,INACTIVE) {
    this.ACTIVE=ACTIVE;
    this.INACTIVE=INACTIVE;
   }

   getACTIVE(){
     return this.ACTIVE;
   }

   getINACTIVE(){
   return this.INACTIVE;
   }
}