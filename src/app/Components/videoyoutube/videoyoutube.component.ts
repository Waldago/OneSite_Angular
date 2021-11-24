import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-videoyoutube',
  templateUrl: './videoyoutube.component.html',
  styleUrls: ['./videoyoutube.component.css']
})
 
  export class VideoyoutubeComponent implements AfterViewInit, OnDestroy {
      @ViewChild('demoYouTubePlayer') demoYouTubePlayer !: ElementRef<HTMLDivElement>;
      videoWidth: number | undefined;
      videoHeight: number | undefined;
      @Input() id !: string;
 
      constructor(private _changeDetectorRef: ChangeDetectorRef) { }
 
      ngOnInit(): void {
      }
 
      ngAfterViewInit(): void {
        this.onResize();
        window.addEventListener('resize', this.onResize);
      }
 
      onResize = (): void => {
        // Automatically expand the video to fit the page up to 1200px x 720px
        this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
        this.videoHeight = this.videoWidth * 0.6;
        this._changeDetectorRef.detectChanges();
      }
 
      ngOnDestroy(): void {
        window.removeEventListener('resize', this.onResize);
      }
  }