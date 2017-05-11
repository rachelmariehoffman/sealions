angular.module('starter.controllers', ['ngResource'])

.controller('HomeCtrl', ['$scope', '$state', '$ionicHistory', '$window',
    function($scope, $state, $ionicHistory, $window) {

    }
])

.controller('NewsCtrl', ['$scope', '$state', '$ionicHistory', '$window',
    function($scope, $state, $ionicHistory, $window) {
        
        $scope.articles = [
            {
                title: 'SeaLions Stumble In Final, But See A Bright Future',
                text: 'COLUMBUS, OH -- The San Diego SeaLions came up short on Sunday, dropping the WPSL Championship match 3-0 to a well-drilled Boston Breakers Reserves side. It was San Diegos second appearance in the Final Four in the last four years and, by all indications, not their last.',
            },
            {
                title: 'SeaLions Seeking Another Championship',
                text: 'COLUMBUS, OHIO -- The unbeaten San Diego SeaLions arrived in Columbus, Ohio this afternoon looking for their second WPSL National Championship in four years. The SeaLions (10-0-1), who won this season’s WPSL Western Region title, will play the Atlanta Silverbacks, from the WPSL South (8-0-0), in the semifinal round of the 2016 WPSL Final Four.',
            }
            ,
            {
                title: 'Soccer is Dr. Elise Britts Prescription for Relaxation',
                text: 'SAN DIEGO, CA --  Displaying an array of quick moves, San Diego SeaLions midfielder Elise Britt carves up opposing defenses much like an orthopedic surgeon removes debris from a damaged joint.'
            }
        ];

    }
])

.controller('ScheduleCtrl', ['$scope', '$state', '$ionicHistory', '$window',
    function($scope, $state, $ionicHistory, $window) {
        
        $scope.games = [
            {
                date: 'Sat, June 11, 2016',
                time: '7:30 PM',
                opponent: 'FC Tuscon Women',
                home: true,
                location: 'Cathedral Catholic High School'
            },
            {
                date: 'Sat, June 18, 2016',
                time: '6:30 PM',
                opponent: 'Pateadores',
                home: false,
                location: 'Capistrano Valley High School'
            },
            {
                date: 'Sat, June 25, 2016',
                time: '7:00 PM',
                opponent: 'Phoenix Del Sol',
                home: false,
                location: 'Reach 11 #1 - Phoenix, AZ'
            }    
        ];

    }
])

