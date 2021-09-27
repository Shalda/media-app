// Straight Jasmine testing without Angular's testing support
import {ChangeCardsViewService} from "./change-cards-view.service";

describe('ChangeCardsViewService', () => {
  let changeViewService: ChangeCardsViewService;
  it('get should return value: grid', function () {
    changeViewService = new ChangeCardsViewService();
    changeViewService.getCardsViewListener().subscribe(
      (data: string) => {
        expect(data).toEqual('grid', 'expected value: LIST ');
      }
    );
  });
  it('change should emit value: list', function () {
    changeViewService = new ChangeCardsViewService();
    changeViewService.changeView();
    changeViewService.getCardsViewListener().subscribe(
      (data: string) => {
        expect(data).toEqual('list', 'expected value: LIST ');
      }
    );
  });
})
