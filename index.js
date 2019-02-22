    let div = document.createElement('div');
    // console.log(div);
    
    const addContent = () => {

        div.innerHTML = `<div><iframe src="frame/index.html" frameborder=0></iframe></div>`
        document.body.appendChild(div);

        div.setAttribute('style', 'margin: 0 !important; background: white; width: 100%; height: 25vh; position: fixed !important; bottom: 0;');
        div.firstElementChild.setAttribute('style', 'margin: 0 !important; width: 100%; height: 100%;');
        div.firstElementChild.firstElementChild.setAttribute('style', 'opacity: 1 !important; width: 100% !important; height: 100% !important;');

    }

    addContent();

