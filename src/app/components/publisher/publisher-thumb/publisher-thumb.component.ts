import { Component, Input } from '@angular/core';
import { Publisher } from 'src/app/models/publisher';

@Component({
  selector: 'app-publisher-thumb',
  templateUrl: './publisher-thumb.component.html',
  styleUrls: ['./publisher-thumb.component.scss']
})
export class PublisherThumbComponent {
  
  @Input()
  publisher: Publisher | null = null;


}
