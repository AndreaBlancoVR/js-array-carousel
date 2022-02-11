
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const MAIN_SECTION = document.getElementById('main-section');

const ROW_MASTER = document.createElement('div');
ROW_MASTER.classList.add('row-master');
MAIN_SECTION.append(ROW_MASTER);

const MAIN_WRAPPER = document.createElement('div');
MAIN_WRAPPER.classList.add('main-wrapper');
ROW_MASTER.append(MAIN_WRAPPER);

const MAIN_ITEM = document.createElement('div');
MAIN_ITEM.classList.add('main-item')
MAIN_WRAPPER.append(MAIN_ITEM)

const MAIN_TEXT = document.createElement('div');
MAIN_TEXT.classList.add('main-text')
MAIN_WRAPPER.append(MAIN_TEXT)

const TITLE = document.createElement('h3');
MAIN_TEXT.append(TITLE)

const CAPTION = document.createElement('p');
MAIN_TEXT.append(CAPTION)

const SIDE_BAR = document.createElement('aside');
SIDE_BAR.classList.add('side-bar')
ROW_MASTER.append(SIDE_BAR)

const SIDE_WRAPPER = document.createElement('div');
SIDE_WRAPPER.classList.add('side-wrapper')
SIDE_BAR.append(SIDE_WRAPPER)

const UL = document.createElement('ul');
SIDE_WRAPPER.append(UL)

const ARROWS = document.createElement('div');
ARROWS.classList.add('arrows')
SIDE_WRAPPER.append(ARROWS)

const UP_ARROW = document.createElement('span');
UP_ARROW.classList.add('up-arrow')
ARROWS.append(UP_ARROW)

const DOWN_ARROW = document.createElement('span');
UP_ARROW.classList.add('down-arrow')
ARROWS.append(DOWN_ARROW)
