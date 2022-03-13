# Curb Alert

## Epicodus Capstone Project Proposal

#### **Name of Student:** Christopher Neal

#### **Name of Project:** Curb Alert

### **Project's Purpose or Goal:**

> Allow users to find discarded furniture and housewares on the sidewalk. You see a couch on the curb. It’s in good shape but you already have a couch. You see rainclouds looming. That couch is going to get destroyed… unless somebody picks it up. You take a picture with Curb Alert, and the app automatically and anonymously posts the picture and location. Another user sees a listing of a sidewalk freebie nearby. They come to the location, pick it up, and hit the “Taken” button. The listing is marked as taken.

### MVP:

#### **List the absolute minimum features the project requires to meet this purpose or goal:**

- Allow users to post a picture with location
- Allow users to see nearby posts, by user location or by entering zip code
- Allow users to mark posts as “Taken,” have posts disappear after x hours

#### **What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.**

- JavaScript
- React Native
- React Native Image Crop Picker
- React Native Maps
- React Native Location
- Firestore

### Stretch Goals:

#### **If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.**

- Accomplished Stretch Goals:

  - Allow users to report images as inappropriate
  - Allow users to add a title to a post
  - Allow users to tag a post with “still here”
  - Only allow users to mark posts as “Taken” if they are nearby
  - Allow for different class of posts that can’t be marked as “Taken” but automatically expires after a week for things like fruit trees, or tiny libraries

- Future Updates:
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

#### **What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?**

- Firebase Authentication
