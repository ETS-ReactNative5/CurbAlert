# _Curb Alert_

### _Capstone Project for Epicodus Bootcamp_

#### Created By: **Christopher Neal**

## Technologies Used

- _Javascript_
- _React Native_
- _npm_
- _PropTypes_
- _UUID_
- _Babel_
- _React Native Vector Icons_

## Description

_This project was created as an independent Capstone project for Epicodus bootcamp. It shows proficiency in React Native._
_Curb Alert: Connecting Trash with Folks to whom it's Treasure. A user can upload an image of discarded furniture for others to see. A user can find discarded furniture near their location._

## Project Layout Diagram

![project-diagram](./project-diagram.png)

## Setup/Installation Requirements

- _React version 3.2.0_
- _React version 17.0.2_
- _React-Native version 0.67.2_
- _Xcode_
- _Watchman_
- _Android Studio_
  (For detailed information on environment setup, see [React Native's Documentation](https://reactnative.dev/docs/environment-setup))

### Basic Setup

- Clone the GitHub repository: [https://github.com/christophermneal/curb-alert](https://github.com/christophermneal/curb-alert)
- From the main project directory, run `npm install` in the terminal to load necessary plugins and packages.
<!-- - Run `npm install --save-exact react-scripts@3.2.0` to install React version 3.2.0
- Run `npm run start` to start the application. -->

## Known Bugs

_None as of 2/15/22 22:00_

### License

_[MIT](https://opensource.org/licenses/MIT)_
Copyright (c) _2022_ _Christopher Neal_

### Support and Contact Details

- _[christopher.m.neal@gmail.com](mailto:christopher.m.neal@gmail.com)_

## Proposal

### Name of Student: _Christopher Neal_

### Name of Project: _Curb Alert_

#### Project's Purpose or Goal:

_Allow users to find discarded furniture and housewares on the sidewalk. You see a couch on the curb. It’s in good shape but you already have a couch. You see rainclouds looming. That couch is going to get destroyed… unless somebody picks it up. You take a picture with Curb Alert, and the app automatically and anonymously posts the picture and location. Another user sees a listing of a sidewalk freebie nearby. They come to the location, pick it up, and hit the “Taken” button. The listing is marked as taken._

#### List the absolute minimum features the project requires to meet this purpose or goal:

- Allow users to post a picture with location
- Allow users to see nearby posts, by user location or by entering zip code
- Allow users to mark posts as “Taken,” have posts disappear after x hours

#### What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

- JavaScript
- React Native
- Firebase
- Access to location and camera
- Map interface module

#### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

- Allow for different class of posts that can’t be marked as “Taken” but automatically expires after a week for things like fruit trees, or tiny libraries
- Allow app to notify user when there’s a new post in their area
- Allow user authentication/authorization
- Allow users to report images as inappropriate
- Allow users to add a title to a post
- Only allow users to mark posts as “Taken” if they are nearby
- Allow users to tag a post with “still here”
- Allow users to update a post if one thing out of a group has been taken
- Allow multiple images per post, or allow other users to submit images to an existing post
- Allow users to anonymously thank the post maker
- Gamify app so users get points whenever something they post gets picked up
- Allow users to track their walk and get points for walking
- Allow users to see nearby roads that have been recently trafficked by other users

#### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

- Google-based React authentication with firebase

#### Is there anything else you'd like your instructor to know?

- This app only makes sense on mobile, so I’m eager to learn React Native to make it happen.

## Research & Planning Log

### Tuesday, 02/15

- 7:56PM: Begin watching [Traversy Media React Native Crash Course Video](https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=709s)
- 8:42PM: Begin setting up environment using [React Native Docs](https://reactnative.dev/docs/environment-setup)
- 10:00PM: Create README
- 10:22PM: Finish for the day

### Friday, 02/17

- 8:00AM - 9:10AM Finish setting up dev environment and walk through [Traversy Media React Native Crash Course Video](https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=709s) to set up "Hello World" view

- 10:22AM - 11:32AM Continue working through [Traversy Media React Native Crash Course Video](https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=709s) to set up state and delete functionality. Got to 40:18 on video.

-11:32AM - 12:43PM BUGFIX: troubleshoot importing UUIDV4 and ReactNativeVectorIcons


BUGFIX PROCESS:
It may be a problem with CocoaPods. In your terminal, cd into `ProjectName/ios` and run `pod install`.  

If you get an error that includes `incompatible library version` you may need to update your version of Ruby. In your main project directory, check the ruby version in the `.ruby-version` file. The current stable build is 3.0.3.

Try updating ruby: run `brew install ruby-install --HEAD`.  
Then run `gem install cocoapods` to update cocoapods.  
Then run `pod install` to install/update the ruby gems.