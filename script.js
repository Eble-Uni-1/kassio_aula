const video = document.getElementById('video');

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.scrObject = stream,
        err => console.error(err)
    )
}

startVideo();