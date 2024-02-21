import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){}
  ngOnInit(){}


  toAbout(){
    const aboutSection = document.getElementById("about-us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }

  }
  toProduct(){
    const aboutSection = document.getElementById("products");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }

  }
  toContact(){
    const aboutSection = document.getElementById("contact-us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }

  }


}
