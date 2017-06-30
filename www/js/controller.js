angular.module('starter.controllers', ['ngResource'])

.constant('SDConfigConstants', {
    'endURL': 'https://dev-sealions.pantheonsite.io/api/',
    'endURL2': 'sealions.customersuccessmarketing.com',
    'endURL3': 'app.sealions.com'
})

.controller('HomeCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$ionicModal', 'SDConfigConstants',
    function($scope, $state, $ionicHistory, $window, $http, $ionicModal, SDConfigConstants) {
        
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';

        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].home;
                        });
                    }
                });
            }
        });

        $ionicModal.fromTemplateUrl('about-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        

        // USED FOR TESTING IN BROWSER
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/","about":"<p>Need an app like this?<\/p>\n<p>Email us at <a href=\"mailto:doug@customersuccessmarketing.com?subject=I%20want%20an%20app%20like%20the%20Sealions\">doug@customersuccessmarketing.com<\/a><\/p>\n"}]
        $scope.global_header = $scope.global_text[0].home;
        $scope.about_text = $scope.global_text[0].about;

    }
])

.controller('NewsCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource', '$ionicModal', 'SDConfigConstants',
    function($scope, $state, $ionicHistory, $window, $http, $resource, $ionicModal, SDConfigConstants) {

        $scope.newsPath = SDConfigConstants.endURL + 'sealions-posts';
        $scope.newsPath2 = SDConfigConstants.endURL2 + 'sealions-posts';
        $scope.newsPath3 = SDConfigConstants.endURL3 + 'sealions-posts';
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';

        $http.get($scope.newsPath).then(function(response) {
            if (response.status === 200) {
                $scope.posts = response.data.posts;
            } else {
                $http.get($scope.newsPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.posts = response.data.posts;
                    } else {
                        $http.get($scope.newsPath3).then(function(response) {
                            $scope.posts = response.data.posts;
                        });
                    }
                });
            }
        });
        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].news_posts;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].news_posts;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].news_posts;
                        });
                    }
                });
            }
        });

        $scope.selectPost = function(item) {
            $scope.selectedPost = item;
        };
        
        $ionicModal.fromTemplateUrl('post-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        
        
        
        // USED FOR TESTING IN BROWSER
        $scope.posts = [
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-005-sealions-win-home-opener.jpg?itok=chKhyVbf","alt":""},"title":"Sealions Win Home Opener","date":"Jun 17, 2017 9:30 pm","body":"June 17, 2017\nSAN DIEGO --- Five San Diego players found the nets against Phoenix Del Sol Saturday night, goalkeeper Kaycee Gunion (CSU-SM) saved a penalty kick, and rookie Monica Dolinsky (Kansas) added two assists to lead the SeaLions to a 5-0 win at home tonight.\nThe victory came just a week after the 4-0-0 SeaLions erupted for six unanswered goals against this same Phoenix squad, and keeps San Diego atop the WPSL PacSouth Division.\nGoals by Janelly Farias (UC Irvine), Angelina Hix (MiraCosta), Kiana Palacios (UC Irvine), Taleen Taylor (Boston U), and Rosie Tantillo-Colon (USC), in the 4th, 17th, 48th, 78th, and 81st minutes respectively, run the team's total to 14.\n\"Everybody played relaxed and creatively,\" noted SeaLions assistant coach Lu Snyder. \"Our players are in sync and covering and passing well. If that continues, we will go far this season.\"\nThe SeaLions have yielded just one goal this season, a PK against tomorrow's opponent, FC Tucson. The match begins at 2:00 pm at Manchester Stadium on the campus of Cathedral Catholic High School, 5555 Del Mar Heights Road, San Diego, CA 92130.\n"},
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-004-sealions-rain-goals-in-the-desert.jpg?itok=H6XXv8ct","alt":""},"title":"Sealions rain goals in the desert!","date":"Jun 11, 2017 9:00 pm","body":"By Hector Trujillo\nJune 11, 2017\nPhoenix, AZ --- The San Diego SeaLions rained goals upon the Arizona desert this weekend, defeating FC Tucson 2-1 on Friday before drowning Phoenix Del Sol by a 6-0 count. The wins put San Diego (3-0-0) atop the WPSL PacSouth standings with nine points.\nBut not everything was easy as it seemed, as the SeaLions fell behind Tucson (1-2-1) early when a handball in the penalty box led to an eighth-minute penalty score. But the visitors slowly took control of the match and in the 82nd minute, Andrea Duke (NM Highlands) found herself alone on the right side and drilled a bullet past Tucson goalkeeper Lainey Burdett (Arizona) to tie the score. The SeaLions continued to press their attack, and it paid off when Elise Britt (UCLA) took midfielder Angelina Hix (Mira Costa)\u2019s pass and scored to put San Diego ahead in the 89th. The SeaLions\u2019 stout defense, which has posted two shutouts and given up only the PK goal, was more than enough to seal the win.\n\"The wins were a total team effort,\" said SeaLions head coach Jen Lalor. \"We never lost our composure and belief. This team always finds a way to win, it's part of our culture.\"\nSan Diego rolled into Phoenix brimming with confidence, and drew first blood in the 20th minute when midfielder Rosie Tantillo-Colon (USC\/FC Gold Pride) traded passes with forward Soli Gomez (SDSU) before pushing a one-touch volley into the back of the Del Sol net. Monica Dolinsky (Kansas) doubled the SeaLions\u2019 lead in the 29th and they held that lead into halftime.\n\"We exchanged some give-and-go passes, which we\u2019ve worked on in practices,\" said co-captain Tantillo-Colon. \"That enabled us to play our style of game and assert ourselves as a team.\"\nThe second half was all San Diego with goals in the 55th (Hix), 74th (Lili Andino (UC Irvine)), 76th (Kiana Palacios (UC Irvine)), and 79th minutes (Andino). The shutout was the second this season for goalkeeper Kaycee Gunion (CSU San Marcos).\n\"We found the back of the net early but what was encouraging about this win were the improvements we made as the match went on,\" Lalor added. \"Individual players had great performances and the confidence we are playing with right now as a group is fun to watch. Our goal is nothing less than a WPSL Championship.\"\nThe SeaLions will return home to San Diego this weekend when they will host these same Arizona teams: Saturday, June 17th vs. Phoenix (7:30 p.m.), and Sunday, June 18th (2:00 p.m.) against Tucson. First 250 Fans each night will receive a SD SeaLions Scarf!\nThe SeaLions\u2019 home matches are played at Cathedral Catholic High School, 5555 Del Mar Heights Road, San Diego, CA 92130. If you can\u2019t attend, follow them live on the ScoreStream App (www.scorestream.com).\nThe San Diego SeaLions are a non-profit 501c3 entity dedicated to fostering women's soccer coaching, playing, business & management opportunities. Formed in 1988, it\u2019s one of the oldest and most successful women\u2019s soccer clubs in the USA and is a charter member of the WPSL.\n(Photo Courtesy FC Tucson Soccer Club)\n"},
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-003.jpg?itok=FObm-Cqj","alt":""},"title":"San Diego Sealions travel to Arizona to face FC Tucson and Phoenix Del Sol","date":"Jun 9, 2017 2:45 pm","body":"June 9, 2017\nBy Hector Trujillo, Sports Writer\nPhoto credit: Aaron Jaffe\nTucson, AZ \u2013 After a gutsy season-opening win in Los Angeles three weeks ago, the San Diego Sealions travel to Arizona this weekend to face interstate rivals FC Tucson and Phoenix Del Sol.\n\"Despite the long break between matches, I don\u2019t think we\u2019re at all rusty, because we know we haven\u2019t reached our potential on the field,\u201d said Sealions defender Caroline Shevlin (St. Mary\u2019s\/Peru U20 WNT) \u201cAnd these desert teams are always tough opponents.\u201d\nFC Tucson (1-1-0) defeated FC Pacific, but lost to Strikers-South Coast, whom San Diego beat 1-0 thanks to a 92nd minute goal by Angelina Hix (Mira Costa). Meanwhile Phoenix Del Sol (0-1-1) drew with Strikers, but lost to Pacific. Thus the Sealions (1-0-0) sit in second place in the WPSL PacSouth Division, one point behind Strikers.\n\"New players have stepped up. Samantha Staab (Clemson) and Monica Dolinsky (Kansas) fit in well to the new system,\" said San Diego Co-Captain Rosie Tantillo-Colon (USC\/FC Gold Pride). \"Monica balances out the middle, both defending and pushing forward, while Sam distributes the ball well out of the back, to start and support our attacks.\"\nFriday's game vs FC Tucson kicks off at 7:30 p.m. at Kino Sports Complex North Stadium, 2817 E. Ajo Way, Tucson. Saturday's match against Phoenix Del Sol also starts at 7:30 p.m., at Reach 11 Sports Complex, 2425 E. Deer Valley Road, Phoenix.\nIf you can\u2019t attend the game, follow it live on the ScoreStream App (www.scorestream.com).\nThe SeaLions open at home (Manchester Stadium at Cathedral HS) on San Diego Soccer Weekend next Saturday, June 17 at 7:30 p.m., and Sunday, June 18, at 2:00 p.m., when they will host these same Arizona teams.\nThe San Diego SeaLions are a non-profit 501c3 entity dedicated to fostering women's soccer coaching, playing, and business management opportunities. It\u2019s one of the oldest and most successful women\u2019s soccer clubs in the USA and is a charter member of the WPSL.\n"},
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-001_0.jpg?itok=3R550Ifz","alt":""},"title":"SeaLions Refuse to Quit, Earn Season-Opening Win!","date":"May 23, 2017 9:00 pm","body":"Huntington Beach, CA \u2013 Angelina Hix found the net just seconds from the final whistle Sunday afternoon, to claim a gutsy and hard-fought 1-0 win for the San Diego SeaLions to open their 2017 WPSL PacSouth season.\nMay 23, 2017\nBy Hector Trujillo, Sports Writer\nPhoto credit: Aaron Jaffe\n\"This was a tough match for 93 minutes, and lesser teams would\u2019ve settled for a draw,\" said SeaLions head coach Jen Lalor. \"But this win serves notice: we don\u2019t settle. Our players never quit.\u201d \nIndeed, by the 80th minute it was clear that host South Coast FC was playing for the draw against the 2016 WPSL championship finalist SeaLions, after surviving a constant barrage of SeaLion shots, corner kicks, and forays into their end of the field. The SeaLions created nine scoring chances, including two or three open nets, in the first 45 minutes of play but could not convert. The team could have easily been up 5-0 entering the second half of play but several of their scoring opportunities ended up hitting the crossbar, the post, or being deflected by the opposing goalkeeper. As it was, SCFC managed only two shots on goal the entire match.\n\"We felt like we should have been up 5-0 by halftime,\" said San Diego captain and midfielder Rosie Tantillo-Colon (USC\/FC Gold Pride). \"We had great rhythm going forward, and our eagerness to get some goals had us playing a more direct attack than we normally play.\"\nIt was Tantillo Colon\u2019s one-touch pass to Hix (Mira Costa College) who had broken open down the left side that led to the goal, a smooth left-footed shot from near the end-line that tucked just inside the right post.\n\u201cThat was the most difficult shot we took all afternoon,\u201d added Lalor. \u201cA lot of players and teams would have missed that chance, especially in light of all the earlier chances that hadn\u2019t succeeded. But our ladies refused to bend to the pressure, and refused to give up.\u201d\nDespite San Diego\u2019s defensive dominance, the match very nearly ended in disaster in the 78th minute, when South Coast forward Natalia Ledezma (UC-Irvine) broke away towards San Diego\u2019s goal and looked sure to score. It took a spectacular save from SeaLions goalkeeper Kaycee Gunion (CSU-San Marcos) to keep the score 0-0. That was the only, and last, real chance South Coast would see in the game.\n\"The game highlighted some of our strengths of character, and it also showed us what we should work on,\u201d noted Assistant Coach Lu Snyder. \u201cWe also saw good things from our newcomers Monica Dolinsky (Kansas) whose link-up play in midfield kept us on the attack, and Sam Staab (Clemson), whose solid defending helped give us the confidence to repeatedly go forward. Thus the game was a success from every angle. And we will get even better!\"\nThe SeaLions travel to Arizona on June 9-10, 2017 to face Phoenix Del Sol and Tucson FC, before returning to San Diego for San Diego Soccer Weekend on Saturday and Sunday, June 17 at 7:30 p.m., and June 18, at 2:00 p.m., when they will host those same Arizona teams.\nThe San Diego SeaLions are a non-profit 501c3 entity dedicated to fostering women's soccer coaching, playing, and business management opportunities. It\u2019s one of the oldest and most successful women\u2019s soccer clubs in the USA and is a charter member of the WPSL.\n"},
            {"hero_image":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/news_post\/public\/sealions-news-post-002_0.jpg?itok=GzS8NQQ2","alt":""},"title":"SeaLions Hit the Road with High Hopes for 2017!","date":"May 19, 2017 9:00 pm","body":"SAN DIEGO \u2013 The San Diego SeaLions open their 2017 WPSL Season on the road this Sunday, when they travel to Huntington Beach to face PacSouth Division rival Strikers FC \u2013 South Coast. And the SeaLions are hungry.\n\u201cWe\u2019re restless,\u201d says SeaLions head coach Jen Lalor. \u201cWe feel like we could have won the Cheap Panerai Replica WPSL title last year, and we have the chance to prove it this season.\u201d\nThe nucleus of the 2016 SeaLions squad, which won 11 games and lost just one while outscoring opponents 33-7 and yielding a minuscule 10 goals in 13 games, returns this season, led by midfield general Rosie Tantillo-Colon (USC\/FC Gold Pride) (6 assists \/ 3 goals); Defender Leigh Ann Brown (USD\/FC Kansas City); forward Angelina Hix (Mira Costa College) (11 goals); goalkeeper Kaycee Gunion (CSU-San Marcos)(0.77 GAA); the versatile Elise Britt (UCLA) (4 goals); and Mexico Women\u2019s National Team standout Jannelly Farias (UC Irvine).\n\u201cIt was tough, getting so close last year. All of us left the field after that championship game with pits in our stomachs and it\u2019s pushed us to work harder this pre-season,\u201d agreed assistant coach Lu Snyder. \u201cWe try to establish, early on, a mindset in the team to expect to be playing post-season, and their hard work shows they have that determination.\u201d\nAs usual in the PacSouth, no game is easy, and Strikers FC, formerly known as L.A. Salsa, played a difficult pre-season schedule against Xolas of Tijuana, Cal State Dominguez Hills, and Univ. of British Columbia Thunderbirds, in their desire to surpass last season\u2019s 4th place PacSouth finish. They are led by their 2016 top-scorer Natalia Ledezma (UC-Irvine)(6 goals).\n"}
        ];
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/","about":"<p>Need an app like this?<\/p>\n<p>Email us at <a href=\"mailto:doug@customersuccessmarketing.com?subject=I%20want%20an%20app%20like%20the%20Sealions\">doug@customersuccessmarketing.com<\/a><\/p>\n"}]
        $scope.global_header = $scope.global_text[0].news_posts;
    }
])

