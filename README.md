# **Real-Time Text Analysis and String Replacement**
This is a React web application that allows users to input text, get real-time statistics on the entered text, and perform string replacements dynamically. The app provides the following features:

### Unique Word Count:
Case-insensitive unique word counting.
### Character Count (Excluding Spaces and Punctuation):
Excludes spaces and punctuation to count only letters and numbers.

## String Replacement:
Replace all occurrences of a string with another string.

## Features
### 1. Real-Time Text Statistics
Unique Word Count: Displays the number of unique words as the user types in the text area. Words are considered case-insensitive, so "Hello" and "hello" are treated as the same word.
Character Count: Shows the count of characters entered, excluding spaces and punctuation (letters and numbers only).
### 2. String Replacement
Two input fields are provided for string replacement:
Input 1: The string you want to search for.
Input 2: The string you want to replace it with.
A "Replace All" button replaces all occurrences of the first string with the second string in the textarea.
The replacement is case-sensitive.
## Demo
A live demo of the application can be found [here](https://text-analyzer-teal-alpha.vercel.app/).

## Installation
### Prerequisites
Node.js installed on your system.
Steps
### Clone the repository:

bash
Copy code
git clone https://github.com/your-username/text-analysis-replacement-app.git
### Navigate into the project directory:

bash
Copy code
cd text-analysis-replacement-app
### Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

## Usage
Type or paste text into the provided textarea.
### View real-time statistics:
Unique Word Count is updated as you type.
Character Count shows the number of characters (excluding spaces and punctuation).
### For string replacement:
Enter the string to be replaced in the first input field.
Enter the replacement string in the second input field.
Click the Replace All button to replace all occurrences of the string in the textarea.


TextAnalysis.js: Contains the core logic for real-time statistics and string replacement.
App.js: The main entry point for the application.
styles.css: Contains the CSS for styling the textarea and input fields.
Technologies Used
React.js - For building the user interface.
CSS - For styling the components.
How It Works
### Text Analysis:

The app listens to user input in the textarea and calculates the unique word count and character count in real-time.
Regular expressions are used to filter out spaces, punctuation, and ensure case-insensitivity.
### String Replacement:

The user enters the string to find and replace in two separate input fields.
Upon clicking the "`Replace All`" button, all occurrences of the first string are replaced by the second string in the textarea using JavaScript’s replaceAll method.
