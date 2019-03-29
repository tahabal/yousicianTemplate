# Web Developer test

Created this with using create-react-app as boilerplate. State management and data fetching is entirely done on mobX side, no local component state unless the data is meant to be self contained in the component. Tried to use the least amount of 3rd party components/packages since this is an interview/assignment, so i wrote most of the stuff from scratch. Only 3rd party libs i used was mobx for state stuff, fontawesome for rendering the stars and lodash for debounce.

I'd normally use decorator syntax for mobX stuff - @observer, @inject etc..-, but since the feature is still on experimental support in javascript, it's not supported in create-react-app. Therefore, i still inject/observe the store by the good ol' function style. - export default inject("store)(observe(Component))

I've forgot to add the level filter until the last minute, and even after that i struggled on deciding where to place it, so it rest in a drawer-like pocket at left side. It'll probably drive any UI/UX expert mad, but in normal workflow they're the ones that decide what goes where, so i don't believe it's a huge problem in this case. Oh, and it also doesn't get rendered on mobile resolutions, for obvious reasons.

Searchbar on the header filter the data by artist/song name. It's also throttled, so it doesn't call the API -or mock json in this case- on every keypress. It also operates directly from mobX store.

Added 2 types of loadings, one app-wide and one local for list rendering, they're rendered on data fetching calls and run by setTimeout's via promises in async functions, in order to mimic network issues.

The songlist has infinite scrolling, pulls 15 new entries every time based on the search/filter parameters. Infinite scroll's data call is also timegated, in order to keep unneccessary server calls by scrolling to minimum.

There are probably more stuff that i've forgotten to explain, i apologize for that. It was kind of hard to fit this assignment into my schedule as work is a bit hectic nowadays, but i still enjoyed the challenge.

Hope i'll see you in the next interview, and if not, please drop me an email if you have the time, i'd appreciate even the smallest feedback :)


Taha Bal

taha@8mitsu.io