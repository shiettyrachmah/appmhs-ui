import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MahasiswaService } from '../services/mahasiswaservice';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ListMahasiswaComponent } from './list-mahasiswa/list-mahasiswa.component';
import { RouterModule } from '@angular/router';
import { MahasiswaAddComponent } from './mahasiswa-add/mahasiswa-add.component';
import { MahasiswaUpdateComponent } from './mahasiswa-update/mahasiswa-update.component';

export const AppRoute: any = [
  //setting path
  {path:"", component:AppComponent},
  {path:"listdata", component:ListMahasiswaComponent},
  {path:"edit", component:MahasiswaUpdateComponent},
  {path:"add", component:MahasiswaAddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListMahasiswaComponent,
    MahasiswaAddComponent,
    MahasiswaUpdateComponent
  ],
  imports: [ 
    HttpModule, //request web
    FormsModule, //form banding
    BrowserModule,
    RouterModule.forRoot(AppRoute,{useHash:true})
  ],
  providers: [
    MahasiswaService //class service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
