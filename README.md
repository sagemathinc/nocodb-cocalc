# Run [NocoDB](https://nocodb.com/) in a CoCalc project

[NocoDB](https://nocodb.com/) is an open source #NoCode platform that turns any database into a smart spreadsheet. If you are running a database such as PostgreSQL or Sqlite in [CoCalc](https://cocalc.com), e.g., to keep track of data that you are analyzing, then you may find NocoDB useful.
This template makes it very easy to start your own NocoDB server running in your project.

Regarding security, the connection is encrypted and only collaborators on your project can access the server. Each person also has to create an account.

Note that NocoDB itself doesn't currently have proper realtime collaboration,
so if a table changes, you have to explicitly click the reset button to see
the new version.

## Clone & install

NOTE: This does not work with the trial version of CoCalc. You need a paid project for network access.

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
