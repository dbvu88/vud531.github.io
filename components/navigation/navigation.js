class Navigation {
    constructor(navBar) {
        this.navBar = navBar;
        document.addEventListener("scroll", () => this.stickNav());
    }

    stickNav() {
        console.log("wheel");
    }

}

class MenuButton {
    constructor(menuButton) {
        this.menuButton = menuButton;
        this.menu = document.querySelector(".menu");
        this.menuButton.addEventListener("click", () => this.expandMenu());
    }

    expandMenu() {
        this.menu.classList.toggle("visible-mobile");
        this.menuButton.classList.toggle("cancel-icon");
    }


}

const menuButton = document.querySelector(".menu-toggle");
new MenuButton(menuButton);
const navBar = document.querySelector(".navigation");
new Navigation(navBar);