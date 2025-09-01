# expo-router-nested-navigation-repro

Repository to showcase expo-router's navigation behavior with nested routers and how params are passed.

## Navigation

Navigation in expo-router uses the closest navigator when navigating. This behavior is showcased in [the header component](./src/components/Header/index.tsx). The picker is supposed to change the `[tenantId]` and `[role]` parameters, but it cannot as it tries to navigate within the `<Tabs />` navigator. The fix is to use [a route at the root](./src/app/root-redirect.tsx), you navigate to that route with the href and params of the actual route you want to navigate to.

## Query params

Query params are only passed to the leaf displayed screen of the router. Even with the root redirect method used in the [Navigation example](#navigation), you cannot pass query params to layouts. The fix is to use a path param that can have a value you can ignore.

**For example:**
If we'd want `queryParam` to be available before the `<Tabs />`. You'd need a structure like:

```none
- (authed)/
  - [tenantId]/
    - [role]/
      - [queryParam]/
        - (tabs)/
          - ...
```

You would then pass `queryParam` a value you can ignore like (e.g. `"none"`, '0').

## Proposed solutions

- [For navigation](https://expo.canny.io/feature-requests/p/expo-router-option-to-choose-navigator-to-navigate-within)
- [For query params](https://expo.canny.io/feature-requests/p/expo-router-optional-path-param-support)
