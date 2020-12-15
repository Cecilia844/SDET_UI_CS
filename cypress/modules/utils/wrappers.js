/*
 * This module contains wrapper functions to elemental web actions.
 */

export const click = selector => {
    cy.get(selector)
      .click();
  };
  
  export const type = (selector, value) => {
    cy.get(selector)
      .clear()
      .type(value);
  };
  
  export const select = (selector, value) => {
    cy.get(selector)
      .select(value);
  };
  
  export const check = selector => {
    cy.get(selector)
      .check();
  };
  