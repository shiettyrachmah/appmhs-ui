import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../../interfaces/mahasiswa';
import { MahasiswaService } from '../../services/mahasiswaservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mahasiswa-add',
  templateUrl: './mahasiswa-add.component.html',
  styleUrls: ['./mahasiswa-add.component.css']
})
export class MahasiswaAddComponent implements OnInit {

  mahasiswa: Mahasiswa = new Mahasiswa();

  constructor(
    private mahasiswaService: MahasiswaService, 
    private router:Router) { 

  }

  ngOnInit() {
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
