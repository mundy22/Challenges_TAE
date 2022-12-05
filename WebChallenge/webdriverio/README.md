# AutomWebJsWebdriverioMocha

## WebDriver.io (https://webdriver.io/) - (framework used with JAVA 8 worked fine)

It's a great choice if we want to automated web apps using Javascript. There are other frameworks like cypress BUT cypress DOES NOT USE SELENIUM UNDER THE HOOD. If we want to still depend uopn selenium but code in Javascript then Webdriver.io is the right choice.

### Getting started:

  0. Node & npm should be previously installed
  1. Go to local repository
  2. Create a new folder to act as root folder for our project. Ex: "webdriverio" folder.
  3. With cmd and from inside this root folder execute "npm init wdio ." command.<br />
	Some options will appear to be selected, we should choose:<br />
             A. "On my local machine"<br />
             B. "mocha" (which has a tight integration with webdriverio to perform lot of assertions)<br />
             C. "No!" to the compiler question<br />
             D. Hit enter to go with the default location for specs.<br />
             E. Type "Y" to autogenerate some test files.<br />
             F. Type "Y" to autogenerate some page objects files.<br />
             G. Hit enter to go with the default location for page objects.<br />
             H. "spec" which is the default one for reporting.<br />
             I. Hit enter to go with default option on plugin setup.<br />
             J. "chromedriver" to start with that service in our test setup.<br />
             K. Hit enter on base url to skip it.<br />
             L. Type "Y" to run npm install.<br />
  4. open the new project created with an IDE (Visual Studio Code recommended).

-------------------------------------------------------------------

### AUTOCOMPLETION:

For the project to work correctly with autocompletion on VisualStudio, create a .json file called "jsconfig.json" on the root folder with the following information inside:



	{
   	 	"compilerOptions": {
      	    "types": [
          	  "node",
            	"webdriverio/async",
            	"@wdio/cucumber-framework"
       		]
    	},

    	"include": [
        	"test/specs/*.js",
        	"**/*.json",
        	"node_modules/@wdio/sync",
        	"node_modules/@wdio/mocha-framework"
    	]
	}


after adding this setting, RESTART VISUAL STUDIO.

-------------------------------------------------------------------

### RUNNING THE SCENARIOS:

Use the following command on cmd or IDE console: "npx wdio run ./wdio.conf.js"

	- "npx": is a shorcut to go straight up to node_modules/.bin/
	- "wdio": is the executable file responsible of running our testcases
	- "run": command to start the execution
	- "./wdio.conf.js": path of the testrunner which contains info about which tests to run.


#### Important - How to execute scenarios in firefox and edge:

	- Go to https://webdriver.io/docs/gettingstarted
	- Select selenium-standalone-service from the options
	- Extract and add latest "@wdio/selenium-standalone-service" dependency to package.json (currently "^7.7.4")
	- Run "npm install" to install the new dependency
	- On "wdio.sonf.json" change services to "services: ['selenium-standalone']"
	- On "wdio.sonf.json" capabilites change browserName to 'chrome', 'firefox' or 'MicrosoftEdge'.

#### Important - How to run selected scenarios only

	- First inside the "it" block description add some specic tag like '@smoke' or '-regression'.
	- Now use the command described above like this: 
		"npx wdio run ./wdio.conf.js --mochaOpts.grep @smoke"
		or
		"npx wdio run ./wdio.conf.js --mochaOpts.grep -regression"

#### Important - How to run our custom "suites" we defined on wdio.conf.js

	- Add any desired suite to the "suites" object as an array of suites
	- Now use the command described above like this: 
		"npx wdio run ./wdio.conf.js --suite regressionSuite"
		or
		"npx wdio run ./wdio.conf.js --suite smokeSuite"

#### Important - How to override spec parameter on wdio.conf.js from console

	- Use the command described above like this: 
		"npx wdio run ./wdio.conf.js --spec test/specs/exampleTests.js"
		or
		"npx wdio run ./wdio.conf.js --spec test/specs/exampleTests.js, test/specs/moreTests.js" to run multiple

#### Important - How to exclude spec files when running

	- Just add the desired spec to the "exclude" array on wdio.conf.js

#### Important - How to run a script from package.json

	- Add scripts to the package.json with the desired execution command. (example already set)
	- Run the desired script with something like:
		"npm run regression"
		or
		"npm run smoke"
		or
		"npm run qaRegression"
		or
		"npm run uatRegression"

-------------------------------------------------------------------

