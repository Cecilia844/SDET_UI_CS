import { goToSearchPage
           } from '../modules/common/navigation/navigation';
import {
    closeDiscountPopup,
    typeSearchQuery,
    clickSearchButton,
    goToPage
} from '../modules/mainPage/mainPage';

describe('Main page - Open', () => {

    before(() => {
        goToSearchPage();
    });

    it('Product Search - Iphone', () => {

        typeSearchQuery('Iphone');
    
        clickSearchButton();

        //closeDiscountPopup();
        goToPage('2');
    });
});