.controller('ScheduleCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource', '$ionicModal', 'SDConfigConstants', '$cordovaCalendar',
    function($scope, $state, $ionicHistory, $window, $http, $resource, $ionicModal, SDConfigConstants, $cordovaCalendar) {
        
        $scope.gamesPath = SDConfigConstants.endURL + 'sealions-games';
        $scope.gamesPath2 = SDConfigConstants.endURL2 + 'sealions-games';
        $scope.gamesPath3 = SDConfigConstants.endURL3 + 'sealions-games';
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';

        $http.get($scope.gamesPath).then(function(response) {
            if (response.status === 200) {
                $scope.games = response.data.games;
            } else {
                $http.get($scope.gamesPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.games = response.data.games;
                    } else {
                        $http.get($scope.gamesPath3).then(function(response) {
                            $scope.games = response.data.games;
                        });
                    }
                });
            }
        });
        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].game_schedule;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].game_schedule;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].game_schedule;
                        });
                    }
                });
            }
        });

        $scope.addEvent = function(event) {
        
            $scope.title = "SeaLions " + event.home_or_away + " vs. " + event.opponent;
            $scope.location = event.location;
            $scope.startDate = new Date(event.date);
            $scope.endDate = new Date(event.date);

            $scope.getStartHours = (event.time).split(':');
            $scope.getStartMinutes = ($scope.getStartHours[1]).split(' ');
            $scope.startHours = parseInt($scope.getStartHours[0]);
            $scope.startMinutes = parseInt($scope.getStartMinutes[0]);
            $scope.startAMPM = ($scope.getStartMinutes[1]).toLowerCase();

            if ($scope.startAMPM === 'pm') {
                $scope.startHours += 12;
            }
            
            $scope.startDate.setHours($scope.startHours);
            $scope.startDate.setMinutes($scope.startMinutes);
            $scope.endDate.setHours($scope.startHours + 2);
            $scope.endDate.setMinutes($scope.startMinutes);
            
            $cordovaCalendar.createEvent({
                title: $scope.title,
                location: $scope.location,
                startDate: $scope.startDate,
                endDate: $scope.endDate
            }).then(function (result) {
                window.plugins.toast.showLongCenter('Success! This Sealions game has been added to your calendar!');
            }, function (err) {
                console.log(err);
                window.plugins.toast.showLongCenter('Whoops! Something went wrong with our "Add to Calendar" feature. Try again later!');
            }); 

        };

        $scope.selectGame = function(item) {
            $scope.selectedGame = item;
        };
        
        $ionicModal.fromTemplateUrl('game-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        
  
        
        // USED FOR TESTING IN BROWSER
        $scope.games = [
            {"opponent":"Strikers FC South Coast","date":"May 21, 2017","time":"4:00 pm","home_or_away":"Away","location":"Ocean View High - 7071 Gothard St, Huntington Beach","win_or_loss":"Win","sealions_score":"1","opponents_score":"0","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--strikers-fc-coast.jpg?itok=DW4cE6GX","alt":""},"game_summary":"\"This was a tough match for 93 minutes, and lesser teams would\u2019ve settled for a draw,\" said SeaLions head coach Jen Lalor. \"But this win serves notice: we don\u2019t settle. Our players never quit.\u201d Indeed, by the 80th minute it was clear that host South Coast FC was playing for the draw against the 2016 WPSL championship finalist SeaLions, after surviving a constant barrage of SeaLion shots, corner kicks, and forays into their end of the field. The SeaLions created nine scoring chances, including two or three open nets, in the first 45 minutes of play but could not convert. The team could have easily been up 5-0 entering the second half of play but several of their scoring opportunities ended up hitting the crossbar, the post, or being deflected by the opposing goalkeeper. As it was, SCFC managed only two shots on goal the entire match. \"We felt like we should have been up 5-0 by halftime,\" said San Diego captain and midfielder Rosie Tantillo-Colon (USC\/FC Gold Pride). \"We had great rhythm going forward, and our eagerness to get some goals had us playing a more direct attack than we normally play.\" It was Tantillo Colon\u2019s one-touch pass to Hix (Mira Costa College) who had broken open down the left side that led to the goal, a smooth left-footed shot from near the end-line that tucked just inside the right post. \u201cThat was the most difficult shot we took all afternoon,\u201d added Lalor. \u201cA lot of players and teams would have missed that chance, especially in light of all the earlier chances that hadn\u2019t succeeded. But our ladies refused to bend to the pressure, and refused to give up.\u201d Despite San Diego\u2019s defensive dominance, the match very nearly ended in disaster in the 78th minute, when South Coast forward Natalia Ledezma (UC-Irvine) broke away towards San Diego\u2019s goal and looked sure to score. It took a spectacular save from SeaLions goalkeeper Kaycee Gunion (CSU-San Marcos) to keep the score 0-0. That was the only, and last, real chance South Coast would see in the game. \"The game highlighted some of our strengths of character, and it also showed us what we should work on,\u201d noted Assistant Coach Lu Snyder. \u201cWe also saw good things from our newcomers Monica Dolinsky (Kansas) whose link-up play in midfield kept us on the attack, and Sam Staab (Clemson), whose solid defending helped give us the confidence to repeatedly go forward. Thus the game was a success from every angle. And we will get even better!\"\n"},
            {"opponent":"FC Tuscon Women","date":"Jun 9, 2017","time":"7:30 pm","home_or_away":"Away","location":"Kino North Stadium, 3600 S Country Club Rd, Tucson, AZ 85713","win_or_loss":"Win","sealions_score":"2","opponents_score":"1","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--fc-tuscon-women.jpg?itok=Ax66qFw1","alt":""},"game_summary":"The San Diego SeaLions rained goals upon the Arizona desert this weekend, defeating FC Tucson 2-1 on Friday.\u00a0\nBut not everything was easy as it seemed, as the SeaLions fell behind Tucson (1-2-1) early when a handball in the penalty box led to an eighth-minute penalty score. But the visitors slowly took control of the match and in the 82nd minute, Andrea Duke (NM Highlands) found herself alone on the right side and drilled a bullet past Tucson goalkeeper Lainey Burdett (Arizona) to tie the score. The SeaLions continued to press their attack, and it paid off when Elise Britt (UCLA) took midfielder Angelina Hix (Mira Costa)\u2019s pass and scored to put San Diego ahead in the 89th. The SeaLions\u2019 stout defense, which has posted two shutouts and given up only the PK goal, was more than enough to seal the win.\n"},
            {"opponent":"Strikers Phoenix Del Sol","date":"Jun 10, 2017","time":"7:30 pm","home_or_away":"Away","location":"Reach 11 #1, 2425 E Deer Valley Dr, Phoenix, AZ 85050","win_or_loss":"Win","sealions_score":"6","opponents_score":"0","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--strikers-phoenix-del-sol.jpg?itok=5YSno47u","alt":""},"game_summary":"The San Diego SeaLions rained goals upon the Arizona desert this weekend, defeating FC Tucson 2-1 on Friday before drowning Phoenix Del Sol by a 6-0 count. The wins put San Diego (3-0-0) atop the WPSL PacSouth standings with nine points.\nBut not everything was easy as it seemed, as the SeaLions fell behind Tucson (1-2-1) early when a handball in the penalty box led to an eighth-minute penalty score. But the visitors slowly took control of the match and in the 82nd minute, Andrea Duke (NM Highlands) found herself alone on the right side and drilled a bullet past Tucson goalkeeper Lainey Burdett (Arizona) to tie the score. The SeaLions continued to press their attack, and it paid off when Elise Britt (UCLA) took midfielder Angelina Hix (Mira Costa)\u2019s pass and scored to put San Diego ahead in the 89th. The SeaLions\u2019 stout defense, which has posted two shutouts and given up only the PK goal, was more than enough to seal the win.\n\"The wins were a total team effort,\" said SeaLions head coach Jen Lalor. \"We never lost our composure and belief. This team always finds a way to win, it's part of our culture.\"\nSan Diego rolled into Phoenix brimming with confidence, and drew first blood in the 20th minute when midfielder Rosie Tantillo-Colon (USC\/FC Gold Pride) traded passes with forward Soli Gomez (SDSU) before pushing a one-touch volley into the back of the Del Sol net. Monica Dolinsky (Kansas) doubled the SeaLions\u2019 lead in the 29th and they held that lead into halftime.\n\"We exchanged some give-and-go passes, which we\u2019ve worked on in practices,\" said co-captain Tantillo-Colon. \"That enabled us to play our style of game and assert ourselves as a team.\"\nThe second half was all San Diego with goals in the 55th (Hix), 74th (Lili Andino (UC Irvine)), 76th (Kiana Palacios (UC Irvine)), and 79th minutes (Andino). The shutout was the second this season for goalkeeper Kaycee Gunion (CSU San Marcos).\n\"We found the back of the net early but what was encouraging about this win were the improvements we made as the match went on,\" Lalor added. \"Individual players had great performances and the confidence we are playing with right now as a group is fun to watch. Our goal is nothing less than a WPSL Championship.\"\nThe SeaLions will return home to San Diego this weekend when they will host these same Arizona teams: Saturday, June 17th vs. Phoenix (7:30 p.m.), and Sunday, June 18th (2:00 p.m.) against Tucson.\nThe SeaLions\u2019 home matches are played at Cathedral Catholic High School, 5555 Del Mar Heights Road, San Diego, CA 92130. If you can\u2019t attend, follow them live on the ScoreStream App (www.scorestream.com).\nThe San Diego SeaLions are a non-profit 501c3 entity dedicated to fostering women's soccer coaching, playing, business & management opportunities. Formed in 1988, it\u2019s one of the oldest and most successful women\u2019s soccer clubs in the USA and is a charter member of the WPSL.\n"},
            {"opponent":"Strikers Phoenix Del Sol","date":"Jun 17, 2017","time":"7:30 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"Win","sealions_score":"5","opponents_score":"0","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--strikers-phoenix-del-sol.jpg?itok=5YSno47u","alt":""},"game_summary":"Five San Diego players found the nets against Phoenix Del Sol Saturday night, goalkeeper Kaycee Gunion (CSU-SM) saved a penalty kick, and rookie Monica Dolinsky (Kansas) added two assists to lead the SeaLions to a 5-0 win at home tonight.\nThe victory came just a week after the 4-0-0 SeaLions erupted for six unanswered goals against this same Phoenix squad, and keeps San Diego atop the WPSL PacSouth Division.\nGoals by Janelly Farias (UC Irvine), Angelina Hix (MiraCosta), Kiana Palacios (UC Irvine), Taleen Taylor (Boston U), and Rosie Tantillo-Colon (USC), in the 4th, 17th, 48th, 78th, and 81st minutes respectively, run the team's total to 14.\n\"Everybody played relaxed and creatively,\" noted SeaLions assistant coach Lu Snyder. \"Our players are in sync and covering and passing well. If that continues, we will go far this season.\"\nThe SeaLions have yielded just one goal this season, a PK against tomorrow's opponent, FC Tucson. The match begins at 2:00 pm at Manchester Stadium on the campus of Cathedral Catholic High School, 5555 Del Mar Heights Road, San Diego, CA 92130.\n"},
            {"opponent":"FC Tuscon Women","date":"Jun 18, 2017","time":"2:00 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"Win","sealions_score":"3","opponents_score":"1","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--fc-tuscon-women.jpg?itok=Ax66qFw1","alt":""},"game_summary":"The San Diego SeaLions did today in San Diego what they did last weekend in Arizona \u2013 beat a tough Tucson FC side with solid defense, crisp passing and a relentless attack orchestrated by midfielder Rosie Tantillo-Colon\u2019s two assists and a goal. And the 3-1 final score wasn\u2019t that close.\n\"We played a complete team game today,\" said SeaLions forward Grace Shevlin (SDSU). \"It was good to open the home season with wins, and discovering that we can get even better.\" The win pushes San Diego\u2019s record to 5-0-0 and top spot in the WPSL PacSouth Division, eight points ahead of nearest rival FC Pacific.\nSan Diego took the lead at the 8-minute mark when midfielder Leigh Ann Brown (USD\/Kansas City FC) buried a pass from Tantillo-Colon (USC\/FC Gold Pride). The SeaLions dominated possession throughout most of the first half, and most of the game, with most of the play being conducted in the visitors\u2019 half of the field.\nIn the 28th minute Tantillo-Colon saw fit to find Angelina Hix (MiraCosta) open in the box, and Hix obliged with her fourth goal this season.\n\u201cThere wasn\u2019t much doubt in our minds after that, that we would win, as long as we stayed with our game,\u201d noted SeaLions assistant coach Lu Snyder. \u201cWe kept the pressure on and should\u2019ve probably scored one or two more goals.\u201d\nShortly after the half it would be Tantillo-Colon's turn to score (her third this season) on a penalty kick when Elise Britt (UCLA) was pulled down in the Tucson goal area.\nA rare miscommunication in the SeaLions\u2019 defensive third of the field led to a loose ball, and Tucson forward Madison Irwin (New Mexico) pounced on it to make the score 3-1 in the 66th minute. It was one of only two shots the Tucson club would offer on the night. The goal is only the second scored against San Diego this season, and the first one surrendered by San Diego during the run of play, ending a stretch of 426 goalless minutes \u2013 the only other goal was a penalty kick score last weekend by this same Tucson squad.\n\"We took nothing for granted on the field,\" said rookie midfielder Monica Dolinsky (Kansas). \"We have high hopes for this season. We know what we need to do, and we\u2019re convinced we can do it.\"\n"},
            {"opponent":"Strikers FC South Coast","date":"Jun 24, 2017","time":"7:30 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--strikers-fc-coast.jpg?itok=DW4cE6GX","alt":""},"game_summary":""},
            {"opponent":"FC Pacific","date":"Jun 25, 2017","time":"7:30 pm","home_or_away":"TBA","location":"TBA","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--fc-pacific.jpg?itok=8waC7NIj","alt":""},"game_summary":""},
            {"opponent":"LA Galaxy San Diego","date":"Jul 1, 2017","time":"6:00 pm","home_or_away":"Away","location":"Army & Navy Academy, 2605 Carlsbad Blvd, Carlsbad, CA 92008","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--la-galaxy-san-diego.jpg?itok=9jdnLtoC","alt":""},"game_summary":""},
            {"opponent":"FC Pacific","date":"Jul 2, 2017","time":"2:00 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--fc-pacific.jpg?itok=8waC7NIj","alt":""},"game_summary":""},
            {"opponent":"LA Galaxy San Diego","date":"Jul 8, 2017","time":"7:30 pm","home_or_away":"Home","location":"Cathedral Catholic, 5555 Del Mar Heights Rd, San Diego, CA 92130","win_or_loss":"","sealions_score":"","opponents_score":"","opponent_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--la-galaxy-san-diego.jpg?itok=9jdnLtoC","alt":""},"game_summary":""}
        ];
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/","about":"<p>Need an app like this?<\/p>\n<p>Email us at <a href=\"mailto:doug@customersuccessmarketing.com?subject=I%20want%20an%20app%20like%20the%20Sealions\">doug@customersuccessmarketing.com<\/a><\/p>\n"}]
        $scope.global_header = $scope.global_text[0].game_schedule;
    }
])

