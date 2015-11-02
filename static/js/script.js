window.yardsale = window.yardsale || {};


Ink.requireModules(['Ink.Dom.Loaded_1', 'Ink.UI.Tooltip_1','Ink.Dom.Event_1', 'Ink.UI.Modal_1'], function (DomLoaded, Tooltip, InkEvent, Modal){
    DomLoaded.run(function(){
        new Tooltip('.ink-tooltip');
        Ink.ss('div.item').forEach(function(item){
            $(item).find('ul.thumbs').magnificPopup({
                type: 'image',
                delegate: 'li.thumb > a',
                gallery: {enabled: true}
            });
        });
        //$('ul.thumbs').each(function(ul){
        //    $(ul).magnificPopup({
        //            type: 'image',
        //            delegate: 'li.thumb > a',
        //            gallery: {enabled: true}
        //    });
        //});

        $('div[data-id="003"] ul.thumbs').magnificPopup({
                type: 'image',
                delegate: 'li.thumb > a',
                gallery: {enabled: true}
        });
        $('div[data-id="005"] ul.thumbs').magnificPopup({
                type: 'image',
                delegate: 'li.thumb > a',
                gallery: {enabled: true}
        });

        //window.yardsale.imgModal = new Modal(Ink.i('imgModal'),{
        //    autoDisplay: false
        //});
        //InkEvent.observeMulti(Ink.ss('li.thumb'), 'click', function(ev){
        //    var thumbsList = Ink.Dom.Element.findUpwardsByClass('ul.thumbs', ev.target);
        //    var imgs = Ink.ss('li.thumb > img', thumbsList);
        //    console.log(imgs);
        //    window.yardsale.imgModal.open();
        //});
    });
});

