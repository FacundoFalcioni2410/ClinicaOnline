import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
    state,
  } from '@angular/animations';

  export const slider = 
  trigger('routeAnimations', [
    transition(`* <=> *`, [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [style({ transform: 'translateY(150%)', opacity: 0 })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [animate('.8s ease-out', style({ transform: 'translateY(-150%)', opacity: 0 }))], { optional: true }),
          query(':enter', [animate('.8s ease-out', style({ transform: 'translatey(0%)', opacity: 1 }))], { optional: true })
         ]),
         query(':enter', animateChild(), { optional: true })
    ])
  ]);