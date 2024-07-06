import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FilterActivePipe } from './pipes/filter-active.pipe';
import { provideHttpClient } from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    FilterActivePipe,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
