import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PokerAppComponent } from '../app/poker.component';

beforeEachProviders(() => [PokerAppComponent]);

describe('App: Poker', () => {
  it('should create the app',
      inject([PokerAppComponent], (app: PokerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'poker works!\'',
      inject([PokerAppComponent], (app: PokerAppComponent) => {
    expect(app.title).toEqual('poker works!');
  }));
});
