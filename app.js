var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.set('views', './views/pages');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components')));

app.listen(port);

console.log('imooc started on port ' + port);

// index page
app.get('/', function (req, res) {
    res.render('index', {
        title: 'imooc 首页',
        movies: [{
            title: '异形：契约',
            _id: 1,
            poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
        },
        {
            title: '异形：契约',
            _id: 2,
            poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
        },
        {
            title: '异形：契约',
            _id: 3,
            poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
        },
        {
            title: '异形：契约',
            _id: 4,
            poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
        },
        {
            title: '异形：契约',
            _id: 5,
            poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
        },
        {
            title: '异形：契约',
            _id: 6,
            poster: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2167448161.webp'
        }]
    });
});

// detail page
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'imooc 详情页',
        movie: {
            director: '雷德利·斯科特',
            country: '美国',
            title: '异形：契约',
            year: 2017,
            poster: 'https://img3.doubanio.com/img/celebrity/small/32214.jpg',
            language: '英语',
            flash: 'http://119.188.38.131/youku/65743530DBB4C838FBA166544F/0300080100585FB87B799839BBD120136343F3-AD4F-8451-FC2A-A9554D727689.mp4?sid=049846040186412f9e92c&ctype=12&ccode=0401&duration=133&expire=18000&psid=599c21659cf2ed62339a7ba955d34987&ups_client_netip=114.240.103.157&ups_ts=1498460401&ups_userid=&utid=LT%2FBEcSPnjsCAXt3LLqrfLyH&vid=XMTg4NTUxNjQ5Ng%3D%3D&vkey=A57113a190f13ec64fa327c44ec8d116e&nk=411351972806_24974340174&ns=0_22165960&special=true',
            summary: '“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后，一群新的宇航员乘坐着“契约号”飞船前往遥远的星系寻找殖民地，他们来到一处看似天堂般的星球，实则是黑暗、危险的地狱，在那里他们见到了“普罗米修斯”号唯一的幸存者——由迈克尔·法斯宾德饰演的生化人大卫，一场毁灭性的巨大灾难即将到来。'
        }
    });
});

// admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页',
        movie: {
            title: '',
            director: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    });
});

// list page
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'imooc 列表页',
        movies: [{
            title: '异形：契约',
            _id: 1,
            director: '雷德利·斯科特',
            country: '美国',
            year: 2017,
            poster: 'https://img3.doubanio.com/img/celebrity/small/32214.jpg',
            language: '英语',
            flash: 'http://119.188.38.131/youku/65743530DBB4C838FBA166544F/0300080100585FB87B799839BBD120136343F3-AD4F-8451-FC2A-A9554D727689.mp4?sid=049846040186412f9e92c&ctype=12&ccode=0401&duration=133&expire=18000&psid=599c21659cf2ed62339a7ba955d34987&ups_client_netip=114.240.103.157&ups_ts=1498460401&ups_userid=&utid=LT%2FBEcSPnjsCAXt3LLqrfLyH&vid=XMTg4NTUxNjQ5Ng%3D%3D&vkey=A57113a190f13ec64fa327c44ec8d116e&nk=411351972806_24974340174&ns=0_22165960&special=true',
            summary: '“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后，一群新的宇航员乘坐着“契约号”飞船前往遥远的星系寻找殖民地，他们来到一处看似天堂般的星球，实则是黑暗、危险的地狱，在那里他们见到了“普罗米修斯”号唯一的幸存者——由迈克尔·法斯宾德饰演的生化人大卫，一场毁灭性的巨大灾难即将到来。'
        }]
    });
});