.controller('TeamCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource', '$ionicModal', 'SDConfigConstants',
    function($scope, $state, $ionicHistory, $window, $http, $resource, $ionicModal, SDConfigConstants) {
        
        $scope.rosterPath = SDConfigConstants.endURL + 'sealions-roster';
        $scope.rosterPath2 = SDConfigConstants.endURL2 + 'sealions-roster';
        $scope.rosterPath3 = SDConfigConstants.endURL3 + 'sealions-roster';
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';
        
        $http.get($scope.rosterPath).then(function(response) {
            if (response.status === 200) {
                $scope.roster = response.data.players;
            } else {
                $http.get($scope.rosterPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.roster = response.data.players;
                    } else {
                        $http.get($scope.rosterPath3).then(function(response) {
                            $scope.roster = response.data.players;
                        });
                    }
                });
            }
        });
        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].roster;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].roster;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].roster;
                        });
                    }
                });
            }
        });

        $scope.selectPlayer = function(item) {
            $scope.selectedPlayer = item;
        };
        
        $ionicModal.fromTemplateUrl('player-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        
        
        
        // USED FOR TESTING IN BROWSER
        $scope.roster = [
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--grace-shevlin-03.jpg?itok=9BnE8J73","alt":""},"first":"Grace","last":"Shevlin","jersey_number":"3","position":"Defender","bio":"The Good Twin\n","college":"San Diego State University","hometown":"San Diego, CA","years_with_sealions":"5"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--caroline-shevlin-04.jpg?itok=7FRCHuWL","alt":""},"first":"Caroline","last":"Simunich","jersey_number":"4","position":"Defender","bio":"Caroline started playing with the SeaLions in 2015, joining her (11 minute younger) twin sister, Grace Shevlin, who has been with the team for 5 seasons, one of which she won a national championship. Prior to joining the SeaLions, she played collegiately at SMC (her first 2 years at LBSU) and internationally on the Peruvian National Team (full and u-20). On the SealLions she plays center back but can play a range of other positions. Off the field, Caroline is a Barcelona fan and has a strong, but friendly, rivalry with her husband, Sergio, who is Madrile\u00f1o.\n","college":"St. Mary's College of California","hometown":"San Diego, CA","years_with_sealions":"3"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--cassie-callahan-05.jpg?itok=LsKblbSZ","alt":""},"first":"Cassie","last":"Callahan","jersey_number":"5","position":"Midfielder","bio":"Played for the San Diego Surf for 11 years, aiding in two national championships.\nA 2011 graduate of Coronado High School ... Honored as both the CIF San Diego Section and Western League Player of the Year as a senior in 2011, as well as All-Academic Team Captain ... Led the Islanders to three Western League crowns and CIF titles in 2008 (IV), 2010 (III) and 2011 (IV) ... CIFSDS Division III finalist in 2009 ... CIFSDS and CIFSDS Division III Player of the Year in 2010 ... Two-time All-CIF First Team ... Also lettered in track and field.\nCounts playing in the 2012 NCAA semifinals and final in Georgia, and winning nationals with the Surf as a high school senior, among her most memorable moments in soccer ... Main hobby is surfing ... Roots for San Diego teams ... Favorite athlete is FC Barcelona and Argentina star Lionel Messi ... Voted Best Dancer by her high school's senior class.\n","college":"UCSD","hometown":"Coronado, CA","years_with_sealions":"6"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/Palacios.JPG?itok=-9nSincL","alt":""},"first":"Kiana","last":"Palacios","jersey_number":"6","position":"Midfield","bio":"","college":"UC Irvine","hometown":"Lake Forest, CA","years_with_sealions":"1"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--leigh-ann-brown-07.jpg?itok=udT0dsRv","alt":""},"first":"Leigh Ann","last":"Brown","jersey_number":"7","position":"Defender - Midfielder","bio":"Born and raised in San Diego. Played at Univ of San Diego from 2004-2007 and was just recently inducted into the Hall of Fame in 2016.  Played professionally, domestic and internationally, from 2009-2015. Won back to back national championships with FC Kansas City in 2014 & 2015. Earned 2 caps with the USWNT in 2013 and 2014. Returned home and am now coaching at USD and San Diego Soccer Club. Married with one fur baby. Elie is my best friend.\n","college":"University of San Diego","hometown":"San Diego, CA","years_with_sealions":"2"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/lili.jpg?itok=W7qPjY6a","alt":""},"first":"Lili","last":"Andino","jersey_number":"8","position":"Midfield","bio":"","college":"UC Irvine","hometown":"San Diego, CA","years_with_sealions":"2"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--soli-gomez-09.jpeg?itok=c8sbGbOe","alt":""},"first":"Soli","last":"Gomez","jersey_number":"9","position":"Midfielder - Foward","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--janelly-farias-10.jpg?itok=BLYxy13w","alt":""},"first":"Janelly","last":"Farias","jersey_number":"10","position":"Midfielder","bio":"Current player on a Mexico Women's National Soccer team.\n","college":"UC Irvine","hometown":"Santa Ana, CA","years_with_sealions":"3"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--angelina-hix-12.jpg?itok=JZV2lukz","alt":""},"first":"Angelina","last":"Hix","jersey_number":"12","position":"Midfielder - Foward","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--samantha-staab-13.jpg?itok=xJ-5Z0Cd","alt":""},"first":"Samantha","last":"Staab","jersey_number":"13","position":"Defender","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--karina-cisneros-14.jpg?itok=e3d3o1Qh","alt":""},"first":"Karina","last":"Cisneros","jersey_number":"14","position":"Defender","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--elissa-magracia-16.jpg?itok=0JMD-hm6","alt":""},"first":"Elissa","last":"Magracia","jersey_number":"16","position":"Midfielder","bio":"Going to start from the beginning...I was born and raised in beautiful, sunny San Diego. Over the course of my club experience, I played 9 years with San Diego Surf. Since I couldn\u2019t leave the great weather, I decided to play college soccer at the University of San Diego from 2008-2011. Even though I \u201cgraduated,\u201d shortly after that, I had the opportunity to coach at my alma mater (USD) for four seasons. Although I have recently decided to pursue a new career, soccer will always be a part of my life. Life outside the field consists of traveling, hanging out with my best friend\u2014'SUP LEIGH ANN BROWN, and watching all kinds of movies. Interesting facts: love country music. Owning a pig is on my bucket list. Nickname is \u201cPuppy.\" So one last thing\u2026 [take the first letter of every sentence and see what it says]!\n","college":"University of San Diego","hometown":"Chula Vista, CA","years_with_sealions":"3"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--monica-dolinsky-17.jpg?itok=2cWd9s2H","alt":""},"first":"Monica","last":"Dolinsky","jersey_number":"17","position":"Midfielder","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--rosie-tantillo-colon-19.jpg?itok=bXd_uRrJ","alt":""},"first":"Rosie","last":"Tantillo-Col\u00f3n","jersey_number":"19","position":"Midfielder","bio":"As a four-year starting midfielder for the Women of Troy, Rosie was the Pac-10 Freshman of the Year and went on to earn All-Pac-10 First Team honors the next three seasons. In the USC history books, she ranks second all-time in game-winning goals (12), third in assists (25) and shots (224), and fourth in goals (25) and points (75).\nAfter college she played for the Pali Blue in 2008 who were the W-League Champions. In 2009 played for the Buffalo Flash, and in 2010 played with the FC Gold Pride in the WPS, where they won the 2010 WPS Championship.\nAfter 2010 the league folded and Rosie moved back to San Diego to pursue a career. Currently, she is a captain for the San Diego Sea Lions where she has played for 5 years. Rosie is going on her 4th year coaching at NADO Select and is currently an Office Manager for Jorgensen Law since.\n","college":"USC","hometown":"San Diego, CA","years_with_sealions":"6"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--andrea-duke-20.jpg?itok=Q9Djz1YA","alt":""},"first":"Andrea","last":"Duke","jersey_number":"20","position":"Midfielder","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--elise-britt-21.jpg?itok=inAK0VzX","alt":""},"first":"Elise","last":"Britt","jersey_number":"21","position":"Defender - Midfielder - Foward","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--victoria-gersh-22.jpg?itok=6xKSYcVE","alt":""},"first":"Vistoria","last":"Gersh","jersey_number":"22","position":"Defender","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--taleen-taylor-23.jpg?itok=M2ta3aSu","alt":""},"first":"Taleen","last":"Taylor","jersey_number":"23","position":"Midfielder","bio":"My mom is my role model. My hubby is my best friend. I love plant-based, raw foods. I hold the bench press record at BU among the collegiate athletes. I speak fluent Armenia. I love to braid hair. I love people. I aspire to be a bright light in this dark world. \nSoccer has always been a gift in my life. The blessings that have come from playing competitively at a very young age have shaped my character today. I played for Arsenal FC in my club years and then competed at the Division 1 level at Boston University. While in Boston, I've played for two different WPSL teams for 7+ years - Boston Aztecs (MA) and New England Mutiny (CT). This will be my 4th season as a San Diego Sealion. #arfarfarf\n","college":"Boston University","hometown":"Riverside, CA","years_with_sealions":"4"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--abigail-callahan-24.jpg?itok=Q_fJ7px1","alt":""},"first":"Abigail","last":"Callahan","jersey_number":"24","position":"Defender - Midfielder - Foward","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--jayden-montejano-06.jpg?itok=0F0xMO1d","alt":""},"first":"Jayden","last":"Montejano","jersey_number":"26","position":"Defender - Midfielder","bio":"","college":"","hometown":"","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--kaycee-gunion-30.jpg?itok=dQA-oPZX","alt":""},"first":"Kaycee","last":"Gunion","jersey_number":"30","position":"Goalkeeper","bio":"Kaycee has been playing soccer since she was 5. She started playing AYSO and eventually moved to club soccer where she spent most of her soccer career at Crusaders Soccer Club and then her last year of club at West Coast Football Club. This is also where she began playing goalkeeper at the U10 age, the position she would fall in love with. Eventually, Kaycee went to college at California State University at San Marcos where she was the starting goalkeeper. At the end of her Freshman year Kaycee broke her thumb and was in recovery, by her Sophmore year she had fully recovered and in search of more soccer during her off season. This is when she discovered the San Diego Sea Lions and she has been here ever since. Kaycee during her time with the Sea Lions has graduated from CSUSM, went to grad school at SDSU and graduated with a doctorate in physical therapy, and is now a full time Physical Therapist, not to mention was a part of the 2013 Championship Team. Kaycee has made a lot of milestone in her life since joining the Sea Lions and is looking to make even more with us to come both on and off the field!\n","college":"Cal State San Marcos","hometown":"Santee, CA","years_with_sealions":"8"},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--jen-lalor-00.jpg?itok=csVz8NWU","alt":""},"first":"Jen","last":"Lalor","jersey_number":"1001","position":"Coach","bio":"Jen Lalor, former known as Lalor-Nielsen, is passionate about soccer. In a country where soccer is rapidly becoming more popular, Jen Lalor is a pioneer in the landscape of this sport.  Born in Chula Vista and a home grown product of San Diego, Lalor is a former professional soccer player who played for the U.S. National Women\u2019s Team and was nominated for the National Soccer Hall of Fame in 2012. Lalor played at the Women\u2019s World Cup in Sweden and as a college student at Santa Clara University. More modest than most, Lalor is a star who wants to give back and a powerhouse coach on and off the field.\n","college":"Santa Clara University","hometown":"Chula Vista, CA","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--lu-snyder-00.jpg?itok=UuM6mtze","alt":""},"first":"Lu","last":"Snyder","jersey_number":"1002","position":"Assistant Coach","bio":"Lorena \"Lu\" Snyder played at San Diego State from 1990-93, has played goal for the San Diego SeaLions of the semipro Women's Premier Soccer League, and is currently the Sealions president and assistant coach She recruits players, organizes games and practices, reserves fields, updates the team's Web site, plus all sorts of administrative duties no one ever hears about.\n","college":"San Diego State University","hometown":"Carmichael, CA","years_with_sealions":""},
            {"headshot":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/sealions_player_headshot\/public\/sealions-headshot--sammie-mascot.png?itok=xuF5U7OR","alt":""},"first":"Sammie","last":"The Sealion","jersey_number":"1003","position":"Mascot","bio":"I was born near the Children's Pool in La Jolla and I grew up right here in San Diego. Currently I live near Torrey Pines State Beach. I love this spot since I'm swimming distance from the team's home, Cathedral High School. Being so close gives me more time to do what I do best - root for the greatest team of all time: the SeaLions!\n","college":"College of Life","hometown":"San Diego, CA","years_with_sealions":"13"}
        ];
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/","about":"<p>Need an app like this?<\/p>\n<p>Email us at <a href=\"mailto:doug@customersuccessmarketing.com?subject=I%20want%20an%20app%20like%20the%20Sealions\">doug@customersuccessmarketing.com<\/a><\/p>\n"}]
        $scope.global_header = $scope.global_text[0].roster;
    }
])

