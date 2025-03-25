For admin site we will need following endpoints:

* `/auth/login`
* `/auth/register`
* `/_admin/users` - GET returns users
* `/_admin/users/:id` - GET for info, POST to edit, DELETE to remove
* `/_admin/users/new` - POST for new user
* `/me` - GET returns info about your account
* `/me/keys` - GET returns keys on your account
* `/me/keys/:id` - DELETE to remove key
* `/me/keys/new` - POST for new key