import { url } from "./Mock";
import LoginPage from "../pageobjects/LoginPage";

const loginPage = new LoginPage

describe('Inventory - Login', () => {
  // As there are several tests performed at login, it would be more viable to use beforeEach
  beforeEach(()=> {
    cy.visit(url);
  })
  
  it('#1 Should login with valid credentials', () => {
    loginPage.loginValid()
    loginPage.CheckPage()
  });
  
  it('#2 Should login with valid credentials and do logout', () => {
    loginPage.loginValid()
    loginPage.logout()
    loginPage.CheckLogin()
  });
    
  it('#3 Should not login with invalid credentials', () => {
    loginPage.loginError()
    cy.wait(1000)
    loginPage.CheckMessageError()
  });

  it('#4 Should not allow "locked_out_user" do sign in', () => {
    loginPage.LoginLocked()
    cy.wait(1000)
    loginPage.CheckMessageLocked()
  });

  it('#5 Should login with "performance_glitch_user" and wait the products page loads', () =>{
    loginPage.LoginPerformanceGlitch()
    cy.wait(2000)
    loginPage.CheckPage()
  });
})