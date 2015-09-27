(function(){

   function CharacterSequence (character)
   {
      this.character = character;
      this.repeatCount = 1;
   }

   CharacterSequence.prototype.getCharacter = function ()
   {
      return this.character;
   }

   CharacterSequence.prototype.incrementCount = function ()
   {
      this.repeatCount = this.repeatCount + 1;
   }

   CharacterSequence.prototype.getCount = function ()
   {
      return this.repeatCount;
   }

   function rebuildString (characterSequenceArray)
   {
      var rebuiltStr = '';
      characterSequenceArray.forEach(function (characterSequence)
      {
         rebuiltStr +=
            characterSequence.getCount() + characterSequence.getCharacter();
      });

      return rebuiltStr;
   }

   function compressString (inputString)
   {
      var characterSequenceArray = [];
      var inputStringCharArray = inputString.split('');

      var firstCharacter = inputStringCharArray.shift();
      characterSequenceArray.push(new CharacterSequence(firstCharacter));
      var currentIndex = 0;

      inputStringCharArray.forEach(function (character)
      {
         if(character !== characterSequenceArray[currentIndex].getCharacter())
         {
            characterSequenceArray.push(new CharacterSequence(character));
            currentIndex++;
         }
         else
         {
            characterSequenceArray[currentIndex].incrementCount();
         }
      });

      return rebuildString(characterSequenceArray);
   }

   var inputString1 = document.getElementById("Input String 1").textContent;
   document.getElementById("Compressed String 1").innerHTML = compressString(inputString1);

   var inputString2 = document.getElementById("Input String 2").textContent;
   document.getElementById("Compressed String 2").innerHTML = compressString(inputString2);

})();