document.getElementById('prepareBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const degree = document.getElementById('degree').value;
    const strengths = document.getElementById('strengths').value.split(',');

    document.getElementById('generatedResume').innerHTML = `
        <h3>${name}</h3>
        <p>Degree: ${degree}</p>
        <p>Strengths: ${strengths.map(s => s.trim()).join(', ')}</p>
        <p>Career Goal: To apply my skills in a challenging environment and grow myself.</p>
    `;
});

// Download as PDF
document.getElementById('preparePdfBtn').addEventListener('click', () => {
    html2pdf().from(document.querySelector("#prepare-result")).save('prepare_report.pdf');
});
// Roadmap Generator
document.getElementById('careerSelect').addEventListener('change', function () {
    const choice = this.value;
    const roadmapOutput = document.getElementById('roadmapOutput');

    const roadmaps = {
        developer: [
            "Learn HTML, CSS, JS",
            "Practice Git & GitHub",
            "Learn React/Next.js",
            "Build 3+ real projects",
            "Apply for internships"
        ],
        designer: [
            "Understand design principles",
            "Master Figma or Adobe XD",
            "Learn UX research & wireframing",
            "Build a portfolio",
            "Apply to design roles"
        ],
        data: [
            "Learn Excel, SQL, Python",
            "Study data visualization (Tableau)",
            "Practice with Kaggle datasets",
            "Build dashboards",
            "Apply to analyst positions"
        ]
    };

    roadmapOutput.innerHTML = roadmapOutput.style.display = "block";
    if (roadmaps[choice]) {
        roadmapOutput.innerHTML = `<ul class="tips">${roadmaps[choice].map(step => `<li>➤ ${step}</li>`).join('')}</ul>`;
    } else {
        roadmapOutput.innerHTML = '';
    }
});

// Resource Recommender
document.getElementById('skillSelect').addEventListener('change', function () {
    const value = this.value;
    const list = document.getElementById('resourceLinks');

    const resources = {
        htmlcss: [
            ["W3Schools HTML", "https://www.w3schools.com/html/"],
            ["CSS Tricks", "https://css-tricks.com/"],
            ["Frontend Mentor", "https://www.frontendmentor.io/"]
        ],
        js: [
            ["JavaScript Info", "https://javascript.info/"],
            ["MDN JS Guide", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"],
            ["FreeCodeCamp JS", "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"]
        ],
        python: [
            ["Python.org Docs", "https://docs.python.org/3/"],
            ["Real Python", "https://realpython.com/"],
            ["W3Schools Python", "https://www.w3schools.com/python/"]
        ]
    };

    list.innerHTML = '';
    if (resources[value]) {
        resources[value].forEach(([name, link]) => {
            const li = document.createElement('li');
            li.innerHTML = `➤ <a href="${link}" target="_blank">${name}</a>`;
            list.appendChild(li);
        });
    }
});
