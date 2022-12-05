# Run [NocoDB](https://nocodb.com/) in a CoCalc project

This automatically takes 

## Clone & install
```sh
git clone https://github.com/sagemathinc/nocodb-cocalc
cd nocodb-cocalc
npm install
```

## Start
```sh
npm run start
```

This will output a URL of the form:

```
https://cocalc.com/[PROJECT_ID]/port/8080/dashboard/
```


## Upgrade
```sh
npm run upgrade
```

## Using environment file
Copy the .env.example file to .env and change as needed.
