import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { UtilComponent } from './util/util.component';
import { GalleryComponent } from './gallery/gallery.component';
import {MdButtonModule, MdDialogModule, MdIconModule} from '@angular/material';
import {UtilService} from './util.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataService} from './data.service';
import { GalleryControlComponent } from './gallery-control/gallery-control.component';
const appRouters: Routes  = [
  {path: '', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UtilComponent,
    GalleryComponent,
    GalleryControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRouters),
    MdDialogModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    UtilComponent
  ],
  entryComponents: [
    UtilComponent
  ],
  providers: [UtilService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
