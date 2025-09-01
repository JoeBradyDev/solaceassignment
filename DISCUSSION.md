### What I Accomplished

* Added vim to the .gitignore
* Setup postgres
* Updated the folder structure
* Created a repository/service/controller BE architecture
  * Inferred database model types from drizzle
  * Started repository and services classes (to be fully-fleshed out later)
  * Did this to make the app scalable and to improve performance
* Addressed bugs/code styling:
  * Removed console.logs
  * Added types to frontend
  * Fixed filtering comparisons
  * Put filters in a useMemo to avoid double useState state
  * Gave handlers more standard naming
* Created table and header components
* Updated the design to use tailwind
* Added pagination to improve performance

## What I Would Do Differently/Add

* Add jest tests to components
* Add e2e tests
* Clean up the frontend component styles
* Divide up the components better/create more componets
* Fix the seeds to work with the new backend architecture
* Add search to pagination/backend logic (which is the proper implementation)
