# moqn-net
 

## Display mode

The default build and development server show an under-construction screen on
all pages. The portfolio design is only rendered when explicitly enabled for
local review:

```sh
GATSBY_PORTFOLIO_PREVIEW=true npm run develop
```

For local screenshot builds, use `GATSBY_PORTFOLIO_PREVIEW=true npm run build`.
Never deploy that preview output while the site is under construction. Rebuild
without the variable (`env -u GATSBY_PORTFOLIO_PREVIEW npm run build`) before
publishing. This switch controls presentation; it is not an authentication or
content-access restriction.
