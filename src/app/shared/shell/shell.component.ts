import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs'; 

// Check the Observaable and filter the results passed back. map is going to filter
// information and keep asking the device over and over to share that info with shareReplay
// map 
import { map, shareReplay } from 'rxjs/operators'; 

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private BreakpointObserver: BreakpointObserver) { }
  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
        .pipe(
          map(result => result.matches), shareReplay()
        )

  ngOnInit(): void {
  }

}
