"use strict";
/*           CONDITION
 * declarer trois variable a=4,b=4,c=3
 * 
 * a sera l expression de reference 
 * si a est egal a b alor faire un console log('egal à b')
 * 
 * si a est egal a c alors faire un console log('egal à b')
 * 
 * par defaut il y a un console log("egal a rien")
 */

let a =4;
let b=4;
let c=3;
//controle un par un,donc if plus pratique lors de tranche   exemple:age,taille

switch(a){
    case b://verifie que a == b ect...
        console.log("égal à b");
        break;//stop l action lorsque la bonne valeur est trouvé
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}
// recap:
// ==: egalite general
//===: egalite strict (typr de character)
// if:si
//else:sinon
//switch:controle un par un,donc if plus pratique lors de tranche   exemple:age,taille
/*/stop l action lorsque la bonne valeur est trouvé
     ||: ou
     &&: et
*/