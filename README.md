

Purpose of this is to make sure this PR is working: https://github.com/oasis-open/cti-stix-visualization/pull/51

## Instructions

You need two terminal windows: 

### Terminal 1

Checkout https://github.com/dwjohnston/cti-stix-visualization/tree/make-it-an-npm-packge

```
yarn
```


```
yarn build
```

```
yarn link 
```


### Terminal 2 

Check out this repo

```
yarn
```

```
yarn link cti-stix-visualization-dwj
```

```
yarn start
```

The browser should open and you should see basic example working. 

