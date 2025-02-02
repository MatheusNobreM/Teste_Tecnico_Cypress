import LoginElements from "../Elements/loginElements";
import { users } from "../Inventory Test/Mock";

const loginElements = new LoginElements

const MsgError = 'Epic sadface: Username and password do not match any user in this service'
const MsgLocked = 'Epic sadface: Sorry, this user has been locked out.'

class LoginPage{
    CheckPage(){
        cy.contains('Products').should('be.visible');
    }

    loginValid(){
        cy.get(loginElements.User()).type(users.standard_user.username);
        cy.get(loginElements.Password()).type(users.standard_user.password);
        cy.get(loginElements.LoginBtn()).click();
    }

    loginError(){
        cy.get(loginElements.User()).type("user");
        cy.get(loginElements.Password()).type(users.standard_user.password);
        cy.get(loginElements.LoginBtn()).click();
    }

    LoginLocked(){
        cy.get(loginElements.User()).type(users.locked_out_user.username);
        cy.get(loginElements.Password()).type(users.locked_out_user.password);
        cy.get(loginElements.LoginBtn()).click();
    }

    LoginPerformanceGlitch(){
        cy.get(loginElements.User()).type(users.performance_glitch_user.username);
        cy.get(loginElements.Password()).type(users.performance_glitch_user.password);
        cy.get(loginElements.LoginBtn()).click();
    }

    CheckLogin(){
        cy.get(loginElements.LoginBtn()).should('contain', 'Login')
    }

    CheckMessageError(){
        cy.get(loginElements.MenssagenError()).should('contain', MsgError)
    }

    CheckMessageLocked(){
        cy.get(loginElements.MenssagenError()).should('contain', MsgLocked)
    }

    logout(){
        cy.get(loginElements.MenuBtn()).click();
        cy.get(loginElements.LogoutBtn()).click();
    }
}
export default LoginPage;