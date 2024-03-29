import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonListComponent } from './person-list/person-list.component';
import { PopupComponent } from './component/popup/popup.component';

@NgModule({
  declarations: [	
    AppComponent,
    PersonListComponent,
      PopupComponent
   ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
