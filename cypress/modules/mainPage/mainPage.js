/**
 * This module contains all functions that are used only when interacting with Main page.
 */

import { selectorRepository } from './selectors';
import { click, type, select, check } from '../utils/wrappers';

export const closeDiscountPopup = () => {
    cy.wait(5000);
    cy.get(selectorRepository.DISC_POP_UP).should('be.visible');
    click(selectorRepository.DISC_POP_UP_X);
  };

 export const typeSearchQuery = textToSearch => {
     type(selectorRepository.SEARCH_TYPE,textToSearch);
 } 

 export const clickSearchButton = () => click(selectorRepository.SEARCH_BUTTON);

export const popUpDisplayed = popUpToClose => {
    cy.get(popUpToClose).should('be.visible')
}

export const goToPage = pagenmb => {
    cy.wait(1000);
    cy.scrollTo('bottom', { duration: 1000 });
    type(selectorRepository.INPUT_PAGE_NMB,pagenmb);
    click(selectorRepository.INPUT_PAGE_BTN);
    cy.log('Opened 2nd results page');
}

export const clickOnSecondAd = () => {
    if(cy.get('.list-items').find('.list-item').eq(1))
        {            
            cy.log('Successfully find 2nd ad, proceding to open it...');
            cy.get(selectorRepository
                .SECOND_IMG_AD).invoke('removeAttr', 'target').click()
        }
        else
        {
            throw new Error('Cannot find second ad');
        }
}

//will validate if 3 elements exists: quantity = 1 , 'Buy Now' button and 'Add to Card' button.
export const verifyProductAvailable = () => {
    
    cy.get(selectorRepository.PRODUCT_QTY)
    .find('div')
        .should(($div) => {
            expect($div, 'has expected text').to.contains.eq('1')
            })
        }
