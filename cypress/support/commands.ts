/// <reference types="cypress" />

import { Selector } from "testcafe";

Cypress.Commands.add("getByData", (Selector) => {
	return cy.get("[data-test = ${selector}]");
});
