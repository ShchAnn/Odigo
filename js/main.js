(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOFFset > 50) {
            header.classlist.add('header-active');
        }
    };
}());