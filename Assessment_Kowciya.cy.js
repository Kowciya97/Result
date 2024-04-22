describe('Contact page', () => {


    it('Check the Url - dev.fakturaonline.cz', () => {

      cy.visit('https://dev.fakturaonline.cz', 'cz');
      cy.wait(3000);

      cy.contains('Kontakty').click({force:true});
      cy.url('/navody/kontakty').should('include', 'kontakty');
      cy.wait(3000);

      // Testcase 1 - Check the Image clicking option
      cy.xpath("//img[@alt='Správa kontaktů']").click();
      cy.wait(3000);
        // Check LinkedIN option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-linkedin fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Twitter option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-twitter fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Facebook option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-facebook-f fa-lg'])[1]").click();
        cy.wait(3000);
        // Back to the Kontakty page 
        cy.xpath("//li[@class='breadcrumb-item']//a[normalize-space()='Kontakty']").click();
        cy.wait(3000);

      // Testcase 2 - Check the Správa kontaktů option
      cy.xpath("//h4[contains(text(),'Správa kontaktů')]").click();
        // Check LinkedIN option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-linkedin fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Twitter option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-twitter fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Facebook option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-facebook-f fa-lg'])[1]").click();
        cy.wait(3000);
        // Back to the Kontakty page 
        cy.xpath("//li[@class='breadcrumb-item']//a[normalize-space()='Kontakty']").click();
        cy.wait(3000);

      // Testcase 3 - Check the Přečíst článek → option
      cy.xpath("(//a[contains(text(),'Přečíst článek →')])[1]").click();
        // Check LinkedIN option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-linkedin fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Twitter option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-twitter fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Facebook option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-facebook-f fa-lg'])[1]").click();
        cy.wait(3000);
        // Back to the Kontakty page 
        cy.xpath("//li[@class='breadcrumb-item']//a[normalize-space()='Kontakty']").click();
        cy.wait(3000);

      // Testcase 4 - Back to the Navody page
      cy.xpath("//li[@class='breadcrumb-item']//a[normalize-space()='Návody']").click();
      cy.wait(3000);

      // Testcase 5 - Back to the Home page 
      cy.xpath("(//span[@class='icon icon-home'])[1]").click();
      cy.wait(3000);

    });

    it('Check the Url - dev.invoiceonline.com', () => {

      cy.visit('https://dev.invoiceonline.com/', 'en');
      cy.wait(3000);

      cy.contains('Contact').click({force:true});
      cy.url('/tutorials/contact').should('include', 'contact');
      cy.wait(3000);

      // Testcase 1 - Check the Image clicking option
      cy.xpath("//img[@alt='Contacts']").click();
      cy.wait(3000);
        // Check LinkedIN option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-linkedin fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Twitter option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-twitter fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Facebook option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-facebook-f fa-lg'])[1]").click();
        cy.wait(3000);
        // Check the users of subscription option
        cy.xpath("//a[normalize-space()='InvoiceOnline.com']").click();
        cy.wait(3000);
        // Back to the Contact page 
        cy.xpath("//li[@class='breadcrumb-item']//a[normalize-space()='Contact']").click();
        cy.wait(3000);
        
      // Testcase 2 - Check the Contacts Managed option
      cy.xpath("//h4[normalize-space()='Contacts']").click();
      cy.wait(3000);
        // Check LinkedIN option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-linkedin fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Twitter option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-twitter fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Facebook option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-facebook-f fa-lg'])[1]").click();
        cy.wait(3000);
        // Check the users of subscription option
        cy.xpath("//a[normalize-space()='InvoiceOnline.com']").click();
        cy.wait(3000);
        // Back to the Contact page 
        cy.xpath("//li[@class='breadcrumb-item']//a[normalize-space()='Contact']").click();
        cy.wait(3000);

      // Testcase 3 - Check the Read the article → option  
      cy.xpath("(//a[contains(text(),'Read the article →')])[1]").click();
      cy.wait(3000);
        // Check LinkedIN option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-linkedin fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Twitter option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-twitter fa-lg'])[1]").click();
        cy.wait(3000);
        // Check Facebook option
        cy.xpath("(//*[name()='svg'][@class='svg-inline--fa fa-facebook-f fa-lg'])[1]").click();
        cy.wait(3000);
        // Check the users of subscription option
        cy.xpath("//a[normalize-space()='InvoiceOnline.com']").click();
        cy.wait(3000);
        // Back to the Contact page 
        cy.xpath("//li[@class='breadcrumb-item']//a[normalize-space()='Contact']").click();
        cy.wait(3000);

      // Testcase 4 - Back to the Tutorials page
      cy.xpath("//li[@class='breadcrumb-item']//a[normalize-space()='Tutorials']").click();
      cy.wait(3000);

      // Testcase 5 - Back to the Home page 
      cy.xpath("(//span[@class='icon icon-home'])[1]").click();
      cy.wait(3000);
    });

    it('Check the Url - dev.fakturaonline.sk', () => {

      cy.visit('https://dev.fakturaonline.sk/', 'sk');
      cy.wait(3000);

      cy.contains('Kontakt').click({force:true});
      cy.url('/vyukove-materialy/kontakt').should('include', 'kontakt');
      cy.wait(3000);

      // Testcase 1 - Back to the Home page 
      cy.xpath("(//span[@class='icon icon-home'])[1]").click();
      cy.wait(3000);
    });

  });