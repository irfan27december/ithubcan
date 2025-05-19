document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || "index.html";

  // Highlight active menu item
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Dynamic breadcrumb generation
  const breadcrumbLabels = {
    "index.html": "Home",
    "about.html": "About",
    "trading.html": "Trading Name",
    "services.html": "Services",
    "calibration.html": "Calibration",
    "education.html": "Education",
    "clients.html": "Clients",
    "contacts.html": "Contacts",
    "network_services.html": "Network Services",
    "system_solutions.html": "System Solutions",
    "training.html": "Training",
    "design_consultancy.html": "Design & Consultancy",
    "online_training.html": "Online Training",
    "business_solutions.html": "Business Solutions",
    "education_services.html": "Education Services",
    "calibration_services.html": "Calibration Services – IT Tools",
    "it_auditing.html": "IT Auditing"
  };

  const breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) {
    const label = breadcrumbLabels[currentPage] || "Home";
    breadcrumb.innerHTML = `<a href="index.html">Home</a> &gt; ${label}`;
  }
});
