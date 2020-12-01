//Uses regular expression as test condition

export function checkURL(userInput)
{
    const http = /^http:\/\/|^https:\/\//;
    const space = /\s/;
    return (http.test(userInput) && !space.test(userInput));
}

