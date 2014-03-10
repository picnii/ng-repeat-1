function MainCtrl($scope)
{
	$scope.isShow = false;
	$scope.calculate = function()
	{
		if($scope.age <= 25)
			$scope.result = "too young"
		else
			$scope.result = "ok"
		$scope.isShow = true;
	}

	//tinyurl.com/tsrdoc
}