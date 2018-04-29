import { Component, OnInit, Output } from '@angular/core';
import { MahasiswaService } from '../../services/mahasiswaservice';
import { Mahasiswa } from '../../interfaces/mahasiswa';
import { SearchData } from '../../interfaces/searchData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-mahasiswa',
  templateUrl: './list-mahasiswa.component.html',
  styleUrls: ['./list-mahasiswa.component.css']
})
export class ListMahasiswaComponent implements OnInit {
  mahasiswa:Mahasiswa[];
  searchData: SearchData = new SearchData();

  constructor(
    private mahasiswaService:MahasiswaService, 
    private router:Router) { //Router for change page

   }

  ngOnInit() {  //this automatic methode first time running this class
    this.loadDataMahasiswa();
  }

  onClickSearch(){
    this.mahasiswaService.search(this.searchData).subscribe(
      output=>{
        this.mahasiswa = output;
      }, error=>{
        console.log(error);
      })
  } 

  loadDataMahasiswa(){
    this.mahasiswaService.findAll().subscribe(
      output=>{
        this.mahasiswa = output;
      }, error=>{
        console.log(error);
      })
  }

  onClickEdit(m){
    this.mahasiswaService.setter(m); //create setter method to form using ngModel
    this.router.navigate(["edit"]);
  }

  onClickAdd(){
    this.router.navigate(["add"]);
  }

  onClickDel(getId) {
    this.mahasiswaService.delete(getId).subscribe(
      data=>{
        this.loadDataMahasiswa();
      },error=>{
         console.error();
      });
  }

 
 

}
