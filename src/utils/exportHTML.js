export const exportHTML = (data, template) => {
  let body = "";
  let style = "";

  /* ---------------- MODERN TEMPLATE ---------------- */
  if (template === "modern") {
    body = `
      <h1>${data.personal.name}</h1>
      <h3>${data.personal.title}</h3>

      <h2>About Me</h2>
      <p>${data.personal.about}</p>

      <h2>Skills</h2>
      <div>
        ${data.skills.map(s => `<span class="chip">${s}</span>`).join("")}
      </div>

      <h2>Projects</h2>
      ${data.projects.map(
        p => `
          <div class="card">
            <h4>${p.title}</h4>
            <p>${p.desc}</p>
          </div>
        `
      ).join("")}

      <h2>Education</h2>
      ${data.education.map(
        e => `<p><b>${e.degree}</b> – ${e.institute} (${e.year})</p>`
      ).join("")}

      <h2>Achievements</h2>
      <ul>
        ${data.achievements.map(a => `<li>${a}</li>`).join("")}
      </ul>

      <h2>Links</h2>
      <p>GitHub: ${data.links.github}</p>
      <p>LinkedIn: ${data.links.linkedin}</p>
      <p>Website: ${data.links.website}</p>
    `;

    style = `
      body { font-family: Arial; padding: 40px; background: #f8fafc; }
      h1 { font-size: 36px; }
      .chip {
        background:#38bdf8;
        color:white;
        padding:6px 12px;
        border-radius:20px;
        margin:4px;
        display:inline-block;
      }
      .card {
        background:white;
        padding:15px;
        border-radius:10px;
        margin-bottom:15px;
        box-shadow:0 10px 20px rgba(0,0,0,0.08);
      }
    `;
  }

  /* ---------------- MINIMAL TEMPLATE ---------------- */
  else if (template === "minimal") {
    body = `
      <h1>${data.personal.name}</h1>
      <p>${data.personal.title}</p>

      <h3>About</h3>
      <p>${data.personal.about}</p>

      <h3>Skills</h3>
      <p>${data.skills.join(", ")}</p>

      <h3>Projects</h3>
      <ul>
        ${data.projects.map(p => `<li>${p.title}</li>`).join("")}
      </ul>

      <h3>Education</h3>
      ${data.education.map(e => `<p>${e.degree} – ${e.institute}</p>`).join("")}

      <h3>Achievements</h3>
      <p>${data.achievements.join(", ")}</p>

      <h3>Links</h3>
      <p>${data.links.github}</p>
    `;

    style = `
      body {
        font-family: Georgia, serif;
        padding: 40px;
        background: white;
        color: #111;
      }
    `;
  }

  /* ---------------- 🌟 ELITE TEMPLATE ---------------- */
  else if (template === "elite") {
    body = `
      <div class="elite-wrapper">
        <div class="elite-header">
          <h1>${data.personal.name}</h1>
          <p>${data.personal.title}</p>
        </div>

        <div class="elite-section">
          <h2>About Me</h2>
          <p>${data.personal.about}</p>
        </div>

        <div class="elite-section">
          <h2>Skills</h2>
          <div class="elite-skills">
            ${data.skills.map(s => `<span>${s}</span>`).join("")}
          </div>
        </div>

        <div class="elite-section">
          <h2>Projects</h2>
          <div class="elite-projects">
            ${data.projects.map(
              p => `
                <div class="elite-project-card">
                  <h3>${p.title}</h3>
                  <p>${p.desc}</p>
                </div>
              `
            ).join("")}
          </div>
        </div>

        <div class="elite-section">
          <h2>Education</h2>
          ${data.education.map(
            e => `<p><b>${e.degree}</b> – ${e.institute} (${e.year})</p>`
          ).join("")}
        </div>

        <div class="elite-section">
          <h2>Achievements</h2>
          <ul>
            ${data.achievements.map(a => `<li>${a}</li>`).join("")}
          </ul>
        </div>

        <div class="elite-section">
          <h2>Links</h2>
          <p>GitHub: ${data.links.github}</p>
          <p>LinkedIn: ${data.links.linkedin}</p>
          <p>Website: ${data.links.website}</p>
        </div>
      </div>
    `;

    style = `
      body {
        font-family: "Segoe UI", sans-serif;
        background: linear-gradient(135deg, #e0f2fe, #eef2ff);
        padding: 40px;
      }

      .elite-wrapper {
        max-width: 1000px;
        margin: auto;
        background: rgba(255,255,255,0.85);
        backdrop-filter: blur(12px);
        border-radius: 20px;
        box-shadow: 0 40px 80px rgba(0,0,0,0.15);
        overflow: hidden;
      }

      .elite-header {
        padding: 60px;
        background: linear-gradient(135deg, #38bdf8, #6366f1);
        color: white;
        text-align: center;
      }

      .elite-section {
        padding: 50px;
      }

      .elite-section h2 {
        border-left: 6px solid #6366f1;
        padding-left: 15px;
        margin-bottom: 25px;
      }

      .elite-skills span {
        display: inline-block;
        margin: 8px;
        padding: 10px 18px;
        background: #eef2ff;
        color: #3730a3;
        border-radius: 25px;
      }

      .elite-projects {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 25px;
      }

      .elite-project-card {
        background: white;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
      }
    `;
  }

  /* ---------------- FINAL HTML ---------------- */
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${data.personal.name} | Portfolio</title>
  <style>${style}</style>
</head>
<body>
  ${body}
</body>
</html>
`;

  const blob = new Blob([html], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "portfolio.html";
  link.click();
};
