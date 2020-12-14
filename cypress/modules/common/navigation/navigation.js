/**
 * This module includes all functions that are used for navigation.
 */

import { menu } from './menu';

export const goToSearchPage = () => cy.visit(menu.SEARCHURL);
