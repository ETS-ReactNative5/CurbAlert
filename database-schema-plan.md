# Database Schema

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
