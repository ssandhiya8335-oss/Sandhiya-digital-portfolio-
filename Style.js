document.addEventListener("DOMContentLoaded", function () {
  // Personal Info
  document.getElementById('name').textContent = "sandhiya";
  document.getElementById('title').textContent = "Full Stack Developer";
  document.getElementById('contact').textContent = "Email: ssandhiya8335@gmail.com.| Phone: (9043057012) 456-7890";

  // Summary
  document.getElementById('summary').textContent = 
    "Passionate developer with 5+ years of experience building web applications using JavaScript, React, Node.js, and Python.";

  // Skills
  const skills = ["JavaScript", "HTML", "CSS", "React", "Node.js", "Python"];
  const skillsList = document.getElementById('skills');
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Experience
  const experience = [
    {
      title: "Senior Web Developer",
      company: "TechCorp Inc.",
      years: "2021 - Present",
      description: "Led the frontend team in building scalable web applications with React and Redux."
    },
    {
      title: "Frontend Developer",
      company: "DevSolutions",
      years: "2018 - 2021",
      description: "Worked on UI/UX improvements and developed features using JavaScript and Bootstrap."
    }
  ];

  const experienceDiv = document.getElementById('experience');
  experience.forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.innerHTML = `
      <h3>${job.title} at ${job.company}</h3>
      <p><strong>${job.years}</strong></p>
      <p>${job.description}</p>
    `;
    experienceDiv.appendChild(jobDiv);
  });

  // Education
  const education = [
    {
      degree: "B.Sc. in Computer Science",
      school: "University of Tech",
      years: "2014 - 2018"
    }
  ];

  const educationDiv = document.getElementById('education');
  education.forEach(edu => {
    const eduDiv = document.createElement('div');
    eduDiv.innerHTML = `
      <h3>${edu.degree}</h3>
      <p>${edu.school}</p>
      <p><strong>${edu.years}</strong></p>
    `;
    educationDiv.appendChild(eduDiv);
  });
});
