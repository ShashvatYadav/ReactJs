const container = document.querySelector("#root");

function inject (element, container){
    const newElement = document.createElement(element.type);
    for (pops in element.props){
        newElement.setAttribute(pops, element.props[pops]);
    }
    newElement.innerText = element.child;
    container.append(newElement);
};
const reactElement = {
    type : 'a',
    props : {
        href : "https://x.com/home"
    },
    child : "visit twitter"
};

inject(reactElement, container);