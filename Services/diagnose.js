const form = document.querySelector("form"),
    fileInput = form.querySelector(".file-input"),
    progressArea = document.querySelector(".progress-area"),
    uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () => {
    fileInput.click();
});

fileInput.onchange = ({ target }) => {
    let file = target.files[0]; //getting file and [0] means if user has selected multi files >get first file only
    if (file) { // if file is selected
        let fileName = file.fileName //getting selected file name
        uploadFile(fileName) //calling uploadfile with passing file name as an argument
    }
}