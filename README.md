# Evaluate News App Project

## Description
This is my 4th project in the Udacity's FrontEnd Nanodegree Program. It uses the [MeaningCloud](https://www.meaningcloud.com/) API to skim through content at the URL entered by the user.  The MeaningCloud API will check for objectivity-subjectivity and positivity-negativity and return the results to a local server from which we will use Express to fetch the results from the server and display it unto the UI.

## Tools
- Node .You can download it [**here**](https://nodejs.org/en/download/).
- MeaningCloud API key: [MeaningCloud](https://www.meaningcloud.com/). T

After you have gotten your API key, make a file called *.env* in the project root folder and insert the following line below

```
API_KEY= your key here   //insert only this line
```

## Steps
After gettint your API key, install Node if you do not have it.
After Node is installed. In the terminal, use this command:

```
npm install
```
the use the following commands also

```
npm run build-dev
npm run build-prod
npm run start
```