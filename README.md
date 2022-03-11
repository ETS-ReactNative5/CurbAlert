# **_Curb Alert_**

### _Capstone Project for Epicodus Bootcamp_

#### Created By: **Christopher Neal**

![Curb Alert Logo](./src/assets/logo.png)

![Curb Alert Demo Gif](./screenshots/animated-demo-smaller.gif)

## Technologies Used

- _Javascript_
- _React Native_
- _npm_
- _PropTypes_
- _UUID_
- _Babel_
- _React Native Vector Icons_
- _React Navigation_
- _Firebase/Firestore_
- _React Native Image Crop Picker_
- _React Native Location_
- _React Native Maps_
- _Google Maps API_
- _UUID V4_

## Description

> _This project was created as an independent Capstone project for Epicodus bootcamp. It shows proficiency in React Native._  
> _Curb Alert: Connecting Trash with Folks to whom it's Treasure. A user can upload an image of discarded furniture for others to see. A user can find discarded furniture near their location._

## Project Component Diagram

![Project Component Diagram](./project-diagram.drawio.png)

## Setup/Installation Requirements

- _React version 3.2.0_
- _React version 17.0.2_
- _React-Native version 0.67.2_
- _Xcode_
- _Watchman_
- _Android Studio_
  (For detailed information on environment setup, see [React Native's Documentation](https://reactnative.dev/docs/environment-setup))

### Basic Setup

- Clone the GitHub repository: https://github.com/ChristopherMNeal/CurbAlert
- From the main project directory, run `npm install` in the terminal to load necessary plugins and packages.
- Run `cd ios` to move into the `ios` directory
- Run `pod install` install the CocoaPods packages for ios
- Then run `cd ..` to move back to the main directory
- Finally, to build the project and load onto the ios simulator, run `npx react-native run-ios` (Android is not supported at this time.)

## Known Bugs

- _Map does not update predictably when location updates._
- _App does not build for Android_

## Future Updates

- Improve updating to remove need for update button
- Improve UI to make navigation more intuitive
- Standardize and improve styling to accomodate different screen sizes
- Support build on Android
- Change is_damaged to a count instead of a boolean, have it removed if it gets lots of thumbs downs
- Have an item featured if it has lots of thumbs ups
- Customize map markers
- Save actual photos to database?
- DRY and organize code
- Use best practices for hiding API keys
- Allow user authentication/authorization
- Enable admin users to review flagged posts
- Allow users to update (instead of replace) a post if one thing out of a group has been taken
- Allow app to notify user when there’s a new post in their area
- Allow multiple images per post, or allow other users to submit images to an existing post
- Allow users to anonymously thank the post maker
- Gamify app so users get points whenever something they post gets picked up
- Allow users to track their walk and get points for walking
- Allow users to see nearby roads that have been recently trafficked by other users

### License

_[MIT](https://opensource.org/licenses/MIT)_
Copyright (c) _2022_ _Christopher Neal_

### Support and Contact Details

- _[christopher.m.neal@gmail.com](mailto:christopher.m.neal@gmail.com)_
