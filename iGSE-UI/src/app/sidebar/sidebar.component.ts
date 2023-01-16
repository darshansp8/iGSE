import { Component } from '@angular/core';
import { faChartArea, faFileInvoice, faGaugeSimpleMed, faHome, faPoundSign, faRemove, faWallet } from '@fortawesome/free-solid-svg-icons'
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // faHome = faHome
  // faFileInvoice = faFileInvoice
  faRemove = faRemove

  customerId = {
    'customerId':localStorage.getItem('username')
  }
  usersidebarList = [
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
    // {
    //   name: 'Logout',
    //   icon: faRemove,
    //   url: '/'
    // }
  ]

  adminSideBarList = [
    {
      name: 'Dashboard',
      icon: faHome,
      url: '/admin/admin-dashboard'
    },
    {
      name: 'View Meter Reading',
      icon: faFileInvoice,
      url: '/admin/meterReading'
    },
    {
      name: 'Set Tariff Rates',
      icon: faPoundSign,
      url: '/admin/setPrice'
    },
    {
      name: 'Statistics',
      icon: faChartArea,
      url: '/admin/statistics'
    },
    // {
    //   name: 'Logout',
    //   icon: faRemove,
    //   url: '/'
    // }
  ]

  role: string
  constructor(private authService: AuthenticationService) {}

  ngOnInit(){
    console.log(this.customerId.customerId)
    this.authService.getUserDetails()
      .subscribe((responseData) => {
        console.log(responseData)
        responseData.type === 'user'? this.role = 'user': this.role = 'admin';
      })
  }

}
