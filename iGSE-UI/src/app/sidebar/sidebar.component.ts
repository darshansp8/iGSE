import { Component } from '@angular/core';
import { faFileInvoice, faGaugeSimpleMed, faHome, faRemove, faWallet } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faHome = faHome
  // faFileInvoice = faFileInvoice
  sidebarList = [
    {
      name: 'Dashboard',
      icon: faHome,
      url: 'user'
    },
    {
      name: 'View & Pay Bills',
      icon: faFileInvoice,
      url: '/dashboard'
    },
    {
      name: 'Meter Reading',
      icon: faGaugeSimpleMed,
      url: '/dashboard'
    },
    {
      name: 'Top-Up',
      icon: faWallet,
      url: '/dashboard'
    },
    {
      name: 'Logout',
      icon: faRemove,
      url: '/dashboard'
    }
  ]
  constructor() {}

  ngOnInit(){

  }
}
