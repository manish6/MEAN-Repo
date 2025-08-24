import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';
import { EffectsModule } from '@ngrx/effects';
import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DataComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
//    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
