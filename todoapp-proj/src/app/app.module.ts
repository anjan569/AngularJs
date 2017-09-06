import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodolistService } from './../services/todolist.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoListComponent,
    NavBarComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
