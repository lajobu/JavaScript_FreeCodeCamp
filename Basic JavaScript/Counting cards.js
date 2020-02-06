 var count = 0;

 function cc(card) {
     switch (card) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
             count++; //En caso de obtener desde 2 a 6, contara uno, en caso de 7 a 9 contara 0
             break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
             count--; //En caseo de 10 a A contara menos uno
             break;
     }
     if (count > 0) {
         return count + " Bet"; //"Bet" en caso de obtener mayor que cero
     } else {
         return count + " Hold"; //"Hold" en caso de obtener menor que uno
     }
 }
 cc(2);
 cc(3);
 cc(7);
 cc('K');
 cc('A'); //En este caso (1+1+0-1-1 = 0) obtenemos "Hold"
 cc(2);
 cc(3) //En este caso (1+1 = 2) obtenemos "Bet"