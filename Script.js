<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Resume</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 2em;
      background-color: #f0f0f0;
    }
    #themeToggle {
      margin-bottom: 1em;
    }
    .dark-mode {
      background-color: #121212;
      color: #fff;
    }
    h1, h2 {
      margin-bottom: 0.2em;
    }
    .section {
      margin-bottom: 1.5em;
    }
  </style>
</head>
<body>

  <button id="themeToggle">Switch Theme</button>

  <h1>sandhiya</h1>
  <p>Email: ssandhiya8335@gmail.com| Phone: (9043057012) 456-7890 | Location: New York, NY</p>

  <div class="section">
    <h2>Summary</h2>
    <p>Experienced Web Developer with a passion for building responsive and accessible web applications.</p>
  </div>

  <div class="section">
    <h2>Skills</h2>
    <ul>
      <li>JavaScript, HTML, CSS</li>
      <li>React, Node.js</li>
      <li>Git, GitHub</li>
    </ul>
  </div>

  <div class="section">
    <h2>Experience</h2>
    <p><strong>Frontend Developer</strong> - Tech Company (2022–Present)</p>
    <ul>
      <li>Developed and maintained user interfaces using React.</li>
      <li>Improved site performance by 30% through code optimization.</li>
    </ul>
  </div>

  <div class="section">
    <h2>Education</h2>
    <p><strong>B.Sc. in Computer Science</strong> - XYZ University (2018–2022)</p>
  </div>

  <script>
    const toggleBtn = document.getElementById('themeToggle');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  </script>

</body>
</html>
