import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  p{
    width:200px;
    background:lightgray;
    margin:100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
  h1{
    text-decoration: underline;
  } 
    `],
    animations:[
      trigger('myAwesomeAnimation',[
          state('small',style({
              transform:'scale(1)',
          })),
          state('large',style({
            transform:'scale(1.2)',
        })),

        transition('small<=>large',animate('300ms ease-in',keyframes([
          style({opacity:0,transform:'translateY(-75%)',offset:0}),
          style({opacity:1,transform:'translateY(35px)',offset:0.5}),
          style({opacity:1,transform:'translateY(0)',offset:1})
        ]))),
      ]),
    ]
})
export class AppComponent {

  

  onSubmit=function(user){
    console.log(user);
  }
  
  title:string='My first Angular 4 app!';

  state:string='small';

  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';

  constructor(private fb: FormBuilder,private dataService:DataService) { 

    this.someProperty=dataService.myData();

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });

  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

  animateMe(){
    this.state=(this.state==='small'?'large':'small');
  }

  someProperty:string='';

  

  titleStyles={
    'color':'red',
    'font-size':'4em'
  };

  myEvent(event){
    console.log(event);
  };

  buttonStatus=false;

  myArr=true;

  myObject={
    gender : 'male',
    age : 27,
    location : 'Pune'
  };

  angularLogo='http://materializecss.com/images/sample-1.jpg';

}
