//Enabled GMail Api in google developer console and following the steps as per docs

var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client
    .init({
      apiKey: "",
      clientId:
        "",
      scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
      ],
    })
    .then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
    });
}

// Compose Email

async function sendMail() {
  const compose = document.querySelector(".btn");
  const data = await fetch(
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
    { method: "GET" }
  );
  const user = await data.json();
}
