const navSlide = () => {
  const nav_icon = document.querySelector(".nav-icon");
  const nav = document.querySelector(".tabs");
  const tabs = document.querySelectorAll(".tabs li");

  nav_icon.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    tabs.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `tabsFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    nav_icon.classList.toggle("toggle");
  });
};

navSlide();

/************************** EXPANDING CARDS ***************************************/
const cards = document.querySelectorAll(".card");

const toggleExpansion = (element, to, duration = 275) => {
  return new Promise((res) => {
    element.animate(
      [
        {
          top: to.top,
          left: to.left,
          width: to.width,
          height: to.height,
        },
      ],
      { duration, fill: "forwards", ease: "ease-in" }
    );
    setTimeout(res, duration);
  });
};

const fadeContent = (element, opacity, duration = 275) => {
  return new Promise((res) => {
    [...element.children].forEach((child) => {
      requestAnimationFrame(() => {
        child.style.transition = `opacity ${duration}ms linear`;
        child.style.opacity = opacity;
      });
    });
    setTimeout(res, duration);
  });
};

const getCardContent = (title, type) => {
  if (
    title ==
    "\n" + "                Cyberdyne Systems CPU" + "\n" + "            "
  ) {
    return `
          <div class="card-content">
              <h2>${title}</h2>
                <img src="./assets/${type}.jpg" alt="${title}">
              <p>
              &ensp; Originally Cyberdyne CPUs were only deployed in factory hardware, to keep production strong and steady, but our innovations through the late 80s and 90s have paved the way for the future of the world as we know it, now we are focusing our efforts on a greater goal, world peace. 
              </p>
              <p>
              &ensp; CPUs for factory hardware to ensure automation and production is steady and accurate.
              </p>
          </div>
      `;
  } else if (
    title ==
    "\n" + "                Project2" + "\n" + "            "
  ) {
    return `
          <div class="card-content">
              <h2>${title}</h2>
              <img src="./assets/${type}.png" alt="${title}">
              <p>
                  PROJECT 2 CONTENT
              </p>
          </div>
      `;
  } else if (
    title ==
    "\n" + "                Project3" + "\n" + "            "
  ) {
    return `
          <div class="card-content">
              <h2>${title}</h2>
              <img src="./assets/${type}.png" alt="${title}">
              <p>
                  PROJECT 3 CONTENT
              </p>
          </div>
      `;
  } else if (
    title ==
    "\n" + "                Project4" + "\n" + "            "
  ) {
    return `
          <div class="card-content">
              <h2>${title}</h2>
              <img src="./assets/${type}.png" alt="${title}">
              <p>
                  PROJECT 4 CONTENT
              </p>
          </div>
      `;
  } else if (
    title ==
    "\n" + "                Project5" + "\n" + "            "
  ) {
    return `
          <div class="card-content">
              <h2>${title}</h2>
              <img src="./assets/${type}.png" alt="${title}">
              <p>
                  PROJECT 5 CONTENT
              </p>
          </div>
      `;
  } else if (
    title ==
    "\n" + "                Project6" + "\n" + "            "
  ) {
    return `
          <div class="card-content">
              <h2>${title}</h2>
              <img src="./assets/${type}.png" alt="${title}">
              <p>
                  PROJECT 6 CONTENT
              </p>
          </div>
      `;
  }
};

const onCardClick = async (e) => {
  const card = e.currentTarget;
  // clone the card
  const cardClone = card.cloneNode(true);
  // get the location of the card in the view
  const { top, left, width, height } = card.getBoundingClientRect();
  // position the clone on top of the original
  cardClone.style.position = "fixed";
  cardClone.style.top = top + "px";
  cardClone.style.left = left + "px";
  cardClone.style.width = width + "px";
  cardClone.style.height = height + "px";
  // hide the original card with opacity
  card.style.opacity = "0";
  // add card to the same container
  card.parentNode.appendChild(cardClone);
  // create a close button to handle the undo
  const closeButton = document.createElement("button");
  // position the close button top corner
  closeButton.style = `
          position: fixed;
          z-index: 10000;
          top: 12vh;
          right: 8vw;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: chocolate;
          cursor: pointer;
      `;
  // attach click event to the close button
  closeButton.addEventListener("click", async () => {
    // remove the button on close
    closeButton.remove();
    // remove the display style so the original content is displayed right
    cardClone.style.removeProperty("display");
    cardClone.style.removeProperty("padding");
    // show original card content
    [...cardClone.children].forEach((child) =>
      child.style.removeProperty("display")
    );
    fadeContent(cardClone, "0");
    // shrink the card back to the original position and size
    await toggleExpansion(
      cardClone,
      {
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
      },
      300
    );
    // show the original card again
    card.style.removeProperty("opacity");
    // remove the clone card
    cardClone.remove();
  });
  // fade the content away
  fadeContent(cardClone, "0").then(() => {
    [...cardClone.children].forEach((child) => (child.style.display = "none"));
  });
  // expand the clone card
  await toggleExpansion(cardClone, {
    top: "10vh",
    left: "3vh",
    width: "90vw",
    height: "85vh",
  });
  const content = getCardContent(card.textContent, card.dataset.type);
  // set the display block so the content will follow the normal flow in case the original card is not display block
  cardClone.style.display = "block";
  cardClone.style.padding = "0";
  // append the close button after the expansion is done
  cardClone.appendChild(closeButton);
  cardClone.insertAdjacentHTML("afterbegin", content);
};

cards.forEach((card) => card.addEventListener("click", onCardClick));
