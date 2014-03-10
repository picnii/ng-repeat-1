function MainCtrl($scope)
{
	$scope.sum = 0;
	$scope.products = [
		{name:"ส้มตำ", price:20, quantity:2},
		{name:"แกงส้ม", price:30, quantity:3},
		{name:"น้ำตกหมู", price:40, quantity:1},
		{name:"ต้ำยำ", price:50, quantity:1}

	]

	for(var i =0; i < $scope.products.length ;i++)
		$scope.sum += $scope.products[i].price * $scope.products[i].quantity;

	//tinyurl.com/tsrdoc
}