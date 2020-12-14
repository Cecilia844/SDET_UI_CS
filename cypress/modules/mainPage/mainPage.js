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
    cy.scrollTo('bottom', { duration: 2000 });
    type(selectorRepository.INPUT_PAGE_NMB,pagenmb);
    click(selectorRepository.INPUT_PAGE_BTN);
}