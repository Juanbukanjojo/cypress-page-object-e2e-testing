🚀 Cypress Automation Portfolio Project


This repository contains an End-to-End (E2E) automation testing project built using **Cypress**.  
The main purpose of this project is to demonstrate QA automation best practices for **portfolio purposes**.

--- 
## 📌 Project Overview

This project is an end-to-end test automation portfolio project built using Cypress. It demonstrates real-world QA automation practices including:

- UI automation testing
- Page Object Model (POM) implementation
- Custom Cypress Commands
- Negative and Positive Test Scenarios
- Test Data Management using Fixtures
- Dynamic Test Data Generation (Dynamic Email)

## ⚠️ Important Note
This project is created for portfolio and learning purposes only.
All test data (emails, names, etc.) are dummy data and not real user data.

## 🎯 Project Goals

This project is designed to showcase:

✅ Clean automation structure
✅ Reusable automation components
✅ Realistic QA test scenario coverage
✅ Maintainable and scalable test architecture
✅ Understanding of real QA workflow

## 🧪 Application Under Test

Website:
👉 https://automationexercise.com/

Tested Features:

- User Registration
- User Login
- Account Creation Flow

## Project Structure
cypress/
 ├── e2e/
 │    └── auth/
 │         ├── login.cy.js
 │         ├── register.cy.js
 │         └── accountcreation.cy.js
 │
 ├── fixtures/
 │    └── user.json
 │
 ├── pages/
 │    └── accountcreationpage.js
 │
 ├── support/
 │    ├── commands.js
 │    └── e2e.js

## 🧱 Framework Design Pattern
Page Object Model (POM)

Used to:
- Separate locators from test logic
- Improve maintainability
- Make tests reusable 

Example:
- accountcreationpage.js contains element locators and page actions 


## Custom Commands

Located in:

cypress/support/commands.js

Example:
- cy.signup()
- cy.login()

Purpose:
- Reduce duplicated code
- Improve test readability

## Fixtures (Test Data)

Located in:

cypress/fixtures/user.json

Used for:
- Centralized test data management
- Easier data modification

## ✉️ Dynamic Test Data

Dynamic email generation is used to avoid duplicate registration failures.
Example Concept:

test + timestamp + @gmail.com

Benefit:
- Prevents "Email already exists" errors
- Makes tests more stable

## 🧪 Test Coverage

## 👁️ Visual Tests
Validate UI elements exist and are visible:
- Input fields
- Buttons
- Forms

## ❌ Negative Tests
Validate system rejects invalid inputs:
Examples:
- Empty fields
- Invalid email format
- Missing password
- Invalid credentials

## ✅ Positive Tests
- Validate successful flows:
- Examples:
- Successful Login
- Successful Registration
- Successful Account Creation

▶️ How To Run Project
1️⃣ Install Dependencies
npm install
2️⃣ Open Cypress Test Runner
npx cypress open
3️⃣ Run Headless Mode
npx cypress run


## 📈 Future Improvements (Planned)

API Testing Integration


## 👨‍💻 Author Notes

This project reflects how I approach automation testing:

- I prioritize readability and maintainability
- I focus on real user behavior scenarios
- I design tests to be scalable for real production use


## 📌 Portfolio Disclaimer

This project is built as:

- Learning material
- Skill demonstration
- Automation portfolio showcase
- Not intended for production use.


## 👤 Author

**Dwiputra Juan Ambadatu**
Intern QA Engineer | Manual & Automation Testing
Tech Stack: Cypress, JavaScript, Git, GitHub

📎 Notes

This project is created as part of a QA Automation learning journey and portfolio showcase.