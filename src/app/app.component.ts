import { Component } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormProject';
  public inputlVal =""
  public gender=""

  user:{name:'',gmail:'',gender:''} ={name:'',gmail:'',gender:''}
  users:{name:'',gmail:'',gender:''}[]=[];

  addData(){
    this.users.push(this.user)
    this.user={name:'',gmail:'',gender:''};
  }
  remove(obj:any){
    this.users
  }
  // constructor(public f : FilterPipe){
  // }
  // filterData(){
  //   this.users = this.f.transform(this.users,this.inputlVal,this.gender)
  // }
}
