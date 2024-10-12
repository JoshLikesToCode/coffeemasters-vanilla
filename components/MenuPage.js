export class MenuPage extends HTMLElement
{
    constructor()
    {
        super();

        // shadow DOM
        this.root = this.attachShadow({mode: 'open'});

        const styles = document.createElement("style");
        this.root.appendChild(styles);

        // use fetch API to get CSS
        async function loadCSS() {
            const rq = await fetch("/components/MenuPage.css");
            const css = await rq.text();
            styles.textContent = css;
        }
        loadCSS();
    }

    // when the component is attached to the DOM
    connectedCallback()
    {
        const template = document.getElementById("menu-page-template");
        // create instance of template
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
}
customElements.define("menu-page", MenuPage);