.controller('TeamCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource',
    function($scope, $state, $ionicHistory, $window, $http, $resource) {

        // $http({
        // 	url: 'https://dev-sealions.pantheonsite.io/api/sealions-players',
        // 	method: 'GET'
        // }).success(function(response) {
        // 	console.log(response);
        // 	$scope.players = response;
        // }).error(function(response) {
        // 	console.log(response);
        // });

        $http.get('https://opentdb.com/api.php?amount=3').then(function(response) {
            console.log(response);
            $scope.questions = response.data.results;
        });
        
        $http.get('http://douglaschoffman.com/sealions.json').then(function(response) {
            console.log(response);
            $scope.players = response.data;
        });

        $scope.players = [];
        
        // [
        //     {
        //         "Picture": {
        //             "src":"http:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/large\/public\/player-headshots\/20170408-archipeleago-ride-02.jpg?itok=SxSaDwuq",
        //             "alt":""
        //         },
        //         "First":"Scott",
        //         "Last":"Dreher",
        //         "Position":"Goalie"
        //     },
        //     {
        //         "Picture":{
        //             "src":"http:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/large\/public\/player-headshots\/20170414-rachel-katie-coda-01.jpg?itok=hG3I7VPK",
        //             "alt":""
        //         },
        //         "First":"Rachel",
        //         "Last":"Hoffman",
        //         "Position":"Everywhere"
        //     }
        // ];

        // $scope.players = [
        //     {
        //         headshot: '0_Staci_Burland_Goalkeeper',
        //         name: 'Staci Burland',
        //         position: 'Goalkeeper',
        //         jersey: 0
        //     },
        //     {
        //         headshot: '2_Danica_Carey_Midfielder',
        //         name: 'Danica Carey',
        //         position: 'Midfielder',
        //         jersey: 2
        //     },
        //     {
        //         headshot: '3_Grace_Shevlin_Defender',
        //         name: 'Grace Shevlin',
        //         position: 'Defender',
        //         jersey: 3
        //     },
        //     {
        //         headshot: '4_Abigail_Callahan_Defender',
        //         name: 'Abigail Callahan',
        //         position: 'Defender',
        //         jersey: 4
        //     },
        //     {
        //         headshot: '4_Chelly_Kauric_Midfielder:Forward',
        //         name: 'Chelly Kauric',
        //         position: 'Midfielder/Forward',
        //         jersey: 4
        //     },
        //     {
        //         headshot: '5_Caroline_Shevlin_Defender',
        //         name: 'Caroline Shevlin',
        //         position: 'Defender',
        //         jersey: 5
        //     },
        //     {
        //         headshot: '6_Allison_Ariniello_Midfielder:Forward',
        //         name: 'Allison Ariniello',
        //         position: 'Midfielder/Forward',
        //         jersey: 6
        //     },
        //     {
        //         headshot: '7_Britney_Quiroz_Midfielder:Forward',
        //         name: 'Britney Quiroz',
        //         position: 'Midfielder/Forward',
        //         jersey: 7
        //     },
        //     {
        //         headshot: '9_Soli_Gomez_Midfielder:Forward',
        //         name: 'Soli Gomez',
        //         position: 'Midfielder/Forward',
        //         jersey: 9
        //     },
        //     {
        //         headshot: '10_Nikki_Petracca_Forward',
        //         name: 'Nikki Petracca',
        //         position: 'Forward',
        //         jersey: 10
        //     },
        //     {
        //         headshot: '11_Cassie_Callahan_Midfielder',
        //         name: 'Cassie Callahan',
        //         position: 'Midfielder',
        //         jersey: 11
        //     },
        //     {
        //         headshot: '12_Angelina_Hix_Midfielder:Forward',
        //         name: 'Angelina Hix',
        //         position: 'Midfielder/Forward',
        //         jersey: 12
        //     },
        //     {
        //         headshot: '13_Rachel_Witz_Midfielder:Forward',
        //         name: 'Rachel Witz',
        //         position: 'Midfielder/Forward',
        //         jersey: 13
        //     },
        //     {
        //         headshot: '14_Karina_Cisneros_Defender',
        //         name: 'Karina Cisneros',
        //         position: 'Defender',
        //         jersey: 14
        //     },
        //     {
        //         headshot: '16_Elissa_Magracia_Midfielder',
        //         name: 'Elissa Magracia',
        //         position: 'Midfielder',
        //         jersey: 16
        //     },
        //     {
        //         headshot: '17_Amy_Alber_Defender',
        //         name: 'Amy Alber',
        //         position: 'Defender',
        //         jersey: 17
        //     },
        //     {
        //         headshot: '18_Victoria_Gersh_Defender',
        //         name: 'Victoria Gersh',
        //         position: 'Defender',
        //         jersey: 18
        //     },
        //     {
        //         headshot: '19_Rosie_Tantillo_Midfielder',
        //         name: 'Rosie Tantillo',
        //         position: 'Midfielder',
        //         jersey: 19
        //     },
        //     {
        //         headshot: '21_Elise_Britt_Defender:Midfielder:Forward',
        //         name: 'Elise Britt',
        //         position: 'Defender/Midfielder/Forward',
        //         jersey: 21
        //     },
        //     {
        //         headshot: '22_Danielle_Ross:Defender',
        //         name: 'Danielle Ross',
        //         position: 'Defender',
        //         jersey: 22
        //     },
        //     {
        //         headshot: '30_Kaycee_Gunion_Goalkeeper',
        //         name: 'Kaycee Gunion',
        //         position: 'Goalkeeper',
        //         jersey: 30
        //     }
        // ];


    }
])

;
