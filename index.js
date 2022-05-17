const icons = document.querySelector('.icons');

const theme = ['','dark','light'];

theme.forEach(function(item){
    var template = `
        <div class="icon" data-theme=${item}>
            <span class="multiply"></span>
            <span class="divide"></span>
            <span class="minus"></span>
            <span class="plus"></span>
        </div>`
    icons.insertAdjacentHTML('beforeend',template);
});