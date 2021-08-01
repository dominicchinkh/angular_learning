import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  programs = ['BODYPUMP', 'BODYATTACK', 'BODYCOMBAT'];

  constructor() { }

  ngOnInit(): void {
  }

  trainedInPrograms(program: string): boolean {
    return this.programs.includes(program);
  }
}
