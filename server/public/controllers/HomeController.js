app.controller('HomeController', ['CustomService', '$scope',function(CustomService, $scope){
    console.log('HomeController');
    let self = this;
    $scope.message = 'Home page'

    self.text = CustomService.text;

    self.addText = function(newText){
        console.log(CustomService.text);
        self.text.list.push(newText);
    }
}])