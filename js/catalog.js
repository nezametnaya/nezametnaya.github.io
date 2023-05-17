document.addEventListener('DOMContentLoaded', () => {
   
    var div =  document.querySelector('.cataog-items-data');
    div.innerHTML = '';
    var newContent = '';
    var images = [
    "img/catalog1.png",
    "img/catalog2.png",
    "img/catalog3.png",
    "img/catalog4.png",
    "img/catalog5.png",
    "img/catalog6.png",
    "img/catalog7.png",
    "img/catalog8.png",
    "img/catalog9.png",
    "img/catalog10.png",
    "img/catalog11.png",
    "img/catalog12.png",
    "img/catalog13.png",
    "img/catalog14.png",
    "img/catalog15.png",
    "img/catalog16.png",
    ];
    var shortName = [
        "Martin",
        "Alba",
        "Toscana",
        "Leonardo",
        "Boorbon",
        "Emilio",
        "Nensi",
        "Tatami",
        "Regina",
        "Malta",
        "Versal",
        "Exclusive 1",
        "Floret",
        "Exclusive bed 2",
        "Arni",
        "Taiti",
        ];
    for(let i = 0; i < images.length; i++){
        newContent += '<a class="catalog-items-data-item" href="furniture.html#tab_01"><div class="catalog-catalog-items-data-item-img"><img src="'
        newContent += images[i];
        newContent += '" alt=""></div> <div class="catalog-items-data-item-text">'
        newContent += shortName[i];
        newContent += '</div></a>';
    }
    div.innerHTML = newContent;

    var button4 = document.querySelector('.catalog-filters-block-right-4');
    var button2 = document.querySelector('.catalog-filters-block-right-2');
    button4.addEventListener('click', function () {
        div.innerHTML = '';
        var newContent = '';
        var images = [
        "img/catalog1.png",
        "img/catalog2.png",
        "img/catalog3.png",
        "img/catalog4.png",
        "img/catalog5.png",
        "img/catalog6.png",
        "img/catalog7.png",
        "img/catalog8.png",
        "img/catalog9.png",
        "img/catalog10.png",
        "img/catalog11.png",
        "img/catalog12.png",
        "img/catalog13.png",
        "img/catalog14.png",
        "img/catalog15.png",
        "img/catalog16.png",
        ];
        var shortName = [
            "Martin",
            "Alba",
            "Toscana",
            "Leonardo",
            "Boorbon",
            "Emilio",
            "Nensi",
            "Tatami",
            "Regina",
            "Malta",
            "Versal",
            "Exclusive 1",
            "Floret",
            "Exclusive bed 2",
            "Arni",
            "Taiti",
            ];
        for(let i = 0; i < images.length; i++){
            newContent += '<a class="catalog-items-data-item" href="furniture.html#tab_01"><div class="catalog-catalog-items-data-item-img"><img src="'
            newContent += images[i];
            newContent += '" alt=""></div> <div class="catalog-items-data-item-text">'
            newContent += shortName[i];
            newContent += '</div></a>';
        }
        div.innerHTML = newContent;
    })
    button2.addEventListener('click', function () {
        div.innerHTML = '';
        var newContent = '';
        var images = [
        "img/catalog1.png",
        "img/catalog2.png",
        "img/catalog3.png",
        "img/catalog4.png",
        "img/catalog5.png",
        "img/catalog6.png",
        "img/catalog7.png",
        "img/catalog8.png",
        "img/catalog9.png",
        "img/catalog10.png",
        "img/catalog11.png",
        "img/catalog12.png",
        "img/catalog13.png",
        "img/catalog14.png",
        "img/catalog15.png",
        "img/catalog16.png",
        ];
        var shortName = [
            "Martin",
            "Alba",
            "Toscana",
            "Leonardo",
            "Boorbon",
            "Emilio",
            "Nensi",
            "Tatami",
            "Regina",
            "Malta",
            "Versal",
            "Exclusive 1",
            "Floret",
            "Exclusive bed 2",
            "Arni",
            "Taiti",
            ];
        var description = [
                "Мягкое кресло «Альба» компании «Экми -мебель»- это украшение и удобное дополнение Вашего интерьера. Кресло «Альба» оптимальная личная зона для отдыха.",
                "Мягкое кресло «Альба» компании «Экми -мебель»- это украшение и удобное дополнение Вашего интерьера. Кресло «Альба» оптимальная личная зона для отдыха.",
                "Кресло «Тоскана» компании «EKMI-мебель». Располагает для удобного времяпровождения.",
                "Мягкое кресло «Альба» компании «Экми -мебель»- это украшение и удобное дополнение Вашего интерьера. Кресло «Альба» оптимальная личная зона для отдыха.",
                "Кресло «Тоскана» компании «EKMI-мебель». Располагает для удобного времяпровождения.",
                "Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.",
                "Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.",
                "Двусторонний матрац МАЛЬТА без пружин – удачное сочетание жестокости и комфортности. Самый низкий матрац в нашей линейке.",
                "Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.",
                "Двусторонний матрац МАЛЬТА без пружин – удачное сочетание жестокости и комфортности. Самый низкий матрац в нашей линейке.",
                "Мягкие формы кровати «Ненси» создадут уют и комфорт в Вашей спальне.",
                "Мягкие формы кровати «Ненси» создадут уют и комфорт в Вашей спальне.",
                "Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.",
                "Эксклюзивная мебель",
                "Легкий, воздушный, невесомый… Диван «Арни», непроизвольно вызывающий ассоциацию с облаком,  буквально излучает уют. Объёмные  модули легко комбинируются между собой, создавая любимое место отдыха для всей семьи. Композиция может быть дополнена креслами и пуфами.",
                "Эксклюзивный матрац с ортопедическим эффектом без пружин. Самая жесткая, но при этом очень комфортная модель во всей линейке. Идеальный вариант для крупных людей.",
                ];
        for(let i = 0; i < images.length; i++){
            newContent += '<a class="catalog-items-data-item-big" href="furniture.html#tab_01"><div class="catalog-items-data-item-left"><div class="catalog-catalog-items-data-item-img"><img src="'
            newContent += images[i];
            newContent += '" alt=""></div></div> <div class="catalog-items-data-item-right"><div class="catalog-items-data-item-text">'
            newContent += shortName[i];
            newContent += '</div><div class="catalog-items-data-item-text-description">'
            newContent += description[i];
            newContent += '</div></div></a>';
        }
        div.innerHTML = newContent;
    })
});