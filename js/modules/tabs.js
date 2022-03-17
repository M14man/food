function tabs(tabsParrentSelector, tabsSelector, tabsContainerSelector, tabsContentSelector, activeClass) {
    // Tabs

    let tabsParrent = document.querySelector(tabsParrentSelector),
          tabs = tabsParrent.querySelectorAll(tabsSelector),
          tabcontainer = document.querySelector(tabsContainerSelector),
          tabsContent = tabcontainer.querySelectorAll(tabsContentSelector);
    
    

    function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hiden');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });


    }

    


    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hiden');
        tabsContent[i].classList.add('active', 'fade');

        tabs[i].classList.add(activeClass);
    }


    hideTabContent();
    showTabContent();


    tabsParrent.addEventListener('click', event => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {           
            tabs.forEach((item, i) => {
                if (target == item) {                   
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;