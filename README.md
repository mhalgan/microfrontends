# microfrontends

## Auth

React application that renders the Sign In and Sign Up pages

### Running locally

Go to `packages/auth` and run:
```
npm i
npm start
```

The application will be accessible in standalone mode on http://localhost:8082

## Dashboard

Vue.js application that renders the Dashboard page

### Running locally

Go to `packages/dashboard` and run:
```
npm i
npm start
```

The application will be accessible in standalone mode on http://localhost:8083

## Marketing

React application that renders the Landing and Pricing pages

### Running locally

Go to `packages/marketing` and run:
```
npm i
npm start
```

The application will be accessible in standalone mode on http://localhost:8081

## Container

React container that embeds all other microfrontends and rends the application header

### Running locally

After starting all other microfrontends, go to `packages/container` and run:
```
npm i
npm start
```

The application will be accessible on http://localhost:8080 and you will be able to access all other sub applications inside the container
