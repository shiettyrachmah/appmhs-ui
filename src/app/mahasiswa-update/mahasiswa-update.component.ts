import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../../interfaces/mahasiswa';
import { MahasiswaService } from '../../services/mahasiswaservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mahasiswa-update', //selector : if yo want to test running using it in appcomponent.html
  templateUrl: './mahasiswa-update.component.html',
  styleUrls: ['./mahasiswa-update.component.css']
})
export class MahasiswaUpdateComponent implements OnInit {

  mahasiswa: Mahasiswa = new Mahasiswa();

  constructor(
    private mahasiswaService: MahasiswaService, 
    private router:Router) {

  }

  ngOnInit() {
    this.mahasiswa=this.mahasiswaService.getter(this.mahasiswa); //craete getter to getData after change except:id
  }

  onClickSave(){
    this.mahasiswaService.save(this.mahasiswa).subscribe(
      data=>{
         console.log(data);
        this.router.navigate(["listdata"]);
      },error=>{
         console.error();
      });
  }


}
