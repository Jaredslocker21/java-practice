const cursor = document.getElementById('cursor');
const header = document.querySelector('header');
const sideNav = document.querySelector('.sidenav');

document.addEventListener('mousemove', (e) => {
    // Get cursor position
    const x = e.clientX;
    const y = e.clientY;

    // Calculate background color based on cursor position
    const headerColor = `rgb(${x % 256}, ${y % 256}, ${(x + y) % 256})`;
    const sideNavColor = `rgb(${(x + y) % 256}, ${x % 256}, ${y % 256})`;

    // Update background colors
    header.style.backgroundColor = headerColor;
    sideNav.style.backgroundColor = sideNavColor;

    // Update the position of the cursor element
    cursor.style.transform = `translate(${x}px, ${y}px)`;
});

// Rest of your cursor.js code
