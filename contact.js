var input = document.querySelector('input[type="file"]')

var data = new FormData()
data.append('file', input.files[0])

fetch('/uploads', {
    method: 'POST',
    body: data
})