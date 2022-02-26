# **_Curb Alert_**

## **Work In Progress: 2/15/22 through 3/10/22**

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

## Project Component Diagram

![Project Component Diagram](./project-diagram.drawio.png)

Components:

- Header

  - logo (link to ItemMap)
  - Settings link button (ideally opens camera, then uses image in form)
  - NewItem link button

- Settings

  - email
  - password
  - update email/password
  - default location
  - notification settings?
  - signout

- AddItem (appears after taking a picture?)

  - picture (should be automatic)
  - location (should be automatic)
  - title
  - detail

- ItemDetail

  - image
  - map
  - title
  - description
  - timestamp
  - is_taken (only appears if true, plus timestamp)
  - take button (unless can_take is false)
  - is_damaged (only appears if true)
  - damaged button
  - thumbs_up button
  - thumbs_up count (if count > 0)
  - update button
  - flag as innapropriate

- ItemMap

  - image
  - location (as map)
  - title?

- ImageList
  - image
  - title
  - distance from current location
  - description

## Database Schema

users:

- email (required)
- password (required)
- is_admin, boolean (default false)
- default_location, zipcode (for push notifications)
- current_location, coordinates? (ideally from GPS, or entered zipcode, required)
- is_banned, boolean (default false, for users with malicious content)

items:

- posting user_id (allow multiple if )
- image, image file (required)
- location, coordinates? (pull from image or current location?, required)
- title, string (limit 50 chars)
- description, string (limit 140 chars)
- timestamp (listing should dissapear 1 week after being posted unless taken before)
- display, boolean (would this be the best way to determine whether to display an item?)
- is_taken, boolean
- is_damaged, boolean
- thumbs_up, integer (for users to confirm item is still there and in good condition)
- taken_time, timestamp (listing should dissapear 2 hours after being taken)
- can_take, boolean (default true, false for fruit trees or tiny libraries, extends listing lifetime?)
- flagged, boolean (default false, flag as innapropriate, plus immediatly remove for review)

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

_None as of 2/19/22 10:14AM_

### License

