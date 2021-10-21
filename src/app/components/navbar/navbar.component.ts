import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public firestore: FirestoreService, public auth: AuthService) { }

  ngOnInit(): void {
  }

}
