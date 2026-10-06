document.addEventListener("DOMContentLoaded", () => {

  const currentPath =
    window.location.pathname
      .replace(/\/+$/, "");

  const links =
    document.querySelectorAll(".nav-links a");


  links.forEach((link) => {

    const linkPath =
      new URL(
        link.href,
        window.location.origin
      ).pathname.replace(/\/+$/, "");


    if (linkPath === currentPath) {

      link.classList.add("active");

    }

  });

});