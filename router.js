Router.route('/', function(){
    this.render('hello');
});


Router.route('/questions', function(){
    this.render('questions');
});


Router.route('/map', function(){
    this.render('map');
});


