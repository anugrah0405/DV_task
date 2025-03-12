document.addEventListener("DOMContentLoaded", () => {
    const carouselButtons = document.querySelectorAll(".carousel-indicators button")
  
    carouselButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        carouselButtons.forEach((btn) => {
          btn.classList.remove("active")
          btn.setAttribute("aria-current", "false")
        })
  
        button.classList.add("active")
        button.setAttribute("aria-current", "true")
      })
    })
  
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  
    //"Get Started" buttons
    const ctaButtons = document.querySelectorAll(".btnh")
  
    ctaButtons.forEach((button) => {
      button.addEventListener("mouseover", function () {
        this.style.transform = "translateY(-2px)"
        this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"
        this.style.transition = "all 0.3s ease"
      })
  
      button.addEventListener("mouseout", function () {
        this.style.transform = "translateY(0)"
        this.style.boxShadow = "none"
      })
    })
  
    // Mobile menu setup
    const setupMobileMenu = () => {
      const hamburgerBtn = document.querySelector(".hamburger-btn")

      let mobileMenu = document.querySelector(".mobile-menu")
      if (!mobileMenu) {
        mobileMenu = document.createElement("div")
        mobileMenu.classList.add("mobile-menu")
  
        const closeBtn = document.createElement("button")
        closeBtn.classList.add("close-menu-btn")
        closeBtn.innerHTML = '<i class="fas fa-times"></i>'
        closeBtn.style.position = "absolute"
        closeBtn.style.top = "20px"
        closeBtn.style.right = "20px"
        closeBtn.style.background = "none"
        closeBtn.style.border = "none"
        closeBtn.style.fontSize = "1.5rem"
        closeBtn.style.cursor = "pointer"
        closeBtn.style.color = "#333"
  
        mobileMenu.appendChild(closeBtn)
  
        const menuContent = document.createElement("div")
        menuContent.style.marginTop = "60px"
  
        const navItems = [
          { text: "Features", dropdown: ["Feature 1", "Feature 2", "Feature 3"] },
          { text: "Industries", dropdown: ["Industry 1", "Industry 2", "Industry 3"] },
          { text: "Pricing", dropdown: ["Price 1", "Price 2", "Price 3"] },
          { text: "Resources", dropdown: ["Resource 1", "Resource 2", "Resource 3"] },
        ]
  
        navItems.forEach((item) => {
          const navItemContainer = document.createElement("div")
          navItemContainer.classList.add("mobile-nav-item")
          navItemContainer.style.marginBottom = "15px"
  
          const navLink = document.createElement("div")
          navLink.classList.add("mobile-nav-link")
          navLink.style.fontSize = "1.2rem"
          navLink.style.fontWeight = "500"
          navLink.style.display = "flex"
          navLink.style.justifyContent = "space-between"
          navLink.style.alignItems = "center"
          navLink.style.cursor = "pointer"
  
          const linkText = document.createElement("span")
          linkText.textContent = item.text
          navLink.appendChild(linkText)
  
          if (item.dropdown.length > 0) {
            const dropdownIcon = document.createElement("i")
            dropdownIcon.classList.add("fas", "fa-chevron-down")
            dropdownIcon.style.fontSize = "0.8rem"
            navLink.appendChild(dropdownIcon)
  
            const dropdownContent = document.createElement("div")
            dropdownContent.classList.add("mobile-dropdown-content")
            dropdownContent.style.display = "none"
            dropdownContent.style.paddingLeft = "15px"
            dropdownContent.style.marginTop = "10px"
  
            item.dropdown.forEach((subItem) => {
              const subLink = document.createElement("div")
              subLink.classList.add("mobile-dropdown-item")
              subLink.textContent = subItem
              subLink.style.padding = "8px 0"
              subLink.style.fontSize = "1rem"
              dropdownContent.appendChild(subLink)
            })
  
            navItemContainer.appendChild(navLink)
            navItemContainer.appendChild(dropdownContent)
  
            // Toggle dropdown click
            navLink.addEventListener("click", () => {
              const isOpen = dropdownContent.style.display === "block"
              dropdownContent.style.display = isOpen ? "none" : "block"
              dropdownIcon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)"
              dropdownIcon.style.transition = "transform 0.3s"
            })
          } else {
            navItemContainer.appendChild(navLink)
          }
  
          menuContent.appendChild(navItemContainer)
        })
  
        mobileMenu.appendChild(menuContent)
        document.body.appendChild(mobileMenu)
  
        // close button
        closeBtn.addEventListener("click", () => {
          mobileMenu.style.transform = "translateX(-100%)"
          setTimeout(() => {
            mobileMenu.style.display = "none"
          }, 300)
        })
      }
  
      // hamburger menu
      if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", () => {
          mobileMenu.style.display = "block"
          setTimeout(() => {
            mobileMenu.style.transform = "translateX(0)"
          }, 10)
        })
      }
  
      document.addEventListener("click", (event) => {
        if (
          mobileMenu &&
          mobileMenu.style.display === "block" &&
          !mobileMenu.contains(event.target) &&
          hamburgerBtn &&
          !hamburgerBtn.contains(event.target)
        ) {
          mobileMenu.style.transform = "translateX(-100%)"
          setTimeout(() => {
            mobileMenu.style.display = "none"
          }, 300)
        }
      })
    }
  
    setupMobileMenu()
  
    const playButton = document.querySelector(".play-button button")
    if (playButton) {
      playButton.addEventListener("click", () => {
        alert("Video player would open here!")
      })
    }
  })  