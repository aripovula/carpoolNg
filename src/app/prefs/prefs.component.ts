import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prefs',
  templateUrl: './prefs.component.html',
  styleUrls: ['./prefs.component.css']
})
export class PrefsComponent implements OnInit {
  residingins = ['any location', 'in the same street as mine', 'in the same zip-code area as mine',
  'in the same city / town as mine', 'in the same state as mine'];
  describemes = ['extravert', 'intravert', 'joyful', 'silent', 'a discusser', 'a criticizer', 'calm', 'impulsive',
'clean / tidy', 'a little messy', 'shy / timid', 'modest'];
  interests = ['sports', 'politics', 'economics', 'science', 'music', 'arts', 'fiction books', 'martial arts'];
  genders = ['male', 'female', 'any'];
  smokers = ['smoker', 'non-smoker', 'any'];
  anymusics = ['no music / songs', 'any music / songs', 'any selected below'];
  musicgenres = ['pop', 'smooth jazz', 'club', 'soft rock', 'religious talk', 'other talk', 'country', 'hard rock'];
  talkLevels = ['minimal talk journeys', 'moderate talk journeys', 'does not matter'];
  origins = ['Europe', 'Latin America', 'American - Minority *', 'Africa - North-most',
   'Africa - Other', 'Asia - Middle East', 'Asia - Central', 'Asia - Pacific'];
   yesNos = ['yes', 'no'];

   constructor() { }

  ngOnInit() {
  }

}
