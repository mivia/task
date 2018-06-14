# Schibsted frontend test task

Simple vue.js application presenting list of issues with possibilities of:
  - changing the issues' states
  - deleting issues
  - reseting issues' states

I wanted to keep the application as light as possible - the build weighs 207kb.

# Prerequisites

Assuming you are using chrome browser - please install this extension:
  https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
  
I have added the vuex state management in order to see the state changes more clearly and maybe do some action rollbacks when needed :)

# Installing

Assuming you have node and npm already installed - run 'npm i' in the project root.

# Running in dev mode

Run the application in development mode using 'npm run dev'. For production build use 'npm run build'.

# Running the tests

Run the unit tests with 'npm run test'.
