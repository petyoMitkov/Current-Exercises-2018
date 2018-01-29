$(document).ready(function() {

    class TitleBar {
        constructor(title) {
            this.title = title;
            this.links = [];
        }
    
        addLink(href, name) {
            let link = $("<a>")
                .addClass("menu-link")
                .attr("href", href)
                .text(name);
            
            this.links.push(link);
        }

        appendTo(selector) {
            // Creating elements
            let header = $("<header>").addClass("header");
            let headerRow = $("<div>").addClass("header-row");
            let button = $("<a>")
                .addClass("button")
                .html("&#9776;")
                .click(() => $("div.drawer").toggle());
            let span = $("<span>").addClass("title").text(this.title);
            let drawer = $("<div>").addClass("drawer");
            let nav = $("<nav>").addClass("menu");
            
            // Append elements
            this.links.forEach(link => nav.append(link));

           
            headerRow.append(button);
            headerRow.append(span);            
            drawer.append(nav);
            header.append(headerRow);
            header.append(drawer);
            

            $(selector).append(header);
            console.log("appendTo()");

        }
    }
    
    // Test the functionality
    let header = new TitleBar("Title Bar Petyo");
    header.addLink("/", "Home");
    header.addLink("about", "About");
    header.addLink("results", "Results");
    header.addLink("faq", "FAQ");

    header.appendTo("#container");
    
    console.log(header.links[0]);


});