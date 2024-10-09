const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                // const url1 = event.target.href;
                const url = event.target.getAttribute("href");
                Router.go(url);
            });
        });
        // Event handler for URL changes
        window.addEventListener('popstate',  event => {
            Router.go(event.state.route, false);
        });        
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`);

        if (addToHistory)
        {
            history.pushState({route}, '', route);
        }

        let pageElement = null;
        switch (route)
        {
            case "/":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu";
                break;
            case "/order":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Your Order";
                break;
            default:
                if (route.startsWith("/product-")) {                
                    pageElement = document.createElement("h1");
                    pageElement.textContent("Details");
                    pageElement.dataset.productId = route.substring(route.lastIndexOf("-")+1);
                }
                break;
        }
        
        if (pageElement) {
            document.querySelector("main").innerHTML = "";
            document.querySelector("main").appendChild(pageElement);
        }
    
        window.scrollX = 0;
    }
}

export default Router;