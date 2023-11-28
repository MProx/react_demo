# React

## Basics:

* install npm from https://nodejs.org/en/.
* create new app from the terminal: `npx create-next-app@latest`
* disable telemetry: `npx next telemetry disable`
* cd into app folder and start app in dev mode: `npm run dev`

# File-based Routing:
Create a file called `page.js` in `src/app/`. This is the rendered when navigating to `localhost:3000/`. Create another page in `src/app/route1`. This will be rendered when navigating to `localhost:3000/route1`. 

Dynamic routing can be achieved by putting a folder name in square brackets. E.g. if you have a path `src/app/routes/[route_id]/page.js`, then this can be rendered at `localhost:3000/routes/[route ID]`. The value of `route ID` can be found in the code at `params.route_id` (assuming `params` is the name of the component's prop).

a file named `not-found.js` will be rendered whenever a route isn't found. This includes sub-routes. E.g. `src/app/route1/not-found` will be rendered if the user navigates to `localhost:3000/route1/foobar` (assuming that `src/app/route1/foobar.js` doesn't exist).

Files can be placed into private folders folders, whose names start with an underscore. E.g. a 404 error will be returned when navigating to `localhost:3000/_lib` even if `/src/app/_lib/page.js` exists.

Files can be grouped in folders with names wrapped in parentheses, and the folder will be ignored by the router. E.g. `/src/app/(auth)/login/` will be rendered when navigating to `localhost:3000/login`, 



