const elements = {
  tabs: document.querySelectorAll('.tab'),
  tabLink: document.querySelectorAll('.tabs__header h3 a'),
  tabHeaders: document.querySelectorAll('.tabs__header h3')
};

const setTabs = () => {
  // Show only the first tab
  [...elements.tabs].forEach((tab, index) => {
    if (index > 0) tab.style.display = 'none';
  });

  //   Add event listeners to all the links
  [...elements.tabLink].forEach(tabLink => {
    tabLink.addEventListener('click', e => {
      e.preventDefault();

      //   Remove active class all headers
      [...elements.tabHeaders].forEach(el =>
        el.classList.remove('tabs__header--active')
      );

      const parentEl = e.target.closest('h3');

      //   Set active class to parent link's parent
      parentEl.classList.add('tabs__header--active');

      const setTabActive = parentEl.dataset.tab;

      [...elements.tabs].forEach(currentTab => {
        currentTab.style.display = 'none';

        const setTab = document.querySelector(`.tabs .${setTabActive}`);

        setTab.style.display = 'block';

        setTab.classList.add('tab__active');
      });
    });
  });
};

setTabs();
