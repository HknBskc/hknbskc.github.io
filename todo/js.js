var app = angular.module("app",['ngSanitize']);

app.controller('todoCtrl', function($scope, $http, $timeout, $sce){

	$scope.todoData = [
	{
		"kategoriName": "Ev", "todos":
		[
		{"text": "Mutfak Petek bozuk", "isDone": false},
		{"text": "Tuvalet Kağıdı al", "isDone": true},
		{"text": "Lorem ipsum Cillum enim dolor ea ut.", "isDone": false},
		{"text": "Laborum ut veniam Duis.", "isDone": true},
		{"text": "Pasta al", "isDone": true}
		]
	},
	{
		"kategoriName": "Araba", "todos":
		[
		{"text": "10 000 de yağ değişimi var", "isDone": false},
		{"text": "Silecek suyu eksik", "isDone": false},
		{"text": "Sağ ön lastik inik", "isDone": true}
		]
	}
	];

	$scope.addTodo = function () {
		$scope.selectedKategori.todos.push({"text": $scope.modelTodo, "isDone": false});
		console.log("İş eklendi: "+'{"text": '+$scope.modelTodo+', "isDone": false}');
		$scope.modelTodo = null;
		$scope.bildirim = 'İş başarıyla eklendi.';
	};

	$scope.addKategori = function () {
		$scope.todoData.push({"kategoriName": $scope.modelKategori, "todos": []});
		console.log("Kategori eklendi: "+'{"kategoriName": '+$scope.modelKategori+', "todos": []}');
		$scope.modelKategori = null;
		$scope.bildirim = "Kategori başarıyla eklendi.";
	};

	$scope.postSelectedKategori = function (kategoriData) {
		$scope.selectedKategori = kategoriData;
	};

	$scope.checkboxEditBilidirim = function (durum) {
		if (durum == "true") {
			$scope.bildirim = '&#9745; "Tamamlandı" olarak işaretlendi.';
			$scope.bildirimZaman = 1500;
		}else if(durum == "false") {
			$scope.bildirim = '&#9744; "Tamamlanmadı" olarak işaretlendi.';
			$scope.bildirimZaman = 1500;
		}
		console.log("Checkbox düzenlendi:"+$scope.bildirim);
	}

	$scope.bildirimTimeout = function () {
		if ($scope.bildirimZaman == null) {
			$scope.bildirimZaman = 3000;
		};

		$timeout(function () {
			$scope.bildirim = null;
		},$scope.bildirimZaman);

		$scope.bildirimZaman = null;
	};

	

});