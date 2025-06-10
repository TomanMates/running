// Handle contact form submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            formMessage.style.display = "block";
            contactForm.reset();
        });
    }

    // Add new event functionality
    const addEventButton = document.getElementById("addEventButton");
    const eventsList = document.getElementById("eventsList");

    if (addEventButton && eventsList) {
        addEventButton.addEventListener("click", () => {
            const newEvent = prompt("Enter the new event (e.g., 'Fun Run - July 5, 2025'):");
            if (newEvent) {
                const newEventItem = document.createElement("li");
                newEventItem.textContent = newEvent;
                eventsList.appendChild(newEventItem);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Handle registration form
    const registerForm = document.getElementById("registerForm");
    const registerMessage = document.getElementById("registerMessage");

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                alert("Registration successful! Check your email.");
                registerForm.reset();
            } else {
                alert("Registration failed.");
            }
        });
    }

    // Handle login form
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                alert("Login successful!");
                loginForm.reset();
            } else {
                alert("Login failed. Check your credentials.");
            }
        });
    }

    // Handle events list
    const eventsList = document.getElementById("eventsList");
    const addEventButton = document.getElementById("addEventButton");

    if (eventsList && addEventButton) {
        // Load events from Local Storage
        const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
        savedEvents.forEach((event) => {
            const eventItem = document.createElement("li");
            eventItem.textContent = event;
            eventsList.appendChild(eventItem);
        });

        // Add new event
        addEventButton.addEventListener("click", () => {
            const newEvent = prompt("Enter the new event (e.g., 'Fun Run - July 5, 2025'):");
            if (newEvent) {
                const eventItem = document.createElement("li");
                eventItem.textContent = newEvent;
                eventsList.appendChild(eventItem);

                // Save to Local Storage
                savedEvents.push(newEvent);
                localStorage.setItem("events", JSON.stringify(savedEvents));
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    // Open sidebar
    openSidebar.addEventListener("click", () => {
        sidebar.style.width = "250px";
    });

    // Close sidebar
    closeSidebar.addEventListener("click", () => {
        sidebar.style.width = "0";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.querySelector(".intro-screen");
    const gridContainer = document.querySelector(".grid-container");
    const gridItems = document.querySelectorAll(".grid-item");

    // Přidání event listeneru na kolečko myši
    window.addEventListener("wheel", () => {
        if (introScreen) {
            introScreen.classList.add("hidden"); // Skryje úvodní obrazovku
        }
        if (gridContainer) {
            gridContainer.classList.add("visible"); // Zobrazí boxy s odkazy
            gridItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";
                }, index * 200); // Postupné zobrazení
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.querySelector(".intro-screen");
    const gridContainer = document.querySelector(".grid-container");

    // Přidání event listeneru na scroll
    window.addEventListener("scroll", () => {
        if (introScreen) {
            introScreen.classList.add("hidden"); // Skryje úvodní obrazovku
        }
        if (gridContainer) {
            gridContainer.classList.add("visible"); // Zobrazí boxy s odkazy
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.querySelector(".intro-screen");
    const contactContainer = document.querySelector(".contact-container");

    // Přidání event listeneru na kolečko myši
    window.addEventListener("wheel", () => {
        if (introScreen) {
            introScreen.classList.add("hidden"); // Skryje úvodní obrazovku
        }
        if (contactContainer) {
            contactContainer.classList.add("visible"); // Zobrazí kontaktní informace
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.querySelector(".intro-screen");
    const mainHeader = document.querySelector(".main-header");
    const contactContainer = document.querySelector(".contact-container");
    const body = document.body;

    // Přidání event listeneru na kolečko myši
    window.addEventListener("wheel", () => {
        if (introScreen) {
            introScreen.classList.add("hidden"); // Skryje úvodní obrazovku
            body.style.background = "url('../images/eluid2.png') no-repeat center center fixed"; // Nastaví obrázek jako pozadí
            body.style.backgroundSize = "cover";
        }
        if (mainHeader) {
            mainHeader.classList.add("visible"); // Zobrazí hlavičku
        }
        if (contactContainer) {
            contactContainer.classList.add("visible"); // Zobrazí kontaktní informace
        }
    });
});

document.addEventListener("wheel", (event) => {
    event.preventDefault(); // Toto blokuje scrollování
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Zkontrolujte, zda nemáte preventDefault() nebo nějaký jiný kód, který by blokoval akci
    });
});

// Funkce pro zneviditelnění úvodní obrazovky
document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.querySelector('.intro-screen');

    // Při kliknutí na intro screen zmizí
    introScreen.addEventListener('click', () => {
        introScreen.classList.add('hidden');
        document.querySelector('.background-image').classList.remove('hidden'); // Ukažeme pozadí
        document.querySelector('.grid-container').classList.add('visible'); // Zobrazíme grid
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.querySelector('.intro-screen');
    const gridItems = document.querySelectorAll('.grid-item');
    let hasIntroScreenHidden = false; // Stav pro kontrolu, jestli intro screen zmizel

    // Funkce pro zneviditelnění intro obrazovky
    introScreen.addEventListener('click', () => {
        if (!hasIntroScreenHidden) {
            introScreen.classList.add('hidden'); // Skrytí intro obrazovky
            document.querySelector('.background-image').classList.remove('hidden'); // Ukázání pozadí
            hasIntroScreenHidden = true; // Nastavení stavu, že intro je skryté
        } else {
            // Pokud už intro zmizelo, ukážeme boxy
            gridItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible'); // Zobrazení boxu
                }, index * 100); // Zpoždění pro postupné zobrazení
            });
        }
    });
});

// Swipe detection for mobile devices
function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches;
}

document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.querySelector('.intro-screen');
    const gridContainer = document.querySelector('.grid-container');
    const gridItems = document.querySelectorAll('.grid-item');
    let touchStartY = null;
    let hasIntroScreenHidden = false;

    if (introScreen && isMobile()) {
        introScreen.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                touchStartY = e.touches[0].clientY;
            }
        });
        introScreen.addEventListener('touchend', (e) => {
            if (touchStartY === null) return;
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;
            // Swipe up (hide intro)
            if (deltaY > 50 && !hasIntroScreenHidden) {
                introScreen.classList.add('hidden');
                document.querySelector('.background-image').classList.remove('hidden');
                gridContainer.classList.add('visible');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 200);
                });
                hasIntroScreenHidden = true;
            }
            // Swipe down (show intro again, optional)
            // else if (deltaY < -50 && hasIntroScreenHidden) {
            //     introScreen.classList.remove('hidden');
            //     gridContainer.classList.remove('visible');
            //     hasIntroScreenHidden = false;
            // }
            touchStartY = null;
        });
    }
});
