const fetch = require('node-fetch')

export async function handleSubmit(event) {
    event.preventDefault()
    const inputData = document.getElementById('url').value
    const error = document.getElementById('error')
    error.innerHTML = ""
    document.getElementById('status').innerHTML = ""
    document.getElementById('confidence').innerHTML = ""
    document.getElementById('subjectivity').innerHTML = ""
    document.getElementById('score').innerHTML = ""

    
    if (!Client.checkURL(inputData)) {
        error.innerHTML = 'Invalid URL. Make sure your input starts with http:// or https:// and contain no spaces.'
        return
    } 
    else {   
        getServerData('http://localhost:8080/call', inputData)
            .then(result => result.json())
            .then(function (res) {
                updateUI(res)
            })
        }
}

export async function getServerData(url, inputData) {

    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: inputData,
    })
    return response
}

// Updates the UI 
function updateUI(res) {
    const status = document.getElementById('status')
    const confidence = document.getElementById('confidence')
    const subjectivity = document.getElementById('subjectivity')
    const score = document.getElementById('score')

    status.innerHTML = `Status: ${res.message}`

    let sub = res.subjectivity
    sub = sub.substring(0,1).toUpperCase()+sub.substring(1).toLowerCase();
    subjectivity.innerHTML = `Subjectivity: ${sub}`
    confidence.innerHTML = `Confidence: ${res.confidence}`;
    score.innerHTML = `Score Description: ${scoreDescription(res.score_tag)}`
    
}

export function scoreDescription(score) {
    switch (score) {
        case "P+":
            return "Highly Positive"
        case "P":
            return "Positive"
        case "NEU":
            return "Neutral"
        case "N":
            return "Negative"
        case "N+":
            return "Highly Negative"
        case "NONE":
            return "No sentiment"
        default:
            return "Invalid data"
    }
}