// Dummy data for the student and their courses/events
const student = {
    name: "John Doe",
    email: "john.doe@example.com",
    studentId: "123456789",
    joinDate: "January 15, 2023"
};

const courses = [
    { name: "Web Development 101", description: "Learn the basics of HTML, CSS, and JavaScript." },
    { name: "Data Science Basics", description: "Introduction to data analysis and Python." },
    { name: "Digital Marketing", description: "Learn how to effectively market online." }
];

const events = [
    { name: "Live Coding Session", date: "February 15, 2025", time: "3:00 PM" },
    { name: "Webinar: Career in Tech", date: "February 20, 2025", time: "1:00 PM" },
    { name: "Group Study: Python Basics", date: "February 25, 2025", time: "10:00 AM" }
];

// Display student info
document.getElementById("student-name").textContent = student.name;
document.getElementById("student-email").textContent = student.email;
document.getElementById("student-id").textContent = student.studentId;
document.getElementById("join-date").textContent = student.joinDate;

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById("course-list");
    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course");
        courseCard.innerHTML = `
            <h4>${course.name}</h4>
            <p>${course.description}</p>
        `;
        courseList.appendChild(courseCard);
    });
}

// Function to display events
function displayEvents() {
    const eventList = document.getElementById("event-list");
    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event");
        eventCard.innerHTML = `
            <h4>${event.name}</h4>
            <p>${event.date} at ${event.time}</p>
        `;
        eventList.appendChild(eventCard);
    });
}

// Call functions to populate courses and events
displayCourses();
displayEvents();
