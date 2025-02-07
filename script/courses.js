// Dummy courses data
const coursesData = [
    { title: "Web Development 101", description: "Learn the basics of HTML, CSS, and JavaScript." },
    { title: "Python Programming", description: "Master the fundamentals of Python for data science." },
    { title: "Digital Marketing Essentials", description: "Learn how to promote products and services online." },
];

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById("course-list");
    coursesData.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course");
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button>Enroll Now</button>
        `;
        courseList.appendChild(courseCard);
    });
}

// Call function to populate courses
displayCourses();
