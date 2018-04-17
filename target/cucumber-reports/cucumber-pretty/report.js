$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addNewEmployee.feature");
formatter.feature({
  "line": 1,
  "name": "Orange HRM employee management",
  "description": "\r\nAs an admin\r\nI want to login to orangeHRM\r\nSo that I can add employees and manage records",
  "id": "orange-hrm-employee-management",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "create an employee",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is logged in and is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on pim link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin clicked on add employee button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin enters employee details as \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "admin can add more details",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname"
      ],
      "line": 25,
      "id": "orange-hrm-employee-management;create-an-employee;;1"
    },
    {
      "cells": [
        "raj",
        "rej"
      ],
      "line": 26,
      "id": "orange-hrm-employee-management;create-an-employee;;2"
    },
    {
      "cells": [
        "Ram",
        "Sur"
      ],
      "line": 27,
      "id": "orange-hrm-employee-management;create-an-employee;;3"
    },
    {
      "cells": [
        "David",
        "Dave"
      ],
      "line": 28,
      "id": "orange-hrm-employee-management;create-an-employee;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "create an employee",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is logged in and is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on pim link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin clicked on add employee button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin enters employee details as \"raj\" and \"rej\" and click on save button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "admin can add more details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_is_logged_in_and_is_on_homepage()"
});
formatter.result({
  "duration": 23984983945,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_click_on_pim_link()"
});
formatter.result({
  "duration": 5527833078,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_clicked_on_add_employee_button()"
});
formatter.result({
  "duration": 725054805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raj",
      "offset": 34
    },
    {
      "val": "rej",
      "offset": 44
    }
  ],
  "location": "StepDefsNewEmployee.admin_enters_new_employee_with(String,String)"
});
formatter.result({
  "duration": 2204873114,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_can_add_more_details()"
});
formatter.result({
  "duration": 2305960342,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "create an employee",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is logged in and is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on pim link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin clicked on add employee button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin enters employee details as \"Ram\" and \"Sur\" and click on save button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "admin can add more details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_is_logged_in_and_is_on_homepage()"
});
formatter.result({
  "duration": 26533101967,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_click_on_pim_link()"
});
formatter.result({
  "duration": 1593764373,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_clicked_on_add_employee_button()"
});
formatter.result({
  "duration": 639139365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 34
    },
    {
      "val": "Sur",
      "offset": 44
    }
  ],
  "location": "StepDefsNewEmployee.admin_enters_new_employee_with(String,String)"
});
formatter.result({
  "duration": 2121300919,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_can_add_more_details()"
});
formatter.result({
  "duration": 1837771220,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "create an employee",
  "description": "",
  "id": "orange-hrm-employee-management;create-an-employee;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is logged in and is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on pim link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin clicked on add employee button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin enters employee details as \"David\" and \"Dave\" and click on save button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "admin can add more details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_is_logged_in_and_is_on_homepage()"
});
formatter.result({
  "duration": 13244645992,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_click_on_pim_link()"
});
formatter.result({
  "duration": 1367425733,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_clicked_on_add_employee_button()"
});
formatter.result({
  "duration": 683720333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 34
    },
    {
      "val": "Dave",
      "offset": 46
    }
  ],
  "location": "StepDefsNewEmployee.admin_enters_new_employee_with(String,String)"
});
formatter.result({
  "duration": 1967703150,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsNewEmployee.admin_can_add_more_details()"
});
formatter.result({
  "duration": 2044354409,
  "status": "passed"
});
});