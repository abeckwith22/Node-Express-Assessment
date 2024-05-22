# Broken App Issues

### Optimizations
- [x] Initializing `let`, `var` on node_modules. Changed to `const` so modules aren't renamed or modified during code execution.
- [x] Used Promise.all to handle multiple asynchronous operations and not have to use out to format axios requests.
- [x] `err` object wasn't in a catch and just pushed next(err) which doesn't give us a verbose catch. Added `console.error('Error:', err)` to give us more of an idea of whats going on.
- [x] app.listen had a hardcoded PORT of 3000 and didn't have any information showing if the app was running or not. added `console.log('App started on port ${PORT}')`
