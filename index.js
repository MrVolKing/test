    let divWrap = document.createElement('div');
    let divCont = document.createElement('div');
    let iframe = document.createElement('iframe'); 
    
    const addContent = () => {

        divWrap.appendChild(divCont).appendChild(iframe);
        document.body.appendChild(divWrap);

        divWrap.setAttribute('style', 'margin: 0 !important; background: white; width: 100%; height: 25vh; position: fixed !important; bottom: 0;');
        divCont.setAttribute('style', 'margin: 0 !important; width: 100%; height: 100%;');
        
        function setAttributes(el, attrs) {
            for(var key in attrs) {
              el.setAttribute(key, attrs[key]);
            }
          }

        setAttributes(iframe, {"src": "frame/index.html", "style": "opacity: 1 !important; width: 100% !important; height: 100% !important;" });

    }

    addContent();


