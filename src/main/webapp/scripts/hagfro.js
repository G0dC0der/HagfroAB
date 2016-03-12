var Hagfro = null;

$(function(){
    Hagfro = {};

    Hagfro.construct = function(params) {
        var body = $('body');
        var page = Hagfro.getPage();
        var pageContent = body.html();

        body.html(se.hagfro.renderSite({
            title: params.title,
            renderTrademark: params.renderTrademark,
            pages: [
                {
                    'title': 'Hem',
                    'url': 'home.html',
                    'selected': page === 'home.html'
                },
                {
                    'title': 'HagFro',
                    'url': 'hagfro.html',
                    'selected': page === 'hagfro.html'
                },
                {
                    'title': 'Familjehem',
                    'url': 'familjehem.html',
                    'selected': page === 'familjehem.html'
                },
                {
                    'title': 'Intresseanmälan',
                    'url': 'intresseanmalan.html',
                    'selected': page === 'intresseanmalan.html'
                },
                {
                    'title': 'Verksamhet',
                    'url': 'verksamhet.html',
                    'selected': page === 'verksamhet.html'
                },
                {
                    'title': 'Kontakt',
                    'url': 'kontakt.html',
                    'selected': page === 'kontakt.html'
                }
            ]
        }).content);

        $('.page-content').append(pageContent);

        $('.footer-text').on('click', function(){
            alert('Site created by Pojahn Moradi, HagFro AB collaborator.');
        });
    };

    Hagfro.getPage = function() {
        var url = window.location.href.split('?')[0];
        return url.substring(url.lastIndexOf('/') + 1);
    };

    Hagfro.constructMap = function(id) {
        var position = new google.maps.LatLng(59.42132,	17.84826);
        var map = new google.maps.Map(document.getElementById(id), {
            center: position,
            zoom: 15
        });

        var marker=new google.maps.Marker({
          position:position,
        });
        marker.setMap(map);
    };
});
