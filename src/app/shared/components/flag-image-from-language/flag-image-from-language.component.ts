import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector   : 'app-flag-image-from-language',
  templateUrl: './flag-image-from-language.component.html',
  styleUrls  : ['./flag-image-from-language.component.scss']
})
export class FlagImageFromLanguageComponent implements OnChanges {
  @Input() language?: string;
  countryCode ?: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let languageChange = changes['language'];
    this.countryCode   = languageChange.currentValue.split('-')[1];
  }
}
