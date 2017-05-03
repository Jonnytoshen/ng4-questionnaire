import { Ng4QuestionnairePage } from './app.po';

describe('ng4-questionnaire App', () => {
  let page: Ng4QuestionnairePage;

  beforeEach(() => {
    page = new Ng4QuestionnairePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
