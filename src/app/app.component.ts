import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyPipePipe } from './my-pipe.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, CommonModule, MyPipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically';
  celsiusValue: number = 0;

  // Students = [
  //   {Id: 101, Name: "Umair", Gender: "Male"},
  //   {Id: 102, Name: "Amna", Gender: "Female"},
  //   {Id: 103, Name: "Bilal", Gender: "Male"},
  // ]
  
}
