(function () {

	var app;
	app = angular.module('epoOrientaky', []);


	app.controller('RegistraceController', function () {
		this.zavody = zavody;
		this.rocniky = rocniky;
	});


	app.controller('PanelRocnikuController', function () {
		this.rocniky = rocniky;
		this.vybranyRocnik = 2016;

		this.vyberRocnik = function (rocnik) {
			this.vybranyRocnik = rocnik;
		};

		this.jeVybranyRocnik = function (rocnik) {
			return this.vybranyRocnik === rocnik;
		};
	});

	app.directive('panelyRocnikuZavodu', function (){
		return {
			restrict : 'E',
			templateUrl: 'panely-rocniku-zavodu.html',
			controller: function (){

			},
			controllerAs: 'rocniky'
		};
	});





	var rocniky = [
		{
			rok : 2016
		},
		{
			rok : 2015
		},
		{
			rok : 2014
		}
	];
	var zavody = [
		{
			id              : 'abc1',
			nazev           : 'První závod',
			startovne       : 50,
			popis           : 'Popis prvního závodu sezóny 2016',
			propozice       : '#google-docs-link',
			lokalita        : 'Staré město',
			datum           : '2016-03-01',
			muzeRegistrovat : true,
			rocnik          : 2016
		},
		{
			id              : 'abc2',
			nazev           : 'Druhý závod',
			startovne       : 50,
			popis           : 'Popis druhého závodu sezóny 2016',
			propozice       : '#google-docs-link',
			lokalita        : 'Nové město',
			datum           : '2016-03-08',
			muzeRegistrovat : true,
			rocnik          : 2016
		},
		{
			id              : 'abc3',
			nazev           : 'Třetí závod',
			startovne       : 50,
			popis           : 'Popis třetího závodu sezóny 2016',
			propozice       : '#google-docs-link',
			lokalita        : 'Staré město',
			datum           : '2016-03-15',
			muzeRegistrovat : false,
			rocnik          : 2016
		},
		{
			id              : 'abc4',
			nazev           : 'Čtvrtý závod',
			startovne       : 50,
			popis           : 'Popis čtvrtého závodu sezóny 2016',
			propozice       : '#google-docs-link',
			lokalita        : 'Nové město',
			datum           : '2016-03-22',
			muzeRegistrovat : false,
			rocnik          : 2016
		}
	];



})();
