import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './views/create-thought/create-thought.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { ListThoughtComponent } from './views/list-thought/list-thought.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
