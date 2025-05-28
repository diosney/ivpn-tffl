import {
  AnimationTriggerMetadata,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const spin: AnimationTriggerMetadata = trigger('spin', [
  state('static', style({
    transform: 'rotate(0deg)'
  })),
  state('spin', style({
    transform: 'rotate(360deg)'
  })),
  transition('static <=> spin', animate('2s linear'))
]);
