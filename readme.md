The Nav-bar of the site gives any person without a session cookie
the option to log in. This fails if the username entered has not been
registered yet. If the username has been registered and is entered,
the user will then have all "/" routes go to "/tasks" so long as a
session cookie exists.

On the "/tasks" page each task that has been assigned to the user is
displayed as a card. All relevant information (task name, assigned to,
description, time spent, and completion) is displayed on the card. The
user may edit this card or delete it from the buttons on the card as
well. When editing or creating a new card, the user can assign the
task to any other user via a drop down menu. There is also a step menu
for adding how much time is spent on a task, in 15 minute increments.
A check mark box is given for determining completion.

Once managers are added in, the drop down menu will be limited to only
the subset of users that managers can see. Additionally, a button for
time measuring will be placed on the card itself for more accurate
time measurements.

In the database, each task has a reference to the user it is assigned
to, and has fields for the card as described above.
