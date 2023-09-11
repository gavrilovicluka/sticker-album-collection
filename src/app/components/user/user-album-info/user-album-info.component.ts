import { Component, Input } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-user-album-info',
  templateUrl: './user-album-info.component.html',
  styleUrls: ['./user-album-info.component.scss']
})
export class UserAlbumInfoComponent {

  @Input() album: Album | null = null;

  

}
