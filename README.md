# **_Curb Alert_**

### _Capstone Project for Epicodus Bootcamp_

#### Created By: **Christopher Neal**

![Curb Alert Logo](./src/assets/logo400.png)

![Curb Alert Demo Gif](./screenshots/animated-demo-smaller.png)

## Technologies Used

- _Javascript_
- _React Native_
- _npm_
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

- First, set up environment following the [React Native Documentation](https://reactnative.dev/docs/environment-setup) for iOS as your target OS using the 'React Native CLI Quickstart' tab
- Clone the GitHub repository: https://github.com/ChristopherMNeal/CurbAlert
- From the main project directory, run `npm install` in the terminal to load necessary plugins and packages.
- Run `cd ios` to move into the `ios` directory
- Run `pod install` install the CocoaPods packages for ios
- Then run `cd ..` to move back to the main directory
- Finally, to build the project and load onto the ios simulator, run `npx react-native run-ios` (Android is not supported at this time.)

## Features

- Allow users to post a picture with location
- Allow users to add an optional title and description to a post
- Allow users to see nearby posts, by user location
- Allow users to mark posts as “Taken,” have posts disappear after 2 hours (currently set to 20 seconds for development)
- Allow users to report posts as inappropriate and have them removed pending review
- Allow users to tag a post with a thumbs up to indicate it's still there and in good condition
- Only allow users to mark posts as “Taken” if they are within 500ft
- Allow for different class of posts that can’t be marked as “Taken” but automatically expires after a week for things like fruit trees, or tiny libraries (expiration not implemented yet)

## Known Bugs

- _Map does not update predictably when location updates._
- _App does not build for Android_

## Future Updates

- Allow users to update a listing: If a user is making a post within 100 feet of an existing listing, ask whether they are updating it or createing a new listing
- Improve UI to make navigation more intuitive
- Standardize and improve styling to accomodate different screen sizes
- Support build on Android
- Change is_damaged to a count instead of a boolean, have it removed if it gets 5 thumbs downs
- Feature an item if it has 5+ thumbs ups
- Limit thumbs up to one per person per listing and update the UI to reflect when the user has already thumbs-upped the listing
- Add optional 'type' to the database schema, eg: furniture, books, kitchenware, etc
- Customize map markers with icons to represent the type of item it is
- Sort listings by type, distance, time posted
- Save actual photos to Firebase
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
- Add metric measurements option

### License

_[MIT](https://opensource.org/licenses/MIT)_
Copyright (c) _2022_ _Christopher Neal_

### Support and Contact Details

- _[christopher.m.neal@gmail.com](mailto:christopher.m.neal@gmail.com)_
