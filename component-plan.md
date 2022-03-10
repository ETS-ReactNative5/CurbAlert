Component Plan:

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
