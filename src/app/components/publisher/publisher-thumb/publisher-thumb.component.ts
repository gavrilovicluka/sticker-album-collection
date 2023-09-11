import { Component, Input } from '@angular/core';
import { Publisher } from 'src/app/models/publisher';
import { AuthLinksViewModal } from 'src/app/store/selectors/auth.selectors';
import { HeaderViewModel } from 'src/app/store/selectors/header.selectors';

@Component({
  selector: 'app-publisher-thumb',
  templateUrl: './publisher-thumb.component.html',
  styleUrls: ['./publisher-thumb.component.scss']
})
export class PublisherThumbComponent {

  @Input() publisher: Publisher | null = null;

}