### RE-RUNNING THE SCENARIOS:

	We can re-run the scenarios that we consider flaky if they fail as many times as we consider. 
	To do so:
		- Change current it or describe block function from arrow to regular funcion.
		- Add "this.retries(2)" on the first line inside "it" or "describe" block.
			- Inside "it": will rerun only that rest.
			- Inside "describe": rerun mechanism will apply for all tests on the describe block.
	
	Example on "exampleTests.js" first test.


-------------------------------------------------------------------

### BALE AND BASEURL PARAMETERS

	-- Bale
		If you only want to run your tests until a specific amount of tests have failed use bail (default is 0 - don't bail, run all tests).

    	"bail: 0," can be located on "wdio.conf.js" file

	-- Baseurl
		Set a base URL in order to shorten url command calls. If your `url` parameter starts with `/`, the base url gets prepended, not including the path portion of your baseUrl.
        If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url gets prepended directly.

		"baseUrl: https://rahulshettyacademy.com," can be located on "wdio.conf.js" file

-------------------------------------------------------------------

### EXPECTATIONS:

All info related to expectations available can be found here: https://webdriver.io/docs/api/expect-webdriverio/

-------------------------------------------------------------------

### WAITS:

All info related to waits available can be found here: https://webdriver.io/docs/api

-------------------------------------------------------------------

### SKIPPING SCENARIOS:

	- To skip a SUITE add "x" before a describe block --> xdescribe
	- to skip a TEST add "x" before an it block --> xit

-------------------------------------------------------------------

### HOOKS 

	Only "afterTest" hook is used on "wdio.conf.js" to attach screenshots to failed tests.

	For more info go to: https://mochajs.org/#hooks

-------------------------------------------------------------------

### DEBUGGING (https://webdriver.io/docs/debugging/)

To enable debugging follow these steps:
	
	- Open VS Code.
	- Go to https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly and install it.
	- On projects root folder create a new folder called ".vscode".
	- Inside .vscode folder create a file called "launch.json" with the following info inside:
		
		{
    		"configurations": [
       			{
           			"name": "WebDriverIO Test",
          			"type": "node",
          			"request": "launch",
           			"args": ["wdio.conf.js"],
           			"cwd": "${workspaceFolder}",
           			"autoAttachChildProcesses": true,
            		"program": "${workspaceRoot}/node_modules/@wdio/cli/bin/wdio.js",
           			"console": "integratedTerminal",
            		"skipFiles": [
               			"${workspaceFolder}/node_modules/**/*.js",
               			"${workspaceFolder}/lib/**/*.js",
               			"<node_internals>/**/*.js"
           			]
      			}
    		]
		}

	- Now we can put a breakpoint in any code line of our tests (by clicking on the left side of the line number).
	- To start debugging go to "run" on the options at the top and hit "start debugging".

-------------------------------------------------------------------

### PARALLEL EXECUTIONS

	1. We must set the top amount of parallel browsers we want to run:
		- in wdio.conf.js search "maxInstances" (right on top of "capabilities").
	2. Set "specs[]" value to './test/specs/**/*.js' on wdio.conf.js to run all specs files.
	3. Run scenarios as usual.
		- execution will start with parallelization performed on suite level.
	4. IMPORTANT: "maxInstances" inside of "capabilites" will override the previous one so..
		- If we have set 2 or more outside capabilities and 1 inside: only 1 chrome browser will open to execute both suites.
		- If we have set 2 or more outside capabilities and 2 inside: 2 chrome browser will open and 1 suite will be executed on each one.

		- IMPORTANT: 
			- If we have set 2 or more outside capabilities and 1 inside chrome capabilities and 1 inside firefox capabilities: 2 browser will open and all suites will be executed in 1 chrome and all suites will be executed in 1 firefox too. (adding './test/specs/**/*.js' on firefox specs is needed for this).
			- Also firefox capabilities should be uncommented to work.

	5. acceptInsecureCerts: true -> is used to run on http sites (non https ones).

-------------------------------------------------------------------

### RUNNING IN HEADLESS MODE  (seems to present some unstability)

	-- CHROME (already added but not used)

	To enable it add the following block right below "browserName: 'chrome',"

	'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: ['--headless', '--disable-gpu'],
    },

	-- FIREFOX (already added but not used) - also firefox capabilities should be uncommented to work.

	To enable it add the following block right below "browserName: 'firefox',"

	'moz:firefoxOptions': {
        // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
        args: ['-headless']
    },

-------------------------------------------------------------------

### REPORTING

	Allure reports are used so after any execution use the command:
		- "allure generate [allure_output_dir] && allure open"
		or
		- "npm run generateReport"