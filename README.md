# Engineer AI Practical Test
Engineer AI Practical Test


### Usage

```
git clone https://github.com/samir-tatva/13c9fcb3be4e91233bb3.git
cd 13c9fcb3be4e91233bb3
yarn
```

### Available Commands

```
react-native run-android - start app on android emulator 
react-native run-ios - start app on ios simulator 
```

Definition:

First screen will have one text input and button. Button will remain disabled until user enter anything in text input.
It will fetch list of countries based on the user input when clicked on Submit button. 

Currently includes:
- React Native
- React Navigation
- Saga

## Quick Start

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android or ios development](https://reactnative.dev/docs/environment-setup)

**Setup the project:**

- clone this repository
- install the npm dependencies by running `yarn` or `npm install`

**Run project by below command:**

### Android

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## Folder Structure

The project's structure will look similar to this:

```
13c9fcb3be4e91233bb3
├── src
│   ├── actions
│   ├── components
│   ├── constants
│   ├── containers
│   ├── reducers
│   ├── sagas
│   ├── services
│   ├── store
│   ├── utils
│   ├── App.js
├── __test__
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── my-upload-key.keystore
│   └── settings.gradle
├── index.js
├── app.js
├── ios
│   ├── EngineerAIExam
│   ├── EngineerAIExam-tvOS
│   ├── EngineerAIExam-tvOSTests
│   ├── EngineerAIExam.xcodeproj
│   └── EngineerAIExamTests
└── package.json

```

### ./src directory

Project source code is in the `src` directory.

The inside of the src directory looks similar to the following:

```
├── actions
├── components
├── constants
├── containers
├── reducers
├── sagas
├── services
├── store
├── utils
├── App.js
```

**components**
This is where your React components will live. Each component will have a directory containing the `.js` file. The app will come with some commonly used components like NavHeader, Theme resuable controls, loader etc.

**reducers**
This is where your app's redux component will live such as actions, reducers & store.

**sagas**
This is where your app's api call side effects will be handled.

**containers**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.js` file, along with styles files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, Graphql etc.).

**constants**
Here lives your application API_URL and other constants.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**index.js** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.