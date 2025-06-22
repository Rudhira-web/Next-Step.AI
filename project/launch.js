document.getElementById('projectForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const projectName = document.getElementById('projectName').value;
    const color = document.getElementById('colorScheme').value;
    const desc = document.getElementById('projectDesc').value;
    const files = document.getElementById('projectPhotos').files;

    // Convert files to base64
    const base64Images = [];

    for (let i = 0; i < files.length; i++) {
        base64Images.push(await toBase64(files[i]));
    }
  
    // Generate photo gallery
    let gallery = '';
    base64Images.forEach((img) => {
        gallery += `<img src="${img}" alt="project photo" style="width: 200px; margin: 10px; border-radius: 10px; box-shadow: 0 4px 10px #0005;" />`;
    });

    // Compose custom page
    const customPage = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${projectName}</title>
<style>
body {font-family:'Helvetica Neue', sans-serif; margin: 0; color: #fff; background: ${color}; padding: 20px }
h1 {font-size: 3rem; margin-bottom: 20px }
p {font-size: 1.5rem }
.gallery {display: flex; flex-wrap: wrap; margin-top: 20px }
.gallery img {width: 200px; margin: 10px; border-radius: 10px; box-shadow: 0 4px 10px #0005 }
</style>
</head>
<body>
<h1>${projectName}</h1>
<p>${desc}</p>
<div class="gallery">
    ${gallery}
</div>
</body>
</html>`;

    // Provide a downloadable file
    const blob = new Blob([customPage], {type:'text/html'})
    const url = URL.createObjectURL(blob)

    document.getElementById('generatedPage').innerHTML = `
        <a href="${url}" download="${projectName}.html" class="but">
            Download Your Project Page
        </a>`;
});

// Helper function to convert files to base64
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}
function togglePortfolio() {
  const section = document.getElementById('portfolioSection');
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
}
document.getElementById('generateIdeaBtn').addEventListener('click', () => {
  const passion = document.getElementById('passionInput').value.trim();
  const resultBox = document.getElementById('ideaResult');
  if (passion === "") {
    resultBox.style.display = "none";
    return;
  }

  // Simple idea generator logic
  const idea = `Start a unique venture in the field of "${passion}" such as building a blog, launching a service, or selling digital products tailored to that domain.`;

  resultBox.innerHTML = `<p><strong>Your Idea:</strong> ${idea}</p>`;
  resultBox.style.display = "block";
});
