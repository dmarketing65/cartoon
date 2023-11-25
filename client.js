function submitForm() {
    var textInput = document.getElementById("text-input").value;
    var photoInput = document.getElementById("photo-upload").files[0];

    var formData = new FormData();
    formData.append('text-input', textInput);
    formData.append('photo-upload', photoInput);

    fetch('/generate-video', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        var videoElement = document.getElementById("generated-video");
        var downloadLink = document.getElementById("download-link");

        // Update the video source and download link
        videoElement.src = `/path-to-generated-videos/${data.videoFileName}`;
        videoElement.load();

        downloadLink.href = `/path-to-generated-videos/${data.videoFileName}`;
        downloadLink.style.display = 'block';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
