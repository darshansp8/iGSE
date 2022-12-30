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
      url: '/user/user-dashboard'
    },
    {
      name: 'View & Pay Bills',
      icon: faFileInvoice,
      url: '/user/viewbill'
    },
    {
      name: 'Meter Reading',
      icon: faGaugeSimpleMed,
      url: '/user/meterreading'
    },
    {
      name: 'Top-Up',
      icon: faWallet,
      url: '/user/topup'
    },
    {
      name: 'Logout',
      icon: faRemove,
      url: '/'
    }
  ]
  constructor() {}

  ngOnInit(){

  }

}
