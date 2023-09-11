import { Component, Input } from '@angular/core';
import { Publisher } from 'src/app/models/publisher';

@Component({
  selector: 'app-publisher-thumb-home',
  templateUrl: './publisher-thumb-home.component.html',
  styleUrls: ['./publisher-thumb-home.component.scss']
})
export class PublisherThumbHomeComponent {

  @Input() publisher: Publisher | null = null;
}
