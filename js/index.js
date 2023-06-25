const listTabs = document.querySelectorAll('[data-tab]');
const photographyWrapperItems = document.querySelectorAll('[data-tab-content]');

listTabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        const targetTab = event.target.getAttribute('data-tab');
        listTabs.forEach(tabTitle => tabTitle.classList.remove('active-tab'));

        photographyWrapperItems.forEach(photographyWrapper => {
            photographyWrapper.classList.add('hidden');
        })

        tab.classList.add('active-tab');

        document.getElementById(targetTab).classList.remove('hidden');
    })
})

document.querySelector('[data-tab="tab-1"]').classList.add('active-tab')
document.querySelector('#tab-1').classList.remove('hidden');