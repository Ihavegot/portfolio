import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit{
  constructor(){}
  aboutMeData: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Libero nunc consequat interdum varius sit amet mattis. Eget gravida cum sociis natoque penatibus.",
    "Vulputate dignissim suspendisse in est ante in. Non arcu risus quis varius quam. Ultrices vitae auctor eu augue ut. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est."
  ];
  interests: string[] = [
    "Football",
    "Games",
    "Movies",
    "RPG",
    "Fantasy",
    "Gatcha"
  ];
  ngOnInit(): void {
    
  }
}
