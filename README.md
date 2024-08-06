URBAN ROUTES AUTOMATED TAXI ORDER TESTS

This project is created with the purpose of testing the functionality of the web page Urban Routes. It thoroughly tests specific commonly used features to ensure the page functions as expected.
    The techniques used were the mocha functions "describe" and "it" to ensure locating where an error occurs is better described.
        We also imported functions from other files such as page.js where the locators for the elements and key functionalities are located and also the helper.js file in which a random phone number generator function is stored as well for the sake of keeping the actual test file "createAnOrder.e2e.js" much more organized.


1. Setting the address:
    This test calls on the browser url from the config file
        then calls on the function fillAddresses from the page.js file and the respective values for said addresses are set
            we then set two expect functions to ensure the from field and the to field have the values we've set in the fillAddresses function

2. Selecting Supportive Plan:
    This test calls on the browser url from the config file
        then calls on the forementioned fillAddresses function and the values are set
            we then declare the variable selectSupportive and assign it the value of the locator name from the page.js file
                Lastly we click said locator and add an expect function to ensure the element class now shows as "active" meaning it has been selected

3. Filling in the phone number
    This test calls on the browser url from the config file
        then calls on the forementioned fillAddresses function and the values are set
            we then declare the phoneNumber variable and assign it the forementioned helper.js function with a +1 area code value being added to it
                then we call on the submit button locator and add an expect that verifies that the added phone number is existing

4. Adding the credit card:
        This test calls on the browser url from the config file
            then calls on the forementioned fillAddresses function and the values are set
                we then call on the cardNmber locator from the page.js file and assign it two values covering the card number and the CVV number
                    Lastly we add two expects just like the Setting the address test to verify that both the card number and the CVV field have the set values

5. Writing a message for the driver:
        This test calls on the browser url from the config file
            then calls on the forementioned fillAddresses function and the values are set
                we then call on the driver message input locator from the page.js file and assign it a value
                    Lastly we add an expect that verifies the input field carries the set value we assigned

6. Ordering a blanket and handkerchief:
        This test calls on the browser url from the config file
            then calls on the forementioned fillAddresses function and the values are set
                we then delcare the selectBlankets variable and assign it the blanket and handkerchief button locator from the page.js file
                    next we call on the declared variable and add a click method
                        Lastly just as the Supportive plan we add an expect that verifies the element class now shows as "active" meaning the option has been selected

7. Ordering two ice creams:
        This test calls on the browser url from the config file
            then calls on the forementioned fillAddresses function and the values are set
                we then declare the variable selectIceCream and assign it the addIceCream locator from the page.js file
                    next we call on the declared selectIceCream variable and add the click method twice. Meaning the same line will be added two times to click the option two times
                        Lastly we can add an expect that verifies that the value of added ice creams will be 2

8. The car search modal appears:
        This test calls on the browser url from the config file
            then calls on the forementioned fillAddresses function and the values are set
                  we then declare the variable selectSupportive and assign it the value of the locator name from the page.js file
                    next we add the click method to the declared selectSupportive variable
                         we then declare the phoneNumber variable and assign it the forementioned helper.js function with a +1 area code value being added to it
                            we then call on the submit phone number locator to save the added phone number
                                 we then call on the cardNmber locator from the page.js file and assign it two values covering the card number and the CVV number
                                    we then delcare the openCarSearchModal variable and assign it the submitOrder locator from the page.js file
                                        we then call on the delcared openCarSearchModal variable and add the click method
                                            Finally we can add an expect verifying that the car search modal exists on the page

9. Waiting for driver info to appear in the modal:
        This test calls on the browser url from the config file
            then calls on the forementioned fillAddresses function and the values are set
                  we then declare the variable selectSupportive and assign it the value of the locator name from the page.js file
                    next we add the click method to the declared selectSupportive variable
                         we then declare the phoneNumber variable and assign it the forementioned helper.js function with a +1 area code value being added to it
                            we then call on the submit phone number locator to save the added phone number
                                 we then call on the cardNmber locator from the page.js file and assign it two values covering the card number and the CVV number
                                    we then delcare the openCarSearchModal variable and assign it the submitOrder locator from the page.js file
                                        we then call on the delcared openCarSearchModal variable and add the click method
                                            next we add a browser.pause of 33 seconds to allow the system to find a driver
                                                Finally we can add an expect that verifies that the driver info exists.


INSTRUCTIONS ON RUNNING THE TESTS:

*These tests are based on the webdriverIO framework so this must be installed onto your machine and into the project*

*These tests are also ran using node.js so this also must be initialized into your project*

How to initialized node.js:

First you must open your terminal and connect to your project using cd project-name
    Once you are in your project file you can run npm init --yes
        You will see something like this once node.js is initialized meaning you've done this correctly: 
    {
  "name": "sample-wdio-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


//This part can be skipped if you know how to install webdriverIO into your project//

To install webdriverIO:

    First you need to be within the root of your project file
        You may then run npx wdio config
            Next, you’ll be asked a series of questions. Some questions will require you to type in Y or N. Other questions will require you to use the arrow keys for up and down. The option highlighted in blue is the option you have selected and you press the Enter key to confirm your choice. 
                These are how you need to answer the questions:
                Q. Ok to proceed? 

              A.  Y

              Q.  A project named "test_setup_wdio" was detected at "/Users/<you username>/sample-wdio-project," correct? Note: the path will vary based on your OS. 
                
              A.  Y

              Q.  Where should your tests be launched? 
                
               A. local - for the E2E testing of web and mobile applications

              Q.  Where is your automation back end located?

               A. On my local machine

               Q.  Which framework do you want to use?

                	A. Mocha (https://mochajs.org/)

               Q. Do you want to use a compiler?

                	A. n

               Q. Do you want WebdriverIO to autogenerate some test files?

                  A.  Y
                
               Q. Where should these files be located?

               A. /Users/<you username>/sample-wdio-project/test/specs/*/.js Note: the path will vary based on your OS

                Q. Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)?

               A. N

               Q. Which reporter do you want to use?

               A. Spec

              Q. Do you want to add a plugin to your test setup?

             A. wait-for

             Q. Do you want to add a service to your test setup?

             A. chromedriver

              Q. What is the base url?

             A. http://localhost

             Q. Do you want me to run npm install?

             A. Y

*Ensure that you have chrome installed to run the tests*

If all is well when you run the 'npm run wdio' command you should see the tests automatically running through automatically opened browser windows.





