$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bouletcorp/Bouletcorp.feature");
formatter.feature({
  "line": 2,
  "name": "Verification des widgets - bouletcorp",
  "description": "En tant que utilisateur je souhaite verifier les widgets du site Bouletcorp",
  "id": "verification-des-widgets---bouletcorp",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bouletcorp"
    }
  ]
});
formatter.before({
  "duration": 6508254800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verification des widgets - bouletcorp",
  "description": "",
  "id": "verification-des-widgets---bouletcorp;verification-des-widgets---bouletcorp",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "je me rends sur \"http://www.bouletcorp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "je clique sur Aleatoire",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "la page a change",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "les widgets facebook, twitter et tumblr sont bien affiches",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.bouletcorp.com",
      "offset": 17
    }
  ],
  "location": "BouletcorpStepDefinition.jeMeRendsSur(String)"
});
formatter.result({
  "duration": 11785552100,
  "status": "passed"
});
formatter.match({
  "location": "BouletcorpStepDefinition.jeCliqueSurAleatoire()"
});
formatter.result({
  "duration": 3675479000,
  "status": "passed"
});
formatter.match({
  "location": "BouletcorpStepDefinition.laPageAChange()"
});
formatter.result({
  "duration": 1048779000,
  "status": "passed"
});
formatter.match({
  "location": "BouletcorpStepDefinition.lesWidgetsFacebookTwitterEtTumblrSontBienAffiches()"
});
formatter.result({
  "duration": 98228600,
  "status": "passed"
});
formatter.after({
  "duration": 62300,
  "status": "passed"
});
});