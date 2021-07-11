const movieList = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/81l-H5GiQZL._AC_SL1500_.jpg',
        name: 'アイアンマン',
        day: '2001.8.1',
        timeSeriesOrder: 3,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/61ExZhdUy9L._AC_SY445_.jpg',
        name: 'アイアンマン2',
        day: '2006.6.15',
        timeSeriesOrder: 2,
    },
    {
        img: 'https://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/08/2e/148334_01.jpg',
        name: 'ハルク',
        day: '2012.11.12',
        timeSeriesOrder: 6,
    },
    {
        img: 'https://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/5a/c4/157972_01.jpg',
        name: 'アイアンマン3',
        day: '2014.4.20',
        timeSeriesOrder: 7,
    },
    {
        img: 'https://d2ueuvlup6lbue.cloudfront.net/attachments/7bf9979faea84547dd4910716a9b7c56eedc3963/store/fitpad/300/420/a1ed8d7705df45b20e8d46053fd3909571859cdc0c7b991d94306a278f94/_.jpg',
        name: 'ドクター・ストレンジ',
        day: '2015.2.23',
        timeSeriesOrder: 10,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/81l-H5GiQZL._AC_SL1500_.jpg',
        name: 'アイアンマン',
        day: '2001.8.1',
        timeSeriesOrder: 5,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/61ExZhdUy9L._AC_SY445_.jpg',
        name: 'アイアンマン2',
        day: '2006.6.15',
        timeSeriesOrder: 1,
    },
    {
        img: 'https://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/08/2e/148334_01.jpg',
        name: 'ハルク',
        day: '2012.11.12',
        timeSeriesOrder: 8,
    },
    {
        img: 'https://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/5a/c4/157972_01.jpg',
        name: 'アイアンマン3',
        day: '2014.4.20',
        timeSeriesOrder: 4,
    },
    {
        img: 'https://d2ueuvlup6lbue.cloudfront.net/attachments/7bf9979faea84547dd4910716a9b7c56eedc3963/store/fitpad/300/420/a1ed8d7705df45b20e8d46053fd3909571859cdc0c7b991d94306a278f94/_.jpg',
        name: 'ドクター・ストレンジ',
        day: '2015.2.23',
        timeSeriesOrder: 9,
    },
];

const list = document.getElementById('list');

// 現在表示している映画リストをすべて削除する関数
const allDelete = () => {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    };
};

// 映画リストを表示する関数
const addList = (movieList) => {
    movieList.map((movie) => {
        const li = document.createElement('li');

        // 画像設定
        const imgBox = document.createElement('div');
        imgBox.className = 'img';
        const img = document.createElement('img');
        img.setAttribute('src',movie.img);
        imgBox.appendChild(img);
        li.appendChild(imgBox);

        // テキスト設定

        // テキストボックス生成
        const textBox = document.createElement('div');
        textBox.className = 'text_box';
        // 映画タイトル設定
        const ttlText = document.createElement('p');
        ttlText.className = 'ttl';
        ttlText.innerText = movie.name;
        textBox.appendChild(ttlText);
        // 公開日設定
        const dayText = document.createElement('p');
        dayText.className = 'day';
        dayText.innerText = movie.day;
        textBox.appendChild(dayText);
        // 時系列番号設定
        const timeSeriesOrderNum = document.createElement('p');
        timeSeriesOrderNum.className = 'releaseOrder';
        timeSeriesOrderNum.innerText = `時系列: ${movie.timeSeriesOrder}`;
        textBox.appendChild(timeSeriesOrderNum);

        // テキストボックスをliタグに追加
        li.appendChild(textBox);

        // ulにliを追加
        list.appendChild(li);
    });
};

addList(movieList);

// 時系列に並び替える関数
const timeSeriesBtn = document.getElementById('time_series_btn');
timeSeriesBtn.addEventListener('click',function() {
    addActive(this);
    // 映画リストを並び替え
    const sort_target = 'timeSeriesOrder'; //ソート対象を変数で設定
    const newMovieList = [...movieList];
    const sortedMovieList = newMovieList.sort((a, b) => a[sort_target] - b[sort_target]);

    allDelete();

    addList(sortedMovieList);
});

// 順番を初期状態(公開順)にする関数
const releaseOrderBtn = document.getElementById('release_order_btn');
releaseOrderBtn.addEventListener('click',function() {
    addActive(this);
    allDelete();
    addList(movieList);
});

const addActive = function(activeBtn) {
    const btns = document.querySelectorAll('.btn_box li button');
    btns.forEach((value) => {
        value.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

const initialBtn = document.getElementById('release_order_btn');
addActive(initialBtn);