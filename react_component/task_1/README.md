# Lifecycles

Dashboard based on task_0. App registers a Ctrl+H keyboard listener on mount to alert `Logging you out` and call the `logOut` prop, and removes it on unmount. The default `logOut` is an empty function.

From `dashboard`:

- `npm ci` installs dependencies.
- `npm run dev` starts the app.
- `npm test -- --runInBand` runs the tests.
- `npm run lint` checks lint.
- `npm run build` builds the app.
