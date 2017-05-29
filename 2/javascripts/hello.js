$(function(){
	// DOM構築完了
	
	// コントローラの定義
	var helloWorldController = {
		__name: 'HelloWorldController',
		
		'#button click': function(){
			alert("こんにちは世界!");
		}
	};
	
	// コントローラ化する
	h5.core.controller('body', helloWorldController);
	
})