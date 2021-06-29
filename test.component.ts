import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'centizen-cart-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.onCheck('WELCOME');
  }
  onCheck(name){
    let count = 0; let result; let revCount = 0;
    for (let i =0 ;i < name.length; i++){
      count +=1;
      if((Math.floor(name.length/2) + count) == name.length){
        result = name[(Math.floor(name.length/2)-1)+count];
        console.log(result);
      }else{        
        result.append(name[(name.length +revCount) - name.length]);
        console.log(result);
      }
    }

  }
}
