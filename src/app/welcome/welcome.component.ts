import { Component, HostBinding, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    
  }
}