_[MIT](https://opensource.org/licenses/MIT)_
Copyright (c) _2022_ _Christopher Neal_

### Support and Contact Details

- _[christopher.m.neal@gmail.com](mailto:christopher.m.neal@gmail.com)_

## Research & Planning Log

### Tuesday, 02/15

- **7:56PM - 8:42PM** Begin watching [Traversy Media React Native Crash Course Video](https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=709s)
- **8:42PM - 10:00PM** Begin setting up environment using [React Native Docs](https://reactnative.dev/docs/environment-setup)
- **10:00PM - 10:22PM** Create README

### Friday, 02/17

- **8:00AM - 9:10AM** Finish setting up dev environment and walk through [Traversy Media React Native Crash Course Video](https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=709s) to set up "Hello World" view

- **10:22AM - 11:32AM** Continue working through [Traversy Media React Native Crash Course Video](https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=709s) to set up state and delete functionality. Got to 40:18 on video.

- **11:32AM - 12:43PM** Troubleshooting importing UUIDV4 and ReactNativeVectorIcons. Tried: update Ruby version to 3.0.3, reinstalling CocoaPods, running `pod install` from `CurbAlert/ios` Still not working but making progress.

- **12:43PM - 1:41PM** ReactNativeVectorIcons and UUIDV4 still not working. Still troubleshooting. Tried rebuilding project using Expo Cli Quickstart to no avail. Now researching linking libraries in [React Documentation](https://reactnative.dev/docs/linking-libraries-ios)

- **1:41PM - 3:14PM** Still not working and I'm out of ideas. Setting up Andriod dev environment (following the [React Documentation's guide](https://reactnative.dev/docs/environment-setup)) to see if packages will work there.

  - _Note: installation taking a while, reading through the rest of the React Documentation while I wait._

  - Build still fails on Android. Going to try something different.

- **4:32PM - 4:41PM** Adding Capstone Proposal and creating GitHub Repo
- **4:41PM - 5:56PM** Researching the problem:

  - [React Native Docs](https://reactnative.dev/docs/environment-setup)
  - [CocoaPods Docs](https://guides.cocoapods.org/using/a-gemfile.html) - Tried Bundle Install - not sure whether it helped.
  - [React Native Vector Icons Docs](https://github.com/oblador/react-native-vector-icons/blob/master/README.md#installation) and [Vimniky Luo's post on Medium](https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06) - Tried manually linking the modules but they are already linked.
  - GOT IT! [This StackOverflow Article](https://stackoverflow.com/questions/2718246/xcode-warning-multiple-build-commands-for-output-file) told me to look in the "Copy Bundle Resources" Build Phase in XCode. I deleted the `.ttf` files and it _magically_ works now!

- **5:56PM - 6:42PM** UUID still not working. Researching:

  - Attempting to install [React Native Get Random Values](https://github.com/LinusU/react-native-get-random-values#readme)
  - Works now! I think the import needed updating too.

- **6:42PM - 7:19PM** Finish [Traversy Media React Native Crash Course Video](https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=709s) and implement some features.

### Tuesday, 02/22

- **9:32PM - 11:54PM** Planning database structure, component diagram, and app UI layout.

### Thursday, 02/24

- **5:39PM - 5:59PM** Finish component diagram
- **5:59PM - 6:19PM** Adding Header icons and styling using flexbox, reference: [React styling docs](https://reactnative.dev/docs/flexbox)
- **6:19PM - 6:41PM** Add component files with boilerplate code
- **9:44PM - 9:58PM** Organize project structure
- **9:58PM - 10:36 PM** Research React Navigation:
  - [YouTube: Navigation in React Native](https://www.youtube.com/watch?v=9K7JCQbOHVA)
  - [ReactNavigation.org documentation](https://reactnavigation.org/docs/getting-started/)

### Friday, 02/25

- **7:59AM - 8:57AM** Troubleshoot program not building on Android - not sure what's happening here.
- **8:57AM - 9:33AM** Organize components, WIP: add description field to AddItem form.
  - Research React Native forms [YouTube: React-Native tutorial # Handle Input](https://www.youtube.com/watch?v=pF8ae5j9Q3g&list=PL8p2I9GklV44z6euF3nqS0TlKbaGiFUGO&index=18)
- **10:34AM - 11:45AM** Continue research:
  - [YouTube: React-Native tutorial # submit simple form](https://www.youtube.com/watch?v=FZDOxrQNMjs&list=PL8p2I9GklV44z6euF3nqS0TlKbaGiFUGO&index=19)
  - Add description to state
- **11:45AM - 11:50AM** Research calculating distance using coordinates
  - [LogRocket Tutorial](https://blog.logrocket.com/react-native-geolocation-a-complete-tutorial/)
  - Never mind! I'll use an API when I incorporate the map
- **11:50AM - 12:06PM** Add dummy calculateDistance function, add distance to item state
- **12:06PM - 12:21PM** Research and implement Flex Boxes for main view
  - [Stack OverFlow](https://stackoverflow.com/questions/45132731/cannot-scroll-to-bottom-of-scrollview-in-react-native)
- **12:21PM - 1:03PM** WIP: display item full details
- **2:01PM - 2:58PM** Trying to set up item details using hooks for state, but I'm just not getting it, so reviewing with [YouTube: Traversy Media React JS Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
  - I'm on the right track, just trying to get the details to display.
- **2:58PM - 3:33PM** Get ItemDetail to display. Move delete functionality to ItemDetail
- **3:33PM - 5:04PM** Got ImageDetail to display all details! Plus did a little styling.
  - Research displaying text with [React Native Docs - Text](https://reactnative.dev/docs/text)

---

---

---

### NOTES:

ICONS: ["glass","music","search","envelope-o","heart","star","star-o","user","film","th-large","th","th-list","check","remove","close","times","search-plus","search-minus","power-off","signal","gear","cog","trash-o","home","file-o","clock-o","road","download","arrow-circle-o-down","arrow-circle-o-up","inbox","play-circle-o","rotate-right","repeat","refresh","list-alt","lock","flag","headphones","volume-off","volume-down","volume-up","qrcode","barcode","tag","tags","book","bookmark","print","camera","font","bold","italic","text-height","text-width","align-left","align-center","align-right","align-justify","list","dedent","outdent","indent","video-camera","photo","image","picture-o","pencil","map-marker","adjust","tint","edit","pencil-square-o","share-square-o","check-square-o","arrows","step-backward","fast-backward","backward","play","pause","stop","forward","fast-forward","step-forward","eject","chevron-left","chevron-right","plus-circle","minus-circle","times-circle","check-circle","question-circle","info-circle","crosshairs","times-circle-o","check-circle-o","ban","arrow-left","arrow-right","arrow-up","arrow-down","mail-forward","share","expand","compress","plus","minus","asterisk","exclamation-circle","gift","leaf","fire","eye","eye-slash","warning","exclamation-triangle","plane","calendar","random","comment","magnet","chevron-up","chevron-down","retweet","shopping-cart","folder","folder-open","arrows-v","arrows-h","bar-chart-o","bar-chart","twitter-square","facebook-square","camera-retro","key","gears","cogs","comments","thumbs-o-up","thumbs-o-down","star-half","heart-o","sign-out","linkedin-square","thumb-tack","external-link","sign-in","trophy","github-square","upload","lemon-o","phone","square-o","bookmark-o","phone-square","twitter","facebook-f","facebook","github","unlock","credit-card","feed","rss","hdd-o","bullhorn","bell","certificate","hand-o-right","hand-o-left","hand-o-up","hand-o-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-circle-down","globe","wrench","tasks","filter","briefcase","arrows-alt","group","users","chain","link","cloud","flask","cut","scissors","copy","files-o","paperclip","save","floppy-o","square","navicon","reorder","bars","list-ul","list-ol","strikethrough","underline","table","magic","truck","pinterest","pinterest-square","google-plus-square","google-plus","money","caret-down","caret-up","caret-left","caret-right","columns","unsorted","sort","sort-down","sort-desc","sort-up","sort-asc","envelope","linkedin","rotate-left","undo","legal","gavel","dashboard","tachometer","comment-o","comments-o","flash","bolt","sitemap","umbrella","paste","clipboard","lightbulb-o","exchange","cloud-download","cloud-upload","user-md","stethoscope","suitcase","bell-o","coffee","cutlery","file-text-o","building-o","hospital-o","ambulance","medkit","fighter-jet","beer","h-square","plus-square","angle-double-left","angle-double-right","angle-double-up","angle-double-down","angle-left","angle-right","angle-up","angle-down","desktop","laptop","tablet","mobile-phone","mobile","circle-o","quote-left","quote-right","spinner","circle","mail-reply","reply","github-alt","folder-o","folder-open-o","smile-o","frown-o","meh-o","gamepad","keyboard-o","flag-o","flag-checkered","terminal","code","mail-reply-all","reply-all","star-half-empty","star-half-full","star-half-o","location-arrow","crop","code-fork","unlink","chain-broken","question","info","exclamation","superscript","subscript","eraser","puzzle-piece","microphone","microphone-slash","shield","calendar-o","fire-extinguisher","rocket","maxcdn","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-circle-down","html5","css3","anchor","unlock-alt","bullseye","ellipsis-h","ellipsis-v","rss-square","play-circle","ticket","minus-square","minus-square-o","level-up","level-down","check-square","pencil-square","external-link-square","share-square","compass","toggle-down","caret-square-o-down","toggle-up","caret-square-o-up","toggle-right","caret-square-o-right","euro","eur","gbp","dollar","usd","rupee","inr","cny","rmb","yen","jpy","ruble","rouble","rub","won","krw","bitcoin","btc","file","file-text","sort-alpha-asc","sort-alpha-desc","sort-amount-asc","sort-amount-desc","sort-numeric-asc","sort-numeric-desc","thumbs-up","thumbs-down","youtube-square","youtube","xing","xing-square","youtube-play","dropbox","stack-overflow","instagram","flickr","adn","bitbucket","bitbucket-square","tumblr","tumblr-square","long-arrow-down","long-arrow-up","long-arrow-left","long-arrow-right","apple","windows","android","linux","dribbble","skype","foursquare","trello","female","male","gittip","gratipay","sun-o","moon-o","archive","bug","vk","weibo","renren","pagelines","stack-exchange","arrow-circle-o-right","arrow-circle-o-left","toggle-left","caret-square-o-left","dot-circle-o","wheelchair","vimeo-square","turkish-lira","try","plus-square-o","space-shuttle","slack","envelope-square","wordpress","openid","institution","bank","university","mortar-board","graduation-cap","yahoo","google","reddit","reddit-square","stumbleupon-circle","stumbleupon","delicious","digg","pied-piper-pp","pied-piper-alt","drupal","joomla","language","fax","building","child","paw","spoon","cube","cubes","behance","behance-square","steam","steam-square","recycle","automobile","car","cab","taxi","tree","spotify","deviantart","soundcloud","database","file-pdf-o","file-word-o","file-excel-o","file-powerpoint-o","file-photo-o","file-picture-o","file-image-o","file-zip-o","file-archive-o","file-sound-o","file-audio-o","file-movie-o","file-video-o","file-code-o","vine","codepen","jsfiddle","life-bouy","life-buoy","life-saver","support","life-ring","circle-o-notch","ra","resistance","rebel","ge","empire","git-square","git","y-combinator-square","yc-square","hacker-news","tencent-weibo","qq","wechat","weixin","send","paper-plane","send-o","paper-plane-o","history","circle-thin","header","paragraph","sliders","share-alt","share-alt-square","bomb","soccer-ball-o","futbol-o","tty","binoculars","plug","slideshare","twitch","yelp","newspaper-o","wifi","calculator","paypal","google-wallet","cc-visa","cc-mastercard","cc-discover","cc-amex","cc-paypal","cc-stripe","bell-slash","bell-slash-o","trash","copyright","at","eyedropper","paint-brush","birthday-cake","area-chart","pie-chart","line-chart","lastfm","lastfm-square","toggle-off","toggle-on","bicycle","bus","ioxhost","angellist","cc","shekel","sheqel","ils","meanpath","buysellads","connectdevelop","dashcube","forumbee","leanpub","sellsy","shirtsinbulk","simplybuilt","skyatlas","cart-plus","cart-arrow-down","diamond","ship","user-secret","motorcycle","street-view","heartbeat","venus","mars","mercury","intersex","transgender","transgender-alt","venus-double","mars-double","venus-mars","mars-stroke","mars-stroke-v","mars-stroke-h","neuter","genderless","facebook-official","pinterest-p","whatsapp","server","user-plus","user-times","hotel","bed","viacoin","train","subway","medium","yc","y-combinator","optin-monster","opencart","expeditedssl","battery-4","battery","battery-full","battery-3","battery-three-quarters","battery-2","battery-half","battery-1","battery-quarter","battery-0","battery-empty","mouse-pointer","i-cursor","object-group","object-ungroup","sticky-note","sticky-note-o","cc-jcb","cc-diners-club","clone","balance-scale","hourglass-o","hourglass-1","hourglass-start","hourglass-2","hourglass-half","hourglass-3","hourglass-end","hourglass","hand-grab-o","hand-rock-o","hand-stop-o","hand-paper-o","hand-scissors-o","hand-lizard-o","hand-spock-o","hand-pointer-o","hand-peace-o","trademark","registered","creative-commons","gg","gg-circle","tripadvisor","odnoklassniki","odnoklassniki-square","get-pocket","wikipedia-w","safari","chrome","firefox","opera","internet-explorer","tv","television","contao","500px","amazon","calendar-plus-o","calendar-minus-o","calendar-times-o","calendar-check-o","industry","map-pin","map-signs","map-o","map","commenting","commenting-o","houzz","vimeo","black-tie","fonticons","reddit-alien","edge","credit-card-alt","codiepie","modx","fort-awesome","usb","product-hunt","mixcloud","scribd","pause-circle","pause-circle-o","stop-circle","stop-circle-o","shopping-bag","shopping-basket","hashtag","bluetooth","bluetooth-b","percent","gitlab","wpbeginner","wpforms","envira","universal-access","wheelchair-alt","question-circle-o","blind","audio-description","volume-control-phone","braille","assistive-listening-systems","asl-interpreting","american-sign-language-interpreting","deafness","hard-of-hearing","deaf","glide","glide-g","signing","sign-language","low-vision","viadeo","viadeo-square","snapchat","snapchat-ghost","snapchat-square","pied-piper","first-order","yoast","themeisle","google-plus-circle","google-plus-official","fa","font-awesome","handshake-o","envelope-open","envelope-open-o","linode","address-book","address-book-o","vcard","address-card","vcard-o","address-card-o","user-circle","user-circle-o","user-o","id-badge","drivers-license","id-card","drivers-license-o","id-card-o","quora","free-code-camp","telegram","thermometer-4","thermometer","thermometer-full","thermometer-3","thermometer-three-quarters","thermometer-2","thermometer-half","thermometer-1","thermometer-quarter","thermometer-0","thermometer-empty","shower","bathtub","s15","bath","podcast","window-maximize","window-minimize","window-restore","times-rectangle","window-close","times-rectangle-o","window-close-o","bandcamp","grav","etsy","imdb","ravelry","eercast","microchip","snowflake-o","superpowers","wpexplorer","meetup"]
