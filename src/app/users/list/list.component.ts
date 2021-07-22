import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
users:User[]=[];
  constructor(
    private userService: UsersService ) { }

  ngOnInit(): void { this.getAllUser();
  }


  getAllUser(){
  this.userService.getAll().subscribe(res => {
      this.users = res;
    console.log(res);

  })
}


deleteUser(id:number){
  this.userService.delete(id).subscribe(res =>{
    if(res.status == 'success'){
      this.users = res;
      this.getAllUser();
    }


  })
}
}


