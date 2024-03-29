import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number= 42;

get capitalizarName():string{
  return this.name.toUpperCase();
}


getHeroDescription():string{
  return `${this.name} - ${this.age}`;
}


changeHero():void{
   this.name= 'Arielman';
}

changeAge():void{
  this.age=36;
}

resetForm():void{
 // this.name= 'Ironman';
  this.age=42;

//   document.querySelectorAll('h1')!.forEach(element => {
 //    element.innerHTML= '<h1>DesdeTS</h1>';
 //  });

}

}
