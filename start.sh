#!/bin/bash

export MIX_ENV=prod
export PORT=4748

echo "Stopping old copy of app, if any..."

/home/task_tracker/task_tracker/_build/prod/rel/task_tracker/bin/task_tracker stop || true

echo "Starting app..."

# TODO: You want start.

/home/task_tracker/task_tracker/_build/prod/rel/task_tracker/bin/task_tracker start

# TODO: Add a cron rule or systemd service file
#       to start your app on system boot.
