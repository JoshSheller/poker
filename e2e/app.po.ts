export class PokerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('poker-app h1')).getText();
  }
}
