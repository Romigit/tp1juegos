import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './form/about/about.component';
import { HomeComponentForm } from './form/home/home.component';
import { GameComponent } from './form/game/game.component';
import { NotFoundComponent } from './form/not-found/not-found.component';
import { MenuComponent } from './form/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import {HttpClientModule} from '@angular/common/http';
import { PicturesComponent } from './form/pictures/pictures.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponentForm,
    GameComponent,
    NotFoundComponent,
    MenuComponent,
    PicturesComponent,
    NavComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
   MatToolbarModule,

    HttpClientModule,

    LayoutModule,

    MatSidenavModule,

    MatIconModule,

    MatListModule,

    MatGridListModule,

    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
