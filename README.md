# TaskTracker

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

# Other

Users now have the option to edit their account. This is where they
can change their name or who manages them. A manager may assign any
of their underlings tasks, but the drop down for assigning only shows
their underlings. A user can be their own manager. A user can only
have one manager. Tasks are displayed as cards, and can be started
or stopped by pressing a button on them. These provide time blocks
for the user to record how long they have worked on a task. If they
need to edit their tasks, they can update any of their previous time
blocks. They may also delete time blocks or manually add their own.
The card will display how long a user has worked on a task as well.

Managers have an abridged view of their underlings, and can see all
tasks assigned to their underlings as well as how long they have
worked on the tasks. Managers may also edit an underling's task, but
cannot change time blocks. They can also delete the task or reassign
it.
