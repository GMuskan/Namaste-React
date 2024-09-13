# Namaste React🚀
# dev build - "npx parcel index.html"
# production build - "npx parcel build index.html"
# Parcel - https://parceljs.org/docs/
    - Dev Build
    - Local Server
    - HMR - Hot Module - Replacement
    - uses File watching algorithm which is written in c++
    - Caching : Faster Builds.
    - do image optimization as well.
    - minify the files for production.
    - Bundling
    - Compressing
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling: to support older browsers.
    - Diagnostic
    - Error Handling
    - HTTPs
    - Tree Shaking: remove unused code
    - Different dev and prod bundles
    
# // JSX - (transpiled before it reaches the JS) - Parcel - Babel
# // JSX => Babel transpiles it to React.createElement => ReactElement(JS Object) => HTMLElement(render)

# config driven UI - website driven by data(like for swiggy app restaurant cards will be different based on location.)

# React Hooks
    -useState()
    -useEffect()
        if no dependency array => useEffect is called on every render
        if empty dependency array => useEffect is called on initial render(just once)
        if dependency array is not empty => useEffect is called whenever dependencies changes

# 2 types of routing in web app
    - Client side Routing
    - Server side Routing

# Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - Create slice
    - dispatch(action)
    - Selector