.controller('SponsorCtrl', ['$scope', '$state', '$ionicHistory', '$window', '$http', '$resource', '$ionicModal', 'SDConfigConstants',
    function($scope, $state, $ionicHistory, $window, $http, $resource, $ionicModal, SDConfigConstants) {

        $scope.sponsorsPath = SDConfigConstants.endURL + 'sealions-sponsors';
        $scope.sponsorsPath2 = SDConfigConstants.endURL2 + 'sealions-sponsors';
        $scope.sponsorsPath3 = SDConfigConstants.endURL3 + 'sealions-sponsors';
        $scope.globalPath = SDConfigConstants.endURL + 'sealions-global-text';
        $scope.globalPath2 = SDConfigConstants.endURL2 + 'sealions-global-text';
        $scope.globalPath3 = SDConfigConstants.endURL3 + 'sealions-global-text';
        
        $http.get($scope.sponsorsPath).then(function(response) {
            if (response.status === 200) {
                $scope.sponsors = response.data.sponsors;
            } else {
                $http.get($scope.sponsorsPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.sponsors = response.data.sponsors;
                    } else {
                        $http.get($scope.sponsorsPath3).then(function(response) {
                            $scope.sponsors = response.data.sponsors;
                        });
                    }
                });
            }
        });
        $http.get($scope.globalPath).then(function(response) {
            if (response.status === 200) {
                $scope.global_text = response.data.global_text;
                document.getElementById("globalHeader").outerHTML = $scope.global_text[0].sponsors;
            } else {
                $http.get($scope.globalPath2).then(function(response) {
                    if (response.status === 200) {
                        $scope.global_text = response.data.global_text;
                        document.getElementById("globalHeader").outerHTML = $scope.global_text[0].sponsors;
                    } else {
                        $http.get($scope.globalPath3).then(function(response) {
                            $scope.global_text = response.data.global_text;
                            document.getElementById("globalHeader").outerHTML = $scope.global_text[0].sponsors;
                        });
                    }
                });
            }
        });

        $scope.selectSponsor = function(item) {
            $scope.selectedSponsor = item;
        };
        
        $ionicModal.fromTemplateUrl('sponsor-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        
        
        
        // USED FOR TESTING IN BROWSER
        $scope.sponsors = [
            {"title":"619Futsal","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--619-futsal.jpg?itok=eSiXMnsu","alt":""},"qr_code":"","website":"http:\/\/www.619futsal.com\/","body":"619 Futsal is a new futsal league in San Diego founded by Sean Bowers.\u00a0 619 Futsal is geared toward the technical development of youth soccer players.\u00a0 Futsal is an excellent alternative to indoor soccer.\u00a0 Soccer in the U.S. has fallen behind relative to the tecnhnical abilities of other countries.\u00a0 In order to remain a competitive threat, we must create more well rounded soccer players.\u00a0 The young generation is our future.\u00a0 We have created an avenue for San Diego\u2019s youth to play futsal and improve the tecnical side of their game.\n"},
            {"title":"Armone's Core Connection","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--armones-core-connection.png?itok=Rp9QRGLb","alt":""},"qr_code":"","website":"http:\/\/armonescoreconnection.com\/","body":"Armone\u2019s Core Connection\u00a0is a results-driven Pilates, fitness, and certification studio. Founded by fitness expert and master Pilates instructor Armone Sullivan, ACC redefines the workout experience through dynamic exercises, innovative class structures, and the highest level of professionalism.\u00a0Armone\u2019s Core Connection\u00a0brings to you the ultimate fitness experience.\nAt\u00a0Armone\u2019s Core Connection, our mission is to inspire people to be their best through a fitness forward lifestyle.\n"},
            {"title":"Bahn Thai","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/bahnthai_on.png?itok=w8LsuvYx","alt":""},"qr_code":"","website":"http:\/\/bahnthai.net\/","body":"Family owned and operated restaurant serving freshly cooked, flavorful, authentic Thai dishes\n"},
            {"title":"Ben & Jerrys","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--ben-and-jerrys.jpg?itok=jfxZhi7W","alt":""},"qr_code":"","website":"http:\/\/www.benjerry.com\/","body":"From a renovated gas station in Burlington, Vermont, to far-off places with names we sometimes mispronounce, the journey that began in 1978 with 2 guys and the ice cream business they built is as legendary as the ice cream is euphoric.\n"},
            {"title":"Boys and Girls Clubs of Greater San Diego","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--boys-and-girls-clubs.jpg?itok=4zcAOr4B","alt":""},"qr_code":"","website":"https:\/\/www.sdyouth.org\/","body":"The Boys & Girls Clubs of Greater San Diego CHANGES LIVES through quality programs and guidance in a safe, affordable and fun environment.\u00a0\n"},
            {"title":"Catalyst Training Center","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--catalyst-soccer.jpg?itok=JyZM77W9","alt":""},"qr_code":"","website":"http:\/\/www.catalystsoccertraining.com\/","body":"Millions of soccer players, parents, coaches, and trainers will be positively influenced by Catalyst Soccer's nationwide...\n\tCurriculum,\n\tResources,\n\tTechnology\n\tPhilanthropy\n...in a way that motivates them to continue their relationship with soccer to the greatest depth of their potential\n"},
            {"title":"Chisomo Idea","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--chisomo-idea.jpg?itok=4BPpJAs_","alt":""},"qr_code":"","website":"http:\/\/chisomoidea.com\/","body":"Chisomo Idea is about nurturing individuals for community flourishing. We not only have a passion for individuals and communities in Africa to recognize, realize and be able to implement their gifts, but also for the world to take notice of the amazing things Africans have to offer.\u00a0\nSo we attack this endeavor with two complementary strategies.\u00a0 First we focus on holistic individual development. So, everything it took for you or I to be who we are today, we seek to provide those opportunities to individuals living in materially impoverished, at-risk communities across Africa.\u00a0 So think physical needs like food, water, shelter and medical; intellectual needs like educational opportunities and skills training; Spiritual needs like face to face mentoring and small groups; and finally social needs like athletic clubs and small business development.\u00a0\nOur secondary, yet complimentary strategy is to come alongside the leaders of those same \u201cat-risk\u201d communities and assist them in developing the opportunities within their community for individuals to flourish.\u00a0 Again, focusing on intellectual, physical, spiritual and social development. We believe when these two paths cross; individuals who believe they can serve and have been trained to serve with a community that has opportunities for them to serve, we will see communities truly flourish and the world\u2019s perception of Africa transform.\n"},
            {"title":"Cohen Chiropractic","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--coehn_chiropratic.jpg?itok=moYDlMP5","alt":""},"qr_code":"","website":"http:\/\/www.necksandbacks.com\/","body":"Now located in Solana Beach conviently close to Hwy 5, Dr. David R. Cohen has provided quality chiropractic for over a decade and is commited to bringing you better health by teaching and providing the true principles of chiropractic care.\n"},
            {"title":"Fox Soccer Channel","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--fox-soccer-channel.jpg?itok=jSNzD9i-","alt":""},"qr_code":"","website":"http:\/\/www.foxsports.com\/soccer","body":"All the soocer news!\n"},
            {"title":"FTBLR","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--ftblr.jpg?itok=oKojVpH-","alt":""},"qr_code":"","website":"http:\/\/ftblrapparel.com\/","body":"FTBLR is a company that started with a simple question. \u201cHow could a group of FTBLR friends from Southern California, give back to less fortunate FTBLR\u2019s in their own communities and around the world?\u201d\nThe answer: Develop and create unique apparel FTBLR\u2019s will love and also support because of its philanthropic business model.\nFTBLR will donate 10% of our proceeds to non-profit organizations, to help bring the beautiful game to underprivileged communities that lack\u00a0proper facilities and equipment.\n"},
            {"title":"Kind","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--kind.jpg?itok=dYVupzvb","alt":""},"qr_code":"","website":"https:\/\/www.kindsnacks.com\/","body":"We believe if you can't pronounce an ingredient, it shouldn\u2019t go into your body. Actually, it shouldn\u2019t even go into your pantry. KIND\u00ae\u00a0products are made from nutritionally-dense ingredients like whole nuts, fruits and whole grains - no secret ingredients and no artificial flavors, preservatives or sweeteners.\n"},
            {"title":"Longevity Physical Therapy","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--longevity-physical-therapy.jpg?itok=MZ_Or4Aw","alt":""},"qr_code":"","website":"http:\/\/longevityphysicaltherapy.com\/","body":"Longevity Physical Therapy is the premier physical therapy clinic in San Diego. We strive to restore function, enhance mobility, and amplify your performance. Physical therapy isn\u2019t just for recovering athletes. Every person of every age can benefit from our services. With two locations throughout San Diego, physical therapy is close by!\n"},
            {"title":"Nordic Touch","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--nordic-touch.jpg?itok=X4WHjTtw","alt":""},"qr_code":"","website":"https:\/\/www.facebook.com\/Nordic-Touch-284227114979262\/","body":"Nordic Touch senior therapist Jeff Wergeland is a California State Certified Massage Therapist who also graduated #1 in his class at San Diego State University with a Bachelor of Science Degree in Electrical Engineering. Jeff has been the team massage therapist for the top women's soccer team in San Diego, the 2013 national champion San Diego SeaLions since 2004 and was also the team massage therapist for the 2001 NCAA D2 national champion UC San Diego women's soccer team. Along with working throughout the state of California, Wergeland has also provided sports massage for Olympic gold medalists and professional teams based in New York, Boston, North Carolina, and Lillestr\u00f8m, Norway.\n"},
            {"title":"North Island Credit Union","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--north-island-credit-union.jpg?itok=SWt9fyAD","alt":""},"qr_code":"","website":"https:\/\/northisland.ccu.com\/","body":"In 1931, California Credit Union was born out of a need to provide reliable, rewarding, and convenient financial services to teachers and others in the education community. Almost a decade later, North Island Credit Union made a name for itself by providing banking resources to military and civil service personnel.\n"},
            {"title":"NXPT FITNESS STUDIO","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--nxpt-fitness.png?itok=V6e6Rag_","alt":""},"qr_code":"","website":"https:\/\/www.nxptfit.com\/","body":"NXPT FITNESS STUDIO\n\tDownload our Fitness APP\u00a0\n\tReserve your spot in class\n\tManage your account and profile\n\tGet updates and promotions\n\tShare, Like, and Check in on Social Media\nNo Excuses\n"},
            {"title":"Peninsula Women's Soccer League","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--peninsula-womens-soccer-league.jpg?itok=aDf1Grlf","alt":""},"qr_code":"","website":"http:\/\/pwsl.org\/","body":"Peninsula Women's Soccer League is San Diego's largest women's-only outdoor soccer league. We offer 3 seasons, 5 divisions and an annual tournament for full field, 11v11\u00a0soccer - and we'd love to have you join us!\n"},
            {"title":"San Diego Soccer Women","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--san-diego-women-play-soccer_0.jpg?itok=roro6Gc9","alt":""},"qr_code":"","website":"https:\/\/sandiegosoccerwomen.com\/","body":"San Diego has a fantastic history of youth and adult soccer leagues! Established in 1976, the North County Women\u2019s Soccer Association offers women of all skill levels the opportunity to have fun and stay fit on the pitch with FIFA rules, professional referees, convenient playing times, and well-maintained fields in the City of Poway. We play on Saturdays from late January into early June. Teams are always looking for new and experienced players. Women aged 30+ are invited to contact us for more information about joining this local league. Younger players are also welcome to join, as we include two 25-29 year olds on each team!\u00a0\n"},
            {"title":"San Diego Sports Commission","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--sd-sports-commission.jpg?itok=IKOIyIST","alt":""},"qr_code":"","website":"http:\/\/www.sdsportscommission.com\/","body":"The San Diego Sports Commission works with\u00a0the San Diego Tourism Authority to find and\u00a0secure the best hospitality for all events\u00a0in-market.\u00a0The group also helps navigate the city\u2019s\u00a0permitting process, connect events, and market\u00a0and promote all events locally to ensure their\u00a0success\n"},
            {"title":"Sundance Stage Lines","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--sundance-stage-line.jpg?itok=p17HylaG","alt":""},"qr_code":"","website":"http:\/\/www.sundancestage.com\/","body":"Sundance Stage Lines\u00a0was started in September 1978, with just two coaches and 12 years of bus-driving experience. Quality maintenance and a \"customer comes first\" philosophy formed the cornerstone of our venture.\nAs we expanded and added additional staff, it became apparent that communication was critical. We became dedicated to \"hands-on\" ownership. Customers and employees received immediate answers, allowing us to retain a strong loyalty. This dedication has served us well.\nNew customers, once they have compared services with our competitors, invariably became repeat customers. We are very proud of our team members whose efforts allow us to stay on a course of controlled, manageable growth, without compromising our standards. We promise to continue offering safe, reliable and comfortable travel with a personal touch. Our purpose is to serve the customer.\n"},
            {"title":"UC San Diego Health","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--uc-san-diego-health_0.jpg?itok=t3QG4cC_","alt":""},"qr_code":"","website":"https:\/\/health.ucsd.edu\/Pages\/default.aspx","body":"Our Mission: To deliver outstanding patient care through commitment to the community, groundbreaking research and inspired teaching.\nOur Vision: To create a healthier world \u2014 one life at a time \u2014 through new science, new medicine and new cures.\n"},
            {"title":"US Soccer","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/sealions-sponsor-logo--us-soccer.jpg?itok=F4FGap3N","alt":""},"qr_code":"","website":"http:\/\/www.ussoccer.com\/","body":"As the governing body of soccer in all its forms in the United States, U.S. Soccer has played an integral part in charting the course for the sport in the USA for more than 100 years. In that time, the Federation\u2019s mission statement has been clear and simple: to make soccer, in all its forms, a preeminent sport in the United States and to continue the development of soccer at all recreational and competitive levels.\nFrom a viewership standpoint, nearly 20 million Americans watched the Round of 16 match at the 2010 FIFA World Cup on television. Soccer-specific stadiums have opened their doors to resounding success. The National Training Center in Carson, California, has been a valuable facility for all levels, including the U.S. Soccer Development Academy, which kicked off at the state-of-the-art complex with much fanfare in 2007.\nIn 1989, the U.S. Men\u2019s National Team had not played in a World Cup in 40 years and the U.S. Women\u2019s program was in its early stages. U.S. Soccer was playing games in small stadiums that did not reach capacity, few matches were televised, soccer-specific stadiums were yet to be created and there were no high-level professional outdoor leagues.\n"},
            {"title":"Women's Premier Soccer League","logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/logo\/public\/wpsl-logo_0.jpg?itok=sUxkGykE","alt":""},"qr_code":"","website":"http:\/\/www.wpsl.info\/","body":"The Women's Premier Soccer League is an independent highly competitive national league whose main focus is on the development of highly competitive premier women's soccer teams.\nThe WPSL was formed in 1998. We are sanctioned by the United States Adult Soccer Association (USASA), who is an affiliate of the United States Soccer Federation (USSF), the ruling body of soccer in the United States and FIFA the world's ruling body for soccer.\n"}
        ];
        $scope.global_text = [{"home":"<p><strong>Welcome to the beta version of the <a href=\"http:\/\/www.sealionsoccer.com\">Sealions<\/a> app!<\/strong><\/p>\n","game_schedule":"<p>The Sealions are now 5-0-0 after their win over Tuscon on June 17th. We'll see you at the next game!<\/p>\n","roster":"<p>Check out the roster below.<\/p>\n","news_posts":"<p>Read the latest Sealions news right here!<\/p>\n","sponsors":"<p>Please support our sponsors!<\/p>\n","wpsl_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo.jpg?itok=UFYDJ9O9","alt":""},"wpsl_url":"http:\/\/www.wpsl.info\/","sealions_logo":{"src":"https:\/\/dev-sealions.pantheonsite.io\/sites\/default\/files\/styles\/team_logo\/public\/wpsl-logo--sealions.jpg?itok=NTcYpiTk","alt":""},"sealions_url":"http:\/\/www.sealionsoccer.com\/","about":"<p>Need an app like this?<\/p>\n<p>Email us at <a href=\"mailto:doug@customersuccessmarketing.com?subject=I%20want%20an%20app%20like%20the%20Sealions\">doug@customersuccessmarketing.com<\/a><\/p>\n"}]
        $scope.global_header = $scope.global_text[0].sponsors;
    }
])

;