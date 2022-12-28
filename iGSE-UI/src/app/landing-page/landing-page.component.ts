import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  @HostListener('window:scroll', ['$event'])
  onScrollWindow(){
      const navEl = document.querySelector('.navbar');
      const navLinks = document.getElementsByClassName('navbar-toggle');
      const brand = document.querySelector('.navbar-brand')

      window.addEventListener('scroll', () => {
          console.log("Inside scroll")
          if(window.scrollY >= 56){
              console.log("Inside If statement");
              navEl.classList.add('navbar-scrolled');
              brand.classList.add('brand-color');
              Array.from(navLinks).forEach(element => {
                  console.log(element);
                  element.classList.remove('text-light');
                  element.classList.add('text-dark');
              });
          }
          else if(window.scrollY < 56){
              navEl.classList.remove('navbar-scrolled');
              brand.classList.remove('brand-color');
              Array.from(navLinks).forEach(element => {       
                  element.classList.add('text-light');
                  element.classList.remove('text-dark');
              });
          }
      });
  }
}
