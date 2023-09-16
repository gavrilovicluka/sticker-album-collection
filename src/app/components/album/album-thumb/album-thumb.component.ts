import { Component, Input } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-thumb',
  templateUrl: './album-thumb.component.html',
  styleUrls: ['./album-thumb.component.scss']
})
export class AlbumThumbComponent {

  @Input() 
  public album?: Album;

  ngOnInit() {
  }
}
