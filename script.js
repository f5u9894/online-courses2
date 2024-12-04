// تحديد الزر والقسم
const browseCoursesBtn = document.getElementById("browse-courses-btn");
const coursesSection = document.getElementById("courses-section");

// إضافة حدث النقر لإظهار القسم
browseCoursesBtn.addEventListener("click", () => {
    coursesSection.classList.remove("hidden");
    coursesSection.scrollIntoView({ behavior: "smooth" });
});
