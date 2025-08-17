//BUTTONS
var play; var ins; var back; 

//OBJECTS
//var music = new Audio("https://codehs.com/uploads/42379e1722d91c11bbf476d7de593d71");
//var music2 = new Audio("https://codehs.com/uploads/3a64d24615591da9e1fe95ca8ec7929f");

//SHARE
var grabber; var bob; var stage = 0; var WallSO; var Grass; var text; var timer = 15;
var M1flag = false; var M2flag = false; var M3flag = false;
var game_over = 0;
var gravity =2.5; var tuba=0; var guitar=0; var BassD=0; var S1p2BG; var S2BG;
var dx = 1; var dy = 1; var xB; var yB; var hat; var MNE1; var MNE2; var MNE3; var MNE4;
var dxx = 3;  var dxxx = 2; var dxxxx = 1; var dyy = 2; var dyyy = 3; var dyyyy = 2; var dyyyyy = 1;
var MD; var dxxxxx = 4; var A1; var A2; var A3; var piano; var guitarr; var DS; var BA = 0;
var DSflag = true; var guitarrflag = true; var pianoflag = true;
var ctrl = 1;;
//var uk = new Color(170, 6, 132);

function start()
{
    music.play();
    music.loop = true;
    startScreen();
    keyDownMethod(controls);
    mouseClickMethod(grab);
}

function controls(e)
{
    if(ctrl == 1)
    {
        if(e.keyCode == Keyboard.letter('W'))
        {
            bob.move(0,-5);
        }
        
        if(e.keyCode == Keyboard.letter('A'))
        {
            bob.move(-5,0);
        }
        
        if(e.keyCode == Keyboard.letter('S'))
        {
            bob.move(0,5);
        }
        
        if(e.keyCode == Keyboard.letter('D'))
        {
            bob.move(5,0);
        }
        
        if(e.keyCode == Keyboard.letter('Q'))
        {
            bob.move(-40,-40);
        }
        
        if(e.keyCode == Keyboard.letter('E'))
        {
            bob.move(40,-40);
        }
        
        if(e.keyCode == Keyboard.letter('I'))
        {
            println("Instrument 1: " + M1flag);
            println("Instrument 2: " + M2flag);
            println("Instrument 3: " + M3flag);
        }
        
        if(e.keyCode == Keyboard.SPACE)
        {
            bob.move(0, -(gravity*20) );
        }
        
        if(e.keyCode == Keyboard.letter('R'))
        {
            if (game_over == 0)
                BobAttack();
        }
    }
}

function grab(e)
{
    grabber = getElementAt(e.getX(), e.getY());
    
    if(grabber == play )
        {
            stageOne();
            music.pause();
        }
        
    if(grabber == ins)
        {
            music2.play();
            instruct();
            println("After many obstacle during his life, Bob decides to");
            println("relax and learn about music. Bob decides to go to a");
            println("music school. Soon though Bob will encounter with");
            println("musical thieves that change his relaxing time to");
            println("adventure time...once again! Help Bob during his");
            println("Musical Adventures where he encounters some of the");
            println("best of in his round life. You must help Bob escape");
            println("with at least 1 life and 3 music sheets, lifes are");
            println("lost if you get cought by any of the musical");
            println("thieves or their attacks. Every stage has different");
            println("objectives so watch out.");
            println("*Q AND E ARE HELPFUL IF YOU WANT TO GO DIAGONALLY*")
        }
        
    if(grabber == back)
        {
            music2.play();
            startScreen();
        }

}

function startScreen()
{
    removeAll();
    
    ctrl = 0;
    
 /*   var BG = new WebImage("data:image/png;base64,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");
    BG.setPosition(0,0);
    BG.setSize(400,480);
    add(BG);
*/
    
    var GT = new Text("Bob's Musical Adventures", "25pt Impact");
    GT.setPosition(25,50);
    GT.setColor(Color.BLACK);
    add(GT);
    
    play = new Text("START","30pt Impact");
    play.setPosition(25, 460);
    play.setColor(Color.RED);
    add(play);
    
    ins = new Text("INSTRUCTIONS", "30pt Impact");
    ins.setPosition(145, 460);
    ins.setColor(Color.RED);
    add(ins);
}

function instruct()
{
    removeAll();
    
    var ins = new Text("Instructions","20pt Impact");
    ins.setPosition(125,50);
    ins.setColor(Color.BLACK);
    add(ins);
    
    back = new Text("Back","40pt Impact");
    back.setPosition(40, 460);
    back.setColor(Color.black);
    add(back);

    var insText = new Text("-Move Up with'W' ","20pt Consolas");
    insText.setPosition(40, 100);
    insText.setColor(Color.black);
    add(insText);

    var insText2 = new Text("-Move Left with'A' ","20pt Consolas");
    insText2.setPosition(40, 150);
    insText2.setColor(Color.black);
    add(insText2);
    
    var insText3 = new Text("-Move Down with'S' ","20pt Consolas");
    insText3.setPosition(40, 200);
    insText3.setColor(Color.black);
    add(insText3);
    
    var insText4 = new Text("-Move Right with'D' ","20pt Consolas");
    insText4.setPosition(40, 250);
    insText4.setColor(Color.black);
    add(insText4);
    
    var insText5 = new Text("-Fire with'R' ","20pt Consolas");
    insText5.setPosition(40, 300);
    insText5.setColor(Color.black);
    add(insText5);
    
    var insText6 = new Text("-Jump with'SPACEBAR' ","20pt Consolas");
    insText6.setPosition(40, 350);
    insText6.setColor(Color.black);
    add(insText6);
}

function stageOne()
{
    removeAll();
    
    ctrl = 1;
    
    stage = 1;
     
/*    var S1BG = new WebImage("data:image/jpeg;base64,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");
    S1BG.setSize(500,480);
    S1BG.setPosition(-20,0);
    add(S1BG);
*/
    Grass = new Rectangle(400,100);
    Grass.setPosition(0,430);
    Grass.setColor(Color.green);
    add(Grass);
    
    bob = new Circle(30);
    bob.setPosition(50,400);
    bob.setColor(Color.RED);
    add(bob);
    
    var sign = new Text("Music School", "20pt Impact");
    sign.setPosition(125,240);
    sign.setColor(Color.BLACK);
    add(sign);
/*    
    var arrow = new WebImage("https://dumielauxepices.net/sites/default/files/arrows-clipart-pastel-843143-5884383.png");
    arrow.setPosition(125,245);
    arrow.setSize(175,75);
    add(arrow);
    
    var MS = new WebImage("https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/11/12000529/School-PNG-Image-HD.png");
    MS.setPosition(300,285);
    MS.setSize(150,150);
    add(MS);
*/    
    setTimer(check,1);
    setTimer(move,10);
}

function TS()
{
    stopTimer(check);
    stopTimer(move);
    removeAll();
    
    stage = 7;
/*    
    S1p2BG = new WebImage("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUWFRcVFRYXFRAVFRcVFRUXFhUVFRUYHSggGBolGxUWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0fHx0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEIQAAEDAgQDBgMFBAoCAwEAAAEAAhEDBAUSITEGQVETImFxgZEUMrEHocHR8CNCUuEVM2JydIKys8LxJHNDVIM0/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKhEAAgIBBAEDAwQDAAAAAAAAAAECESEDEjFBBCIyUUJh0RRxwfAjgZH/2gAMAwEAAhEDEQA/APLqTk1taAiSJ08RHiISxlJOrFp2Xaz0oBFGgXHqdANiegCkfZjSeYOg5HlMou1pf9K34Twv2jQ5066wOnio3G1pFAqUyBp3YEaSJHOfdB1KXUgaSOfpLdvVW7iPCTQMToQYOgPiDESqy6kCYEk6R+I/RVxYVYEBBEDlrOV4nXUAjRcupETygwRMGfI+SaC1J5AA6xvtMAHU9eaifbb7nT7+fWQqFtIbfKPHTn3TJH4FHMnKOk6EjTkN0K1pHQd07TruNYnUqazGo59eX05eiljCralqZ+7Uf9I91MEaASOm64YQANuvj92vJSCT57mdf5rJiZlKTznzmdPFMKNHw99VBRcAeQn1j3RtOsB+vwUsh2Stt+e3lsiqDBz18vzQjq8gLqnWgx/JCBJjei+NtPr7o6jcQkLrmN91nx8bnXxVGiRaqWIfNr+7+IQt1iGb1SS1vZz/AN3T3C4ZVnQmExqKGBuSOcjpuEFc1WOHe0/XRBVrnLv6JfeX8DX3Efeih0c4lTbrrPTqPMbwq7Wplp5H2IM/r0Rd3dddRPzCeXT8ihPiDz7zTqdemmvQrSKoboDr2+kiSNJ02J5fzULmZh/aHn3vDzH68WGYbjUc5H3FRvpj5mzpr4g6a6cp5qiGhfSMSDo076AnTYj1/FRPplpIO40KY1KGYZh6j219SuHUJbtq3w3b6Dlrr0joghxB6wmHADvCdJgHYjX3/wAwRNu2WEdHA7iNZB05n5VlGgS0t6d4f8hv01/yhFWVLcdWke3eH3gIGokVpT77P7w5TzHLmo6VAymVnZuLm6fvD6qWjaRAUtl7QOpa/KOjes/NLvTQj2XTLUtaT17o0BGvzb7GI902yBz4GsmB9ArXS4QDqYkmQOQETuf14KdwnS5POadvrqY6lQ1zrIEDkNdB01TfGrR1F7qZP5EcknquCYmYLggEAwDofHmuJChfUBUBeU6JbJGgSm9oQEjDkfTrKLsmMh7TuQvTcGxRtO3Y+o5rHOEBriBIHNUDhTBTUeKlT5RrH4lRcUYt2lwQPlYA0DomlbNKTwF8Z4yys4BhkNmT1J6eCrNN5n1lQPryuqb1aVFHo/BOF29SmXVAJ8Y090g4qsG0qxYAQNwDoIPQ9EptMRez5XETvBIVjwHEW12fD3Aztk5HHUt8J6IUey4xt2VB34HlP10XAqHbfQAaz7fkrRjvCrqfebq3luqrWpuaYMq1BNYYnHsKp3PX+UDxPl0RHxg/U+2uiVZz0UT62uoPrr7/AJqXpslj+ndjrp+KkN0B+v19FXqdwOs/U+HmpxcfraQo2CVFltK893kjgQNfBVm0vMvnt+RRVTEc3sfuUOLBoY3NxKCfez6+n10+9AOuCZ8tPVRUyZ+78z4q1EtYLFhlxM+R9dRyUVzelpj9eUFB2dTKDHT8unNBXVWTP68fX0SSyAddXROv8wOWoS51yY+vMb/vdFwK06fr0/7Q9R2s/rfkd/qtEhNndR3PafVp/JcARtoTy3afXn66KLtP1oPfkd+a6bU08+X8vxCCbOxvpoeh5z0/JS21MnVuh5t/IHceC4YAdyI8Tp6Hki7e5pN3dPkCT7jQpZ6AJtqXMDzH63C6rWwkOaP++iifjAHy0yT1JA+4So/6QqOmMrZ6CfrKFpzY0mwltoGnMNtx+IP0W7emxrxqIBBHWNwurDC6tYgS4+ZMewVmFjRsGdoWB1X92dYKbjWG8mih8lhw/BKDaALh3oDtdD1Bg6qlX4DXEt5HRQYbjFWo9+ao4yCTJMTI5LL16ymtroyap8gVvc5Hh3Qg/evT8N4goPYB2rBm0gmHAnlHmvH69XVd0rggSDsZ9le2xtKQy45qu+JeHAtjQeIHNU+sSvT8TtW31q2oP6xrRrz2Xmt7buY4tcNQiLwZz4AjUK7UVRq5zJNmNmMqFWLhzC3VHAnZLcIsC4gkL0fBLQU2yeiwTJ02GX1cW9DKN4Xmzapc5zp3Mqw8W4hIIlVaiYG4HejXyWkJZNlPJEaikp1kKTqtgq1IW4ZUq6dYNeZCHdCqxTcmuHyduq308o6NKR6hU4jp1mAEaxBEQq5ieGtdq1J5czUyEyscQnQpbNuUdEYpYQkucPITKz4W7W3dWzgFukE6mfDomV1Sa4SErfWqUw4NcQDoQqttYBwRUKzIKh1GxI9SmN1Q1QjKJL2t6uaPcqmjjlHJZb3gqvTsheGsILWvLJMhr4y68z3hoqvSc8mM7vcr0jH+H+zwxjxdVHjuEUy79kS46hjeo1P+Uqh0LVzXjM0iYOoIkdfJTFJhtt4LtdcI2rcO+JFzV7XIHTnGUvjWnljxjqvO316jdqjvcr2XEcMshh+ZuXN2YLXT3y+NiJ6yvG7xupUpJphNYtfI44QyVrltO5uKlOm4GSHRLv3QSdh4+CI47saFvWbTta76gyy+Xh8OnTvAcxy/NB8GstzcsF0YpazyGaO7mP8ADKP+0OjZtrtFmWluXv5CCzNOkRpMbx4c5RWSfpKxSqOJ+Z3uvQMR4KoMw4XYuqhqZGu+ZuQl0dwCJnWN+S8+ot1XpxwKydhoex5dXyAwHEu7WBLOznaZG22qKHBWeb0mOcQMx9054p4arWQo9q4Htg4wHEkZMsh2m/f5Sh8Ow6o+rkYxznbwASdNzAVn+1K2exljnrGqSyrBIED+p2O5359E3SBxpFFYFb+E+Hvig45g3KCdTG0T9QqpSZKsGEXFRgLWOIDt1dOsGmkjdSwh5b0Kb4ZhY3K6saM6lGXN0GCAplJ8I6lFIa2l9Tt9/UpBxXxELh2ggDQcksubovMBBXVu4CSIRHTSdsmSzaN4LXyvcf7P/IIrELoQkls+HH9c13dv03WOovWcr5sHrV9VLb1CQf1yS+o5SW1TbUan8E0yVLJe+CMRgZCdNl3xXgjXS5qqWCXmSpuvRKFcVacFYN5JcrPKrm3LTBQxpq34/h2p0VYdTIOyzbZzzeS4YHYgQnd/c5WQFFbNDGpPjF3unwVwivY1cZnIaiTDYBOp6acvRQXFSXFTUbgNDZ2I1iepSi8kacs5BKm58z9VIxqiuBD3Do4/VSUyjcxKWSdrE5wCq1rgXbSkzSmNiNF2aDuLO3x3ZeeK8Rt6lEdk1oMDQbzzPhoqdbV4K6rTCGC2jGlR0t1wWKhd6J5bYO2rQdUzAEcufsqS2toiqGK1GggOIB3SlF9F7iC9palBWbB21L/2M/1BFVq8qKy/rqf/ALGf6gqfBlKmz1DiSjbjD2Qf4cgk/Mfnke6R8RZXXlpEkBlEaupu0zaCfl9084idQNgwNb3jly6agiM5J9/cJFiTYvbWR+5R07IMnX+E6O8/yWMPyEf5fJe2C1ccgFMvk6FrC7NrmJ5Hn4LyC0smude5mtOWhUIltM5SHCHNlwynxbJ8F7A25tWvgBgqZiIhodm1mZ06815RYQ918QQB2FSJ7HXvD+L/AI69EafZlHj8kvANC0FJ9S6Y1zW1aYkta6JDo1mcs7iDsEx+0iztTQo1bZlMNc9wLmNa3NoNyNTHkl/2f/Dhj/icuTtWaHsd8roJB75bPTTqmn2k3FsaNFtuWZQ9/wAnZxMCdB3vwVfUC/vwV7ie1aw2kNaJtqZMNpiTrJOUmT4nVeu2Rtc7YFMVoGwph/ydW6bdF5PxI9hNpl/+tTn+q6n+D/lr1XqzPhi5rcjRW7sfs255yzJyiIjxhTPhBNY/BUOG6TBidaetSDmy89dRv5IH7YWMiyDIygV4j/8AFG8J5W4hVBj/AOTdvif3RshPtac1ws8ggRX0iOdJH1oeqvUih2tNXjhXA21muJcGxO+m0fmFT7UQm9viL2AhriAd4Wsk2sGsFSGV3VDHFo5JZeXUoavczuhO0lCjRbmNuHqzG1gXxHjtKb8X4hQqkCk0AARpr6qrALDKHHNki2poVHXrKWuJQVQLn1XUjk1HTI3uU1AGBAJ1300QrkVTrBrG7y6faSFip5MVJWcsqw+f7R+qvGAYhoNVQbk94+adYJdRCzvJlu9RecSoh4lVarZanRWWzuMzVBUttSmaNWava8CFVcVuN00v7hVnEKsqWZzYGSmVs0ENBAJjSTr129krlFG3cS0t6DntsnENN19yK+H7R/nPvqt0lvEh+2d6f6QuqLVLI7J6YTzAGNLgHbSk9NqYWX4rt8b2s7vFLpxZh1uykHUjJ018eYVJej6tRxGpJQFwFvFUjrkcZlZsL4ebVtnVi8AjlOpnoOiqkqelf1GtLWvIB0ICbvohSoHe/VSWVaKjD0e0+zghXlYKn1H1QZ7snrmP49TfYhopPEhoBLYYCObXc9j7rzqrfPe8F7i6IAJJMAbATyTnFeOjWtBa9iGkBoL9dQyIhsaHQc+qqdKoSdASegDifYBRBUilJLg9VxPEbE2GVuXPkAAy98P0kk+68kuX6leg4nxHh5sOwFNza+QDKaVQOa8RLi8iOp31XnNR0n+RRHCIlJUWXgM24uWm5jJrv8ublm8Ex+0l1qarfhsvy9/JoyZ0jlMbwlXBxp06zal1RqmiASSKVVzZ5EwNQiOPMUsqtVpsxpl7/wCzfTGadIa4Dl+CPqBNUV6yPeE9V7D/AExatsRk0qCmAAAQ8VI+bN567rxu1nMIa4noGuJ9AAvR7jjCy+A+GNJ7aoYG5TScIeAJfmI9eqU1dDi1Wfkr2F4pUp1+0Y4h0mT1B3lPftPujUbZuyOZ3ap1GhnstlSKd4A6fzTjifid14KAc0A0mvEiRmzZNY/yqmvUmXJp0xO16s/C+Ci5a4l4blncxsB+aqYcjLa+qMBDHEA7xzVO2sDizeItyvLehUFMqOs8nUrdFMTdsfcN0GPqhr9unVN+MLKhTIFEzprpGvNVulI1C3Vqk7klS4vdZr0KKiHrNlFVWoZ64vI9552u6lQC9MqDG9mwuaCIMSdiXu/kl9cIq4oOdTpRtk221zO/NZRMIPPyB3fzH0+gU+HVYKgu2w6PALi3dBSfJMvcy84XdJ2KgVMw+unrLnRNM1jISXtZIrl8lH3dRK3nVSZSZiK7UBwBJ9NOXNCIl9JrjMqo30Vp30bv9arvJv8Aoap7diirtmofJv8ApCYW1JSKsmohMsEoZ3hvUpfWKLwx5GoPNdvj+1nd4pcOIuH20KYcHAkgHTXQ6e6pdy5O72/qOblc6QOSr109bxTSydU8LJxKtOFcNsq2zqzqgBGw5meYCqDXolmI1GtLWuIB3E7odvgyjJdgVYwSpsHDTcUA/wCQ1qQf/dNRub7pQtQyjuHB/wCZa/4mh/utSbMW8lz+0K2tWvZ8MAO738s5Z5RPPdQ/Z5edlcT2ZqEtLQGiXCeY/XNWb7R7Bj6bq2VzHMytHcMPzHcuGghJuB7etQdTrU2tqms17TTEhzWtcJJcRA2ClO4G6zEX/aNfCrcE9maZDQ0hwhxjWXD1+5VG2+ZXL7RWVX3YD2ta5zWBoDpABmMzjGsquU8FrfE/DANNQOywHNyyBPzTGyqPCJfR6daY1WGHaW7iBTLA+RlyxGbLv+C8ju9XFenWeJX39HOaLcFjaRaKhcAezAgkM56Tr66rz9mE1H0qlcAZKZAcZEy7aBuUoKrG1zjsb/Z9iPYXAd2ZqEtLYaJcJgy32+8rPtCxDtrkuNI0yGtbDhDjEnMff7kx4Aw64p1GXFJjXh4cyMzZgEF0/wAOw1hEfaThtV1anUqZG5xlAaScoBk5jGuruSLW8K/7RUeGHUBcM+JBNLXNGusHLI5iYlEcbm2+IHwginlgwCBmG+UHbSPWUz4cwsUMSZSdFUNfEhroMt0IaddJn0Uv2tgdvSIpFmj2yYGcNyEEDwzH3CG/US8IpDXq28J4Cy5a8ueG5ZidBoB9+qpyOtMQqMBDXEA7wd1TusChKnklv6eV5b0K4ouUFarOpWUKiZW7JZ8AtBVeGkwNyjuK8EFuQA4OkTIKT4ZcOaQ5pgjmpMTu3v8AnMpU932OjoS7qGvTXYdr6qepTkLi8j3nma2ZCWsibqoAynqZyDbzPJR3bFurTBayTHcA/JYr7GMbvAHcbjy/EqIFT3USAOigRLkmfI2saqbtq6Ku2b00bV0SHFi+6eglNXcogkQdKSk+Co4U3Zqkyot9BbGy8ny+gTenThsoTDaElML/ALohBol2KLqpqnHDlsahA6lVys+XK5cLgtbmHJdeg/Szr8TLYz4jwJ1CnncfGPA81QrqpJVq4p4hqVW5HbDzJVPO63jdZNdVvg7YFbsI4cpVLZ9Z9QBw2bOp8R5Kogoht3UDS0OIB3AOhTZMGlyDPGqM4d//ALLX/E0P91qBc5G8Nn/zLX/E0P8Adak+DKR7RxzUcbOqHMjvNg5xG4gxz/XRJ8DqXTKNoaDc8ioC0vBGUuB20ybDmm3H9YNtXh7mSSMgjvQCJgpFw7iziy3p2kPqsa/tGloDQ0uB1fz1hZRvabQ9n9+Bfx3Ueb+lmblOWlpmaY1neI3neUGakYwS4gftHal1ED5D+8W5Pu+9S8cYm5t+x9RjmmmKZynLOhk5SJBEzBKU3HEbXYh8WGvy5i4DM1r4y5fmAIHstEsf6H0i64TWvDYVQ5g7LsXim+Wh0AQBHMROwCpli6LG5GYD9pS0zUwTBOwIzH0IVzw/GLoYe6bcmmKTmtqAgENiAS3cgdYXnIxLLRrUYd+0cx0hwDRkJOrY136hKPY+LL9wZiVVtCg2i0PcX1QW5mTl7pkgatHiSieNar3VbUVGhsn5Q8HXMOfLzSTgO/rHsqVAEvYahdmy9nkflmNARsOabfaFegVLftAWubq7QFsEjVvXYqa9YL3J0iK8qPbjDTTbmcS0QXZpBZDu9y0nyhJ/teq1HVaHaUwyO1DYdMt/Zfr1RVC+7fFmvtXgyRDizKIDO/LekB3mhfth7TtLcVcs/tspb/D+ygQdRBn3R2iNThfsUIK1cI4BSuWvL6gYWzE7aRp5mfuVTaUVb3L2zlcRO8GJ81p+xMGlyd39ENe5vQoQOgqSo8nUqIphJ5wWfhq27Z4YDHNOeJMCdQHe6Kp4FiDqNQOb9+yul7iTrinLvxKlt2n0dOm9yPPS+HeqaW2oSm/blf6o/DKq5Nf3nm6nvaB8QooKvUGVo5wFYcSt9JVerU/osTN2ngEeuCFNVaoiEmZy5O6DtUe16Wt3RjXIBAjzqumqIFSsQI7aFK1q5ptRVGlJCC0WXA7buZjyCVYvXkkBWXEQKFu1v7zhMfRVV1InUps0lhUAMp6jzV+tKOS3HV2yqdpaFz2Dq4D3Kt2N3gp1W0hqKcB397murQ4o7PDwmIMUwqq0do9pAP6CRPZCu3E/E3xLAzLEADaBA1hVB9MnkulW1kvUQMFcMG4dpVLZ9Z9QAjZs6nxjoFVm23VG06zw0taXQdwJhDTCCrkVVW6ovh5h+LtgDB+Iowen7Vuq6fQcf3fdaZbOBBBAIII8wZCGjNwdl8+1Nj2VGB1TPLZA0BbrGwSf7P33PxH/AI2UuynNmnLkkTmjXfLskN4+rUM1HknqZJ+qIwO+ubepnt3AOiNWyCN4InbQJKNRo0yHcfm4+Jd8SGh8CMvy5NYy+G+/OVWqJ1TbG7m4uKpqV3AvMD5YAA2AE7IKnZH+Ie3800sE7XfB6NaYnfjDYFAGmKZaKn7wpxBIbOojn6rzOturlR4gxAW3YB1PssmQE0++GREA5+ngqq+xP8Q9v5pRXI3F/BZfs8ua7bgCg0OcWmQdsukz4bKT7R7mua4FdoaQ0ZQ3VuWTqD5ykmCXNxbVRUoOGeI1bIIO4InbQLXEF9c3NTPcEZoAADYAAnQCTzJ90V6rHn4JODqD6l1TbTqdm4kw/pAJPnoDojvtStKtO5pirW7YmmSDABAmIyjQagqvUKb2kFroI2ImQfDVdXjatR2ao8ud1dmJ9zqhp2S06oWtCt3CGBUrlj87wwtmJ20A08zP3KufDO6T6oihXeyYzNneOfmimKCp5IcQo5XlvQodoU9QZjJK5bSKoGrYVhti6o4NYJKteEWz2Hs6gglIMCvDRqB8E8iPBWLGOIzXqNqRBbA2iQFMr4N9PBUeILfLVIQdo/KVauMLQOdSqt+WozN67FIRari1syODyF/kZYKDO0pHqAqneUYcRCtHDtcNfkdsdEDxNadnWIjxWZnLKsrb6ahcEZUahagUmTISpQ5ROWgUEkbHKemVGy3d0+gRVK1PMge5VLTm+ilpyfRNbhWfhrB3VarNDlDgXnkGjUk+gKRW1sBuVdOGuIDbMexrQc45+y1Xjz7OnT8eTIbhrrq40EScrAeQ2H3IzEeDbhhytZn03BEfel1O+yvzt0MyCOqmv8XqVTmc4k7Tt9Fp+nfZ0/pvllg4W4QIqCpWhuQhzRoZI1E+EoC/4YdmcS6SXEknckndKaeL1W7VHepJWxj9TmZVx05R4NtPTUOyd3DsblROwhoWrvHdN0ufjE81olLs0big11o0bALXwwglLHYgTzXJvzESroW+JNVhRUz3h5j6od1dcCtqmZuSGeIGTy9FBaE5tDCFfdSuO3QDmrsMuic2plcMehXVtVvttUC3Dpj/ANn8/LZAOehm1xC47VA3MYWh13havd95QIqrHV0BvVUF2phwjfxUt8SXAmPRLxX1ldurygFJVROxqNtrXMlzKyJpXpGxQyotBPwQ5wpqeFNPJBi9Xf8ASkc0slXEaUsDHWEXS4fnmEko41rup6+OOB7pUNSHcei5jhcPtA0v7zHOLNv3olvlIn1VXq8KXIOlPMPAj8UEOIKxEZyPJR/0g9x7z3HzJj2WT0G8tnPLRU3bY5vuFKtKkKzoHhzB5KHGLN1xQp1mtJcwGnUgdILXeRE+y5q45UewU3Olo2CLs+JTSoPohrSHc/NQ9BkPxvhlDuqcJdVTy+ptJ5hKq1meTvuWb0Jro5J6E0L3lcEqepbO6T5H81AaTv4Ss3CS6MXGS6GYXbSoguwV6R3JhVNyJp1EA16kFRM0UqGArrDcoHOtZ0y94S6uVE6qoXPXBckS5HdSpKhLljiuSkZtm+0K12pXBWkrJtkvarfaKArUosW5hHaLM6glYHIse4IzrM6hDlkose4mzrM6hlZKLDcTZ1rOopWsyLFuJu0WxVQ+ZalFhuCu3WfEIWVsIsNzJzXK1nKjWwiwtkzHKdtRCgroFOy0wttRSiqgw9dB6qy1INFdaNdCZ1hege8kqVFA9y056jJSIbMJXErZK5SM2zQXSxYkhHQK2HLaxMpG5WpW1iBmpXMrFiAOSVyVixJkmloraxIk5WLFiTA0SsCxYkBtaJW1iYGLUraxAjFixYgZqVtYsSEYsCxYqGdBbWliBnQK6BWLExnQK2CtrEykalZmW1iAOZXBKxYgTNErlYsSJP/Z");
    S1p2BG.setSize(550,480);
    S1p2BG.setPosition(-80,0);
    add(S1p2BG);
*/    
    Grass = new Rectangle(400,100);
    Grass.setPosition(0,430);
    Grass.setColor(Color.grey);
    add(Grass);
    
    bob = new Circle(30);
    bob.setPosition(50,400);
    bob.setColor(Color.RED);
    add(bob);
    
    var TSr = new Rectangle(360,100);
    TSr.setPosition(20,10);
    TSr.setColor(uk);
    add(TSr);
    
    var TStext = new Text("PROCEED TO THE RIGHT!!!", "20pt Impact");
    TStext.setPosition(70,40);
    TStext.setColor(Color.BLACK);
    add(TStext);
    
    var TStext1 = new Text(" Avoid the music instruments until the ", "15pt Impact");
    TStext1.setPosition(40,60);
    TStext1.setColor(Color.BLACK);
    add(TStext1);
    
    var TStext2 = new Text("timer runs out with the keys:", "15pt Impact");
    TStext2.setPosition(80,80);
    TStext2.setColor(Color.BLACK);
    add(TStext2);
    
    var TStext3 = new Text(" SPACEBAR, 'A' and 'D'.", "15pt Impact");
    TStext3.setPosition(120,100);
    TStext3.setColor(Color.BLACK);
    add(TStext3);
    
    setTimer(check,1);
    setTimer(move,10);
}

function stageOnePt2()
{
    stopTimer(check);
    stopTimer(move);
    removeAll();
    
    stage = 2;
/*    
    S1p2BG = new WebImage("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUWFRcVFRYXFRAVFRcVFRUXFhUVFRUYHSggGBolGxUWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0fHx0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEIQAAEDAgQDBgMFBAoCAwEAAAEAAhEDBAUSITEGQVETImFxgZEUMrEHocHR8CNCUuEVM2JydIKys8LxJHNDVIM0/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKhEAAgIBBAEDAwQDAAAAAAAAAAECESEDEjFBBCIyUUJh0RRxwfAjgZH/2gAMAwEAAhEDEQA/APLqTk1taAiSJ08RHiISxlJOrFp2Xaz0oBFGgXHqdANiegCkfZjSeYOg5HlMou1pf9K34Twv2jQ5066wOnio3G1pFAqUyBp3YEaSJHOfdB1KXUgaSOfpLdvVW7iPCTQMToQYOgPiDESqy6kCYEk6R+I/RVxYVYEBBEDlrOV4nXUAjRcupETygwRMGfI+SaC1J5AA6xvtMAHU9eaifbb7nT7+fWQqFtIbfKPHTn3TJH4FHMnKOk6EjTkN0K1pHQd07TruNYnUqazGo59eX05eiljCralqZ+7Uf9I91MEaASOm64YQANuvj92vJSCT57mdf5rJiZlKTznzmdPFMKNHw99VBRcAeQn1j3RtOsB+vwUsh2Stt+e3lsiqDBz18vzQjq8gLqnWgx/JCBJjei+NtPr7o6jcQkLrmN91nx8bnXxVGiRaqWIfNr+7+IQt1iGb1SS1vZz/AN3T3C4ZVnQmExqKGBuSOcjpuEFc1WOHe0/XRBVrnLv6JfeX8DX3Efeih0c4lTbrrPTqPMbwq7Wplp5H2IM/r0Rd3dddRPzCeXT8ihPiDz7zTqdemmvQrSKoboDr2+kiSNJ02J5fzULmZh/aHn3vDzH68WGYbjUc5H3FRvpj5mzpr4g6a6cp5qiGhfSMSDo076AnTYj1/FRPplpIO40KY1KGYZh6j219SuHUJbtq3w3b6Dlrr0joghxB6wmHADvCdJgHYjX3/wAwRNu2WEdHA7iNZB05n5VlGgS0t6d4f8hv01/yhFWVLcdWke3eH3gIGokVpT77P7w5TzHLmo6VAymVnZuLm6fvD6qWjaRAUtl7QOpa/KOjes/NLvTQj2XTLUtaT17o0BGvzb7GI902yBz4GsmB9ArXS4QDqYkmQOQETuf14KdwnS5POadvrqY6lQ1zrIEDkNdB01TfGrR1F7qZP5EcknquCYmYLggEAwDofHmuJChfUBUBeU6JbJGgSm9oQEjDkfTrKLsmMh7TuQvTcGxRtO3Y+o5rHOEBriBIHNUDhTBTUeKlT5RrH4lRcUYt2lwQPlYA0DomlbNKTwF8Z4yys4BhkNmT1J6eCrNN5n1lQPryuqb1aVFHo/BOF29SmXVAJ8Y090g4qsG0qxYAQNwDoIPQ9EptMRez5XETvBIVjwHEW12fD3Aztk5HHUt8J6IUey4xt2VB34HlP10XAqHbfQAaz7fkrRjvCrqfebq3luqrWpuaYMq1BNYYnHsKp3PX+UDxPl0RHxg/U+2uiVZz0UT62uoPrr7/AJqXpslj+ndjrp+KkN0B+v19FXqdwOs/U+HmpxcfraQo2CVFltK893kjgQNfBVm0vMvnt+RRVTEc3sfuUOLBoY3NxKCfez6+n10+9AOuCZ8tPVRUyZ+78z4q1EtYLFhlxM+R9dRyUVzelpj9eUFB2dTKDHT8unNBXVWTP68fX0SSyAddXROv8wOWoS51yY+vMb/vdFwK06fr0/7Q9R2s/rfkd/qtEhNndR3PafVp/JcARtoTy3afXn66KLtP1oPfkd+a6bU08+X8vxCCbOxvpoeh5z0/JS21MnVuh5t/IHceC4YAdyI8Tp6Hki7e5pN3dPkCT7jQpZ6AJtqXMDzH63C6rWwkOaP++iifjAHy0yT1JA+4So/6QqOmMrZ6CfrKFpzY0mwltoGnMNtx+IP0W7emxrxqIBBHWNwurDC6tYgS4+ZMewVmFjRsGdoWB1X92dYKbjWG8mih8lhw/BKDaALh3oDtdD1Bg6qlX4DXEt5HRQYbjFWo9+ao4yCTJMTI5LL16ymtroyap8gVvc5Hh3Qg/evT8N4goPYB2rBm0gmHAnlHmvH69XVd0rggSDsZ9le2xtKQy45qu+JeHAtjQeIHNU+sSvT8TtW31q2oP6xrRrz2Xmt7buY4tcNQiLwZz4AjUK7UVRq5zJNmNmMqFWLhzC3VHAnZLcIsC4gkL0fBLQU2yeiwTJ02GX1cW9DKN4Xmzapc5zp3Mqw8W4hIIlVaiYG4HejXyWkJZNlPJEaikp1kKTqtgq1IW4ZUq6dYNeZCHdCqxTcmuHyduq308o6NKR6hU4jp1mAEaxBEQq5ieGtdq1J5czUyEyscQnQpbNuUdEYpYQkucPITKz4W7W3dWzgFukE6mfDomV1Sa4SErfWqUw4NcQDoQqttYBwRUKzIKh1GxI9SmN1Q1QjKJL2t6uaPcqmjjlHJZb3gqvTsheGsILWvLJMhr4y68z3hoqvSc8mM7vcr0jH+H+zwxjxdVHjuEUy79kS46hjeo1P+Uqh0LVzXjM0iYOoIkdfJTFJhtt4LtdcI2rcO+JFzV7XIHTnGUvjWnljxjqvO316jdqjvcr2XEcMshh+ZuXN2YLXT3y+NiJ6yvG7xupUpJphNYtfI44QyVrltO5uKlOm4GSHRLv3QSdh4+CI47saFvWbTta76gyy+Xh8OnTvAcxy/NB8GstzcsF0YpazyGaO7mP8ADKP+0OjZtrtFmWluXv5CCzNOkRpMbx4c5RWSfpKxSqOJ+Z3uvQMR4KoMw4XYuqhqZGu+ZuQl0dwCJnWN+S8+ot1XpxwKydhoex5dXyAwHEu7WBLOznaZG22qKHBWeb0mOcQMx9054p4arWQo9q4Htg4wHEkZMsh2m/f5Sh8Ow6o+rkYxznbwASdNzAVn+1K2exljnrGqSyrBIED+p2O5359E3SBxpFFYFb+E+Hvig45g3KCdTG0T9QqpSZKsGEXFRgLWOIDt1dOsGmkjdSwh5b0Kb4ZhY3K6saM6lGXN0GCAplJ8I6lFIa2l9Tt9/UpBxXxELh2ggDQcksubovMBBXVu4CSIRHTSdsmSzaN4LXyvcf7P/IIrELoQkls+HH9c13dv03WOovWcr5sHrV9VLb1CQf1yS+o5SW1TbUan8E0yVLJe+CMRgZCdNl3xXgjXS5qqWCXmSpuvRKFcVacFYN5JcrPKrm3LTBQxpq34/h2p0VYdTIOyzbZzzeS4YHYgQnd/c5WQFFbNDGpPjF3unwVwivY1cZnIaiTDYBOp6acvRQXFSXFTUbgNDZ2I1iepSi8kacs5BKm58z9VIxqiuBD3Do4/VSUyjcxKWSdrE5wCq1rgXbSkzSmNiNF2aDuLO3x3ZeeK8Rt6lEdk1oMDQbzzPhoqdbV4K6rTCGC2jGlR0t1wWKhd6J5bYO2rQdUzAEcufsqS2toiqGK1GggOIB3SlF9F7iC9palBWbB21L/2M/1BFVq8qKy/rqf/ALGf6gqfBlKmz1DiSjbjD2Qf4cgk/Mfnke6R8RZXXlpEkBlEaupu0zaCfl9084idQNgwNb3jly6agiM5J9/cJFiTYvbWR+5R07IMnX+E6O8/yWMPyEf5fJe2C1ccgFMvk6FrC7NrmJ5Hn4LyC0smude5mtOWhUIltM5SHCHNlwynxbJ8F7A25tWvgBgqZiIhodm1mZ06815RYQ918QQB2FSJ7HXvD+L/AI69EafZlHj8kvANC0FJ9S6Y1zW1aYkta6JDo1mcs7iDsEx+0iztTQo1bZlMNc9wLmNa3NoNyNTHkl/2f/Dhj/icuTtWaHsd8roJB75bPTTqmn2k3FsaNFtuWZQ9/wAnZxMCdB3vwVfUC/vwV7ie1aw2kNaJtqZMNpiTrJOUmT4nVeu2Rtc7YFMVoGwph/ydW6bdF5PxI9hNpl/+tTn+q6n+D/lr1XqzPhi5rcjRW7sfs255yzJyiIjxhTPhBNY/BUOG6TBidaetSDmy89dRv5IH7YWMiyDIygV4j/8AFG8J5W4hVBj/AOTdvif3RshPtac1ws8ggRX0iOdJH1oeqvUih2tNXjhXA21muJcGxO+m0fmFT7UQm9viL2AhriAd4Wsk2sGsFSGV3VDHFo5JZeXUoavczuhO0lCjRbmNuHqzG1gXxHjtKb8X4hQqkCk0AARpr6qrALDKHHNki2poVHXrKWuJQVQLn1XUjk1HTI3uU1AGBAJ1300QrkVTrBrG7y6faSFip5MVJWcsqw+f7R+qvGAYhoNVQbk94+adYJdRCzvJlu9RecSoh4lVarZanRWWzuMzVBUttSmaNWava8CFVcVuN00v7hVnEKsqWZzYGSmVs0ENBAJjSTr129krlFG3cS0t6DntsnENN19yK+H7R/nPvqt0lvEh+2d6f6QuqLVLI7J6YTzAGNLgHbSk9NqYWX4rt8b2s7vFLpxZh1uykHUjJ018eYVJej6tRxGpJQFwFvFUjrkcZlZsL4ebVtnVi8AjlOpnoOiqkqelf1GtLWvIB0ICbvohSoHe/VSWVaKjD0e0+zghXlYKn1H1QZ7snrmP49TfYhopPEhoBLYYCObXc9j7rzqrfPe8F7i6IAJJMAbATyTnFeOjWtBa9iGkBoL9dQyIhsaHQc+qqdKoSdASegDifYBRBUilJLg9VxPEbE2GVuXPkAAy98P0kk+68kuX6leg4nxHh5sOwFNza+QDKaVQOa8RLi8iOp31XnNR0n+RRHCIlJUWXgM24uWm5jJrv8ublm8Ex+0l1qarfhsvy9/JoyZ0jlMbwlXBxp06zal1RqmiASSKVVzZ5EwNQiOPMUsqtVpsxpl7/wCzfTGadIa4Dl+CPqBNUV6yPeE9V7D/AExatsRk0qCmAAAQ8VI+bN567rxu1nMIa4noGuJ9AAvR7jjCy+A+GNJ7aoYG5TScIeAJfmI9eqU1dDi1Wfkr2F4pUp1+0Y4h0mT1B3lPftPujUbZuyOZ3ap1GhnstlSKd4A6fzTjifid14KAc0A0mvEiRmzZNY/yqmvUmXJp0xO16s/C+Ci5a4l4blncxsB+aqYcjLa+qMBDHEA7xzVO2sDizeItyvLehUFMqOs8nUrdFMTdsfcN0GPqhr9unVN+MLKhTIFEzprpGvNVulI1C3Vqk7klS4vdZr0KKiHrNlFVWoZ64vI9552u6lQC9MqDG9mwuaCIMSdiXu/kl9cIq4oOdTpRtk221zO/NZRMIPPyB3fzH0+gU+HVYKgu2w6PALi3dBSfJMvcy84XdJ2KgVMw+unrLnRNM1jISXtZIrl8lH3dRK3nVSZSZiK7UBwBJ9NOXNCIl9JrjMqo30Vp30bv9arvJv8Aoap7diirtmofJv8ApCYW1JSKsmohMsEoZ3hvUpfWKLwx5GoPNdvj+1nd4pcOIuH20KYcHAkgHTXQ6e6pdy5O72/qOblc6QOSr109bxTSydU8LJxKtOFcNsq2zqzqgBGw5meYCqDXolmI1GtLWuIB3E7odvgyjJdgVYwSpsHDTcUA/wCQ1qQf/dNRub7pQtQyjuHB/wCZa/4mh/utSbMW8lz+0K2tWvZ8MAO738s5Z5RPPdQ/Z5edlcT2ZqEtLQGiXCeY/XNWb7R7Bj6bq2VzHMytHcMPzHcuGghJuB7etQdTrU2tqms17TTEhzWtcJJcRA2ClO4G6zEX/aNfCrcE9maZDQ0hwhxjWXD1+5VG2+ZXL7RWVX3YD2ta5zWBoDpABmMzjGsquU8FrfE/DANNQOywHNyyBPzTGyqPCJfR6daY1WGHaW7iBTLA+RlyxGbLv+C8ju9XFenWeJX39HOaLcFjaRaKhcAezAgkM56Tr66rz9mE1H0qlcAZKZAcZEy7aBuUoKrG1zjsb/Z9iPYXAd2ZqEtLYaJcJgy32+8rPtCxDtrkuNI0yGtbDhDjEnMff7kx4Aw64p1GXFJjXh4cyMzZgEF0/wAOw1hEfaThtV1anUqZG5xlAaScoBk5jGuruSLW8K/7RUeGHUBcM+JBNLXNGusHLI5iYlEcbm2+IHwginlgwCBmG+UHbSPWUz4cwsUMSZSdFUNfEhroMt0IaddJn0Uv2tgdvSIpFmj2yYGcNyEEDwzH3CG/US8IpDXq28J4Cy5a8ueG5ZidBoB9+qpyOtMQqMBDXEA7wd1TusChKnklv6eV5b0K4ouUFarOpWUKiZW7JZ8AtBVeGkwNyjuK8EFuQA4OkTIKT4ZcOaQ5pgjmpMTu3v8AnMpU932OjoS7qGvTXYdr6qepTkLi8j3nma2ZCWsibqoAynqZyDbzPJR3bFurTBayTHcA/JYr7GMbvAHcbjy/EqIFT3USAOigRLkmfI2saqbtq6Ku2b00bV0SHFi+6eglNXcogkQdKSk+Co4U3Zqkyot9BbGy8ny+gTenThsoTDaElML/ALohBol2KLqpqnHDlsahA6lVys+XK5cLgtbmHJdeg/Szr8TLYz4jwJ1CnncfGPA81QrqpJVq4p4hqVW5HbDzJVPO63jdZNdVvg7YFbsI4cpVLZ9Z9QBw2bOp8R5Kogoht3UDS0OIB3AOhTZMGlyDPGqM4d//ALLX/E0P91qBc5G8Nn/zLX/E0P8Adak+DKR7RxzUcbOqHMjvNg5xG4gxz/XRJ8DqXTKNoaDc8ioC0vBGUuB20ybDmm3H9YNtXh7mSSMgjvQCJgpFw7iziy3p2kPqsa/tGloDQ0uB1fz1hZRvabQ9n9+Bfx3Ueb+lmblOWlpmaY1neI3neUGakYwS4gftHal1ED5D+8W5Pu+9S8cYm5t+x9RjmmmKZynLOhk5SJBEzBKU3HEbXYh8WGvy5i4DM1r4y5fmAIHstEsf6H0i64TWvDYVQ5g7LsXim+Wh0AQBHMROwCpli6LG5GYD9pS0zUwTBOwIzH0IVzw/GLoYe6bcmmKTmtqAgENiAS3cgdYXnIxLLRrUYd+0cx0hwDRkJOrY136hKPY+LL9wZiVVtCg2i0PcX1QW5mTl7pkgatHiSieNar3VbUVGhsn5Q8HXMOfLzSTgO/rHsqVAEvYahdmy9nkflmNARsOabfaFegVLftAWubq7QFsEjVvXYqa9YL3J0iK8qPbjDTTbmcS0QXZpBZDu9y0nyhJ/teq1HVaHaUwyO1DYdMt/Zfr1RVC+7fFmvtXgyRDizKIDO/LekB3mhfth7TtLcVcs/tspb/D+ygQdRBn3R2iNThfsUIK1cI4BSuWvL6gYWzE7aRp5mfuVTaUVb3L2zlcRO8GJ81p+xMGlyd39ENe5vQoQOgqSo8nUqIphJ5wWfhq27Z4YDHNOeJMCdQHe6Kp4FiDqNQOb9+yul7iTrinLvxKlt2n0dOm9yPPS+HeqaW2oSm/blf6o/DKq5Nf3nm6nvaB8QooKvUGVo5wFYcSt9JVerU/osTN2ngEeuCFNVaoiEmZy5O6DtUe16Wt3RjXIBAjzqumqIFSsQI7aFK1q5ptRVGlJCC0WXA7buZjyCVYvXkkBWXEQKFu1v7zhMfRVV1InUps0lhUAMp6jzV+tKOS3HV2yqdpaFz2Dq4D3Kt2N3gp1W0hqKcB397murQ4o7PDwmIMUwqq0do9pAP6CRPZCu3E/E3xLAzLEADaBA1hVB9MnkulW1kvUQMFcMG4dpVLZ9Z9QAjZs6nxjoFVm23VG06zw0taXQdwJhDTCCrkVVW6ovh5h+LtgDB+Iowen7Vuq6fQcf3fdaZbOBBBAIII8wZCGjNwdl8+1Nj2VGB1TPLZA0BbrGwSf7P33PxH/AI2UuynNmnLkkTmjXfLskN4+rUM1HknqZJ+qIwO+ubepnt3AOiNWyCN4InbQJKNRo0yHcfm4+Jd8SGh8CMvy5NYy+G+/OVWqJ1TbG7m4uKpqV3AvMD5YAA2AE7IKnZH+Ie3800sE7XfB6NaYnfjDYFAGmKZaKn7wpxBIbOojn6rzOturlR4gxAW3YB1PssmQE0++GREA5+ngqq+xP8Q9v5pRXI3F/BZfs8ua7bgCg0OcWmQdsukz4bKT7R7mua4FdoaQ0ZQ3VuWTqD5ykmCXNxbVRUoOGeI1bIIO4InbQLXEF9c3NTPcEZoAADYAAnQCTzJ90V6rHn4JODqD6l1TbTqdm4kw/pAJPnoDojvtStKtO5pirW7YmmSDABAmIyjQagqvUKb2kFroI2ImQfDVdXjatR2ao8ud1dmJ9zqhp2S06oWtCt3CGBUrlj87wwtmJ20A08zP3KufDO6T6oihXeyYzNneOfmimKCp5IcQo5XlvQodoU9QZjJK5bSKoGrYVhti6o4NYJKteEWz2Hs6gglIMCvDRqB8E8iPBWLGOIzXqNqRBbA2iQFMr4N9PBUeILfLVIQdo/KVauMLQOdSqt+WozN67FIRari1syODyF/kZYKDO0pHqAqneUYcRCtHDtcNfkdsdEDxNadnWIjxWZnLKsrb6ahcEZUahagUmTISpQ5ROWgUEkbHKemVGy3d0+gRVK1PMge5VLTm+ilpyfRNbhWfhrB3VarNDlDgXnkGjUk+gKRW1sBuVdOGuIDbMexrQc45+y1Xjz7OnT8eTIbhrrq40EScrAeQ2H3IzEeDbhhytZn03BEfel1O+yvzt0MyCOqmv8XqVTmc4k7Tt9Fp+nfZ0/pvllg4W4QIqCpWhuQhzRoZI1E+EoC/4YdmcS6SXEknckndKaeL1W7VHepJWxj9TmZVx05R4NtPTUOyd3DsblROwhoWrvHdN0ufjE81olLs0big11o0bALXwwglLHYgTzXJvzESroW+JNVhRUz3h5j6od1dcCtqmZuSGeIGTy9FBaE5tDCFfdSuO3QDmrsMuic2plcMehXVtVvttUC3Dpj/ANn8/LZAOehm1xC47VA3MYWh13havd95QIqrHV0BvVUF2phwjfxUt8SXAmPRLxX1ldurygFJVROxqNtrXMlzKyJpXpGxQyotBPwQ5wpqeFNPJBi9Xf8ASkc0slXEaUsDHWEXS4fnmEko41rup6+OOB7pUNSHcei5jhcPtA0v7zHOLNv3olvlIn1VXq8KXIOlPMPAj8UEOIKxEZyPJR/0g9x7z3HzJj2WT0G8tnPLRU3bY5vuFKtKkKzoHhzB5KHGLN1xQp1mtJcwGnUgdILXeRE+y5q45UewU3Olo2CLs+JTSoPohrSHc/NQ9BkPxvhlDuqcJdVTy+ptJ5hKq1meTvuWb0Jro5J6E0L3lcEqepbO6T5H81AaTv4Ss3CS6MXGS6GYXbSoguwV6R3JhVNyJp1EA16kFRM0UqGArrDcoHOtZ0y94S6uVE6qoXPXBckS5HdSpKhLljiuSkZtm+0K12pXBWkrJtkvarfaKArUosW5hHaLM6glYHIse4IzrM6hDlkose4mzrM6hlZKLDcTZ1rOopWsyLFuJu0WxVQ+ZalFhuCu3WfEIWVsIsNzJzXK1nKjWwiwtkzHKdtRCgroFOy0wttRSiqgw9dB6qy1INFdaNdCZ1hege8kqVFA9y056jJSIbMJXErZK5SM2zQXSxYkhHQK2HLaxMpG5WpW1iBmpXMrFiAOSVyVixJkmloraxIk5WLFiTA0SsCxYkBtaJW1iYGLUraxAjFixYgZqVtYsSEYsCxYqGdBbWliBnQK6BWLExnQK2CtrEykalZmW1iAOZXBKxYgTNErlYsSJP/Z");
    S1p2BG.setSize(550,480);
    S1p2BG.setPosition(-80,0);
    add(S1p2BG);
*/    
    Grass = new Rectangle(400,100);
    Grass.setPosition(0,430);
    Grass.setColor(Color.grey);
    add(Grass);
    
    bob = new Circle(30);
    bob.setPosition(50,400);
    bob.setColor(Color.RED);
    add(bob);
    
    tuba = new WebImage("https://pngimage.net/wp-content/uploads/2018/06/tuba-banda-png.png");
    tuba.setPosition(320,320);
    tuba.setSize(75,100);
    add(tuba);
    
    guitar = new WebImage("http://pluspng.com/img-png/guitar-hd-png-bass-guitar-png-hd-png-image-1280.png");
    guitar.setPosition(130,200);
    guitar.setSize(100,75);
    add(guitar);
    
    BassD = new WebImage("https://megamusic.blob.core.windows.net/images/0010955_kick-drumsbass-drums_450.png");
    BassD.setPosition(200,60);
    BassD.setSize(150,100);
    add(BassD);
    
    text = new Text(timer,"30pt Impact");
    text.setPosition(350,470);
    text.setColor(Color.BLACK);
    add(text);

    
    setTimer(move2,1);
    setTimer(countdown,1000);
    setTimer(check,1);
}

function TS1()
{
    stopTimer(check);
    stopTimer(move);
    stopTimer(countdown);
    removeAll();
    
    stage = 5;
    
    S1p2BG = new WebImage("data:image/jpeg;base64,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");
    S1p2BG.setSize(550,480);
    S1p2BG.setPosition(-80,0);
    add(S1p2BG);
    
    Grass = new Rectangle(400,100);
    Grass.setPosition(0,430);
    Grass.setColor(Color.grey);
    add(Grass);
    
    bob = new Circle(30);
    bob.setPosition(50,400);
    bob.setColor(Color.RED);
    add(bob);
    
    var TS1r = new Rectangle(360,120);
    TS1r.setPosition(20,10);
    TS1r.setColor(uk);
    add(TS1r);
    
    var TS1text = new Text("PROCEED TO THE RIGHT!!!", "20pt Impact");
    TS1text.setPosition(70,40);
    TS1text.setColor(Color.BLACK);
    add(TS1text);
    
    var TS1text1 = new Text("You must avoid the falling notes by using ", "15pt Impact");
    TS1text1.setPosition(30,60);
    TS1text1.setColor(Color.BLACK);
    add(TS1text1);
    
    var TS1text2 = new Text("  'A and D' OR 'Q and E' until the timer runs", "15pt Impact");
    TS1text2.setPosition(30,80);
    TS1text2.setColor(Color.BLACK);
    add(TS1text2);
    
    var TS1text3 = new Text("    out. If Bob is touched by a note, he will ", "15pt Impact");
    TS1text3.setPosition(30,100);
    TS1text3.setColor(Color.BLACK);
    add(TS1text3);
    
    var TS1text4 = new Text("loose.", "15pt Impact");
    TS1text4.setPosition(180,120);
    TS1text4.setColor(Color.BLACK);
    add(TS1text4);
    
    setTimer(check,1);
    setTimer(move,10);
}

function stageTwo()
{
    stopTimer(check);
    stopTimer(move2);
    removeAll();
    
    stage = 3;
    
    S1p2BG = new WebImage("data:image/jpeg;base64,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");
    S1p2BG.setSize(550,480);
    S1p2BG.setPosition(-80,0);
    add(S1p2BG);
    
    Grass = new Rectangle(400,100);
    Grass.setPosition(0,430);
    Grass.setColor(Color.grey);
    add(Grass);
    
    bob = new Circle(30);
    bob.setPosition(200,400);
    bob.setColor(Color.RED);
    add(bob);
    
    MNE1 = new WebImage("http://pluspng.com/img-png/png-hd-music-notes-music-notes-clip-art-png-clipart-panda-free-clipart-images-free-png-hd-of-music-608.png");
    MNE1.setPosition(30,-120);
    MNE1.setSize(90,90);
    add(MNE1);
    
    MNE2 = new WebImage("http://pluspng.com/img-png/png-hd-music-notes-music-notes-clip-art-png-clipart-panda-free-clipart-images-free-png-hd-of-music-608.png");
    MNE2.setPosition(150,-90);
    MNE2.setSize(60,60);
    add(MNE2);
    
    MNE3 = new WebImage("http://pluspng.com/img-png/png-hd-music-notes-music-notes-clip-art-png-clipart-panda-free-clipart-images-free-png-hd-of-music-608.png");
    MNE3.setPosition(240,-60);
    MNE3.setSize(60,60);
    add(MNE3);
    
    MNE4 = new WebImage("http://pluspng.com/img-png/png-hd-music-notes-music-notes-clip-art-png-clipart-panda-free-clipart-images-free-png-hd-of-music-608.png");
    MNE4.setPosition(300,-120);
    MNE4.setSize(50,50);
    add(MNE4);
    
    text = new Text(timer,"30pt Impact");
    text.setPosition(350,470);
    text.setColor(Color.BLACK);
    add(text);
    
    setTimer(check,1);
    setTimer(move3,1);
    setTimer(countdown,1000);
}

function TS2()
{
    stopTimer(check);
    stopTimer(move3);
    stopTimer(countdown);
    removeAll();
    
    stage = 6;
    
    S1p2BG = new WebImage("data:image/jpeg;base64,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");
    S1p2BG.setSize(550,480);
    S1p2BG.setPosition(-80,0);
    add(S1p2BG);
    
    Grass = new Rectangle(400,100);
    Grass.setPosition(0,430);
    Grass.setColor(Color.grey);
    add(Grass);
    
    bob = new Circle(30);
    bob.setPosition(50,400);
    bob.setColor(Color.RED);
    add(bob);
    
    var TS2r = new Rectangle(360,180);
    TS2r.setPosition(20,10);
    TS2r.setColor(uk);
    add(TS2r);
    
    var TS2text = new Text("PROCEED TO THE RIGHT!!!", "20pt Impact");
    TS2text.setPosition(70,40);
    TS2text.setColor(Color.BLACK);
    add(TS2text);
    
    var TS2text1 = new Text("BOSS STAGE!!!", "15pt Impact");
    TS2text1.setPosition(150,60);
    TS2text1.setColor(Color.BLACK);
    add(TS2text1);
    
    var TS2text2 = new Text("Avoid the falling music notes, and destroy ", "15pt Impact");
    TS2text2.setPosition(30,80);
    TS2text2.setColor(Color.BLACK);
    add(TS2text2);
    
    var TS2text3 = new Text("the three instruments with Bob's attack by ", "15pt Impact");
    TS2text3.setPosition(30,100);
    TS2text3.setColor(Color.BLACK);
    add(TS2text3);
    
    var TS2text4 = new Text("pressing 'R'. Once the three instruments ", "15pt Impact");
    TS2text4.setPosition(40,120);
    TS2text4.setColor(Color.BLACK);
    add(TS2text4);
    
    var TS2text5 = new Text("are destroyed, you will have to hit the Mad ", "15pt Impact");
    TS2text5.setPosition(30,140);
    TS2text5.setColor(Color.BLACK);
    add(TS2text5);
    
    var TS2text6 = new Text("Conductor to win the game. If his attack", "15pt Impact");
    TS2text6.setPosition(40,160);
    TS2text6.setColor(Color.BLACK);
    add(TS2text6);
    
    var TS2text7 = new Text("  hits Bob, he looses.", "15pt Impact");
    TS2text7.setPosition(110,180);
    TS2text7.setColor(Color.BLACK);
    add(TS2text7);
    
    setTimer(check,1);
    setTimer(move,10);
}

function stageThree()
{
    stopTimer(countdown);
    stopTimer(check);
    stopTimer(move3);
    removeAll();
    
    stage = 4;
    
    S2BG = new WebImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTR_cBPQatnJQ5MDfCzGT1pw0nyJ2RJ8CCcHMXXAqDbKffT5-H0w");
    S2BG.setSize(550,480);
    S2BG.setPosition(-80,0);
    add(S2BG);
    
    Grass = new Rectangle(400,100);
    Grass.setPosition(0,430);
    Grass.setColor(Color.grey);
    add(Grass);
    
    bob = new Circle(30);
    bob.setPosition(200,400);
    bob.setColor(Color.RED);
    add(bob);
    
    MD = new WebImage("https://b.kisscc0.com/20180815/iaq/kisscc0-conductor-poster-computer-icons-orchestra-art-conductor-5b73fcadb1fe90.3595458415343279817291.png");
    MD.setPosition(150,0);
    MD.setSize(50,100);
    add(MD);
    
    piano = new WebImage("https://www.freepngimg.com/thumb/piano/8-2-piano-picture.png");
    piano.setPosition(25,10);
    piano.setSize(125,100);
    add(piano);
    
    guitarr = new WebImage("http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Guitar-PNG-Transparent-Image-1-1-500x611.png");
    guitarr.setPosition(175,10);
    guitarr.setSize(75,100);
    add(guitarr);
    
    DS = new WebImage("https://pngimage.net/wp-content/uploads/2018/05/drum-set-png-1.png");
    DS.setPosition(275,10);
    DS.setSize(100,100);
    add(DS);
     
    setTimer(check,1);
    setTimer(move4,1);
    setTimer(attack, 2000);
}

function attack()
{
    var pick = Randomizer.nextInt(1,3);
    
    if(pick == 1)
    {
        stopTimer(gravA);
        Attack1();
        setTimer(gravA,1);
    }
    
    
    if(pick == 2)
    {
        stopTimer(gravB);
        Attack2();
        setTimer(gravB,1);
    }
    
    if(pick == 3)
    {
        stopTimer(gravC);
        Attack3();
        setTimer(gravC,1);
    }
}

function Attack1()
{
    A1 = new WebImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Quarter_note_with_upwards_stem.svg/2000px-Quarter_note_with_upwards_stem.svg.png");
    A1.setPosition(MD.getX(), MD.getY());
    A1.setSize(25,50);
    add(A1);
}

function Attack2()
{
    A2 = new WebImage("https://pngimage.net/wp-content/uploads/2018/06/half-note-png-7.png");
    A2.setPosition(MD.getX(), MD.getY());
    A2.setSize(50,50);
    add(A2);
}

function Attack3()
{
    A3 = new WebImage("https://pngimage.net/wp-content/uploads/2018/06/whole-note-png-200x200.png");
    A3.setPosition(MD.getX(), MD.getY());
    A3.setSize(50,50);
    add(A3);
}

function gravA()
{
    var Byy  = A1.getY();
    
    if(Byy < 500)
    {
        A1.move(0, gravity*1.75);
    }
}

function gravB()
{
    var Byyy  = A2.getY();
    
    if(Byyy < 500)
    {
        A2.move(0, gravity*2.25);
    }
}

function gravC()
{
    var Byyyy  = A3.getY();
    
    if(Byyyy < 500)
    {
        A3.move(0, gravity*2.75);
    }
}

function BobAttack()
{
    stopTimer(gravBA);
    remove(BA);
    
    BA = new WebImage("https://images.vexels.com/media/users/3/143528/isolated/preview/cc4fe6d36794d677dbd7090cb2c9a9b2-eighth-note-music-by-vexels.png");
    BA.setPosition(bob.getX()-15, bob.getY()-60);
    BA.setSize(25,28);
    add(BA);
    
    setTimer(gravBA,1);
}

function gravBA()
{
    
    var Byyyyy = BA.getY();
    
    if(Byyyyy < 440)
    {
        BA.move(0,-2);
    }
}

function check()
{
    xB = bob.getX();
    yB = bob.getY();
    
    var lEye = getElementAt(bob.getX()-31, bob.getY());
    if(lEye)
    {
        if(stage == 2)
        {   
            if(lEye != null && lEye != S1p2BG)
            {
                LoseScreen();
            }
        }
        
        if(stage == 3)
        {   
            if(lEye != null && lEye != S1p2BG)
            {
                LoseScreen();
            }
        }
        
        if(stage == 4)
        {   
            if(lEye != null && lEye != S2BG && lEye != BA)
            {
                LoseScreen();
            }
        }
    }

    var rEye = getElementAt(bob.getX()+31, bob.getY());
    if(rEye)
    {
        if(stage == 2)
        {
                if(rEye != null && rEye != S1p2BG)
            {
                LoseScreen();
            }
        }
        
        if(stage == 3)
        {
                if(rEye != null && rEye != S1p2BG)
            {
                LoseScreen();
            }
        }
        
        if(stage == 4)
        {   
            if(rEye != null && rEye != S2BG && rEye != BA)
            {
                LoseScreen();
            }
        }
    }

    var fEye = getElementAt(bob.getX(), bob.getY()-31);
    if(fEye)
    {
        if(stage == 2)
        {
            if(fEye != null && fEye != S1p2BG)
            {
                LoseScreen();
            }
        }
        
        if(stage == 3)
        {
            if(fEye != null && fEye != S1p2BG)
            {
                LoseScreen();
            }
        }
        
        if(stage == 4)
        {   
            if(fEye != null && fEye != S2BG && fEye != BA)
            {
                LoseScreen();
            }
        }
    }
    
    var bEye = getElementAt(bob.getX(), bob.getY()+31);
    
    var TLeye = getElementAt(bob.getX()-28, bob.getY()-28);
    if(TLeye)
    {
            if(stage == 2)
            {
                if(TLeye != null && TLeye != S1p2BG)
                {
                    LoseScreen();
                }
            }
            
            if(stage == 3)
            {
                if(TLeye != null && TLeye != S1p2BG)
                {
                    LoseScreen();
                }
            }
            
            if(stage == 4)
            {   
                if(TLeye != null && TLeye != S2BG  && TLeye != BA)
                {
                    LoseScreen();
                }
            }
    }
        
    var TReye = getElementAt(bob.getX()+28, bob.getY()-28);
    if(TReye)
    {
            if(stage == 2)
            {
                if(TReye != null  && TReye != S1p2BG)
                {
                    LoseScreen();
                }
            }
            
            if(stage == 3)
            {
                if(TReye != null && TReye != S1p2BG)
                {
                    LoseScreen();
                }
            }
            
            if(stage == 4)
            {   
                if(TReye != null && TReye != S2BG && TReye != BA)
                {
                    LoseScreen();
                }
            }
        }

    var BLeye = getElementAt(bob.getX()-28, bob.getY()+28);
    if(BLeye)
    {
        if(stage == 2)
        {
            if(BLeye != null && BLeye != Grass && BLeye != S1p2BG)
            {
                LoseScreen();
            }
        }
        
        if(stage == 3)
        {
            if(BLeye != null && BLeye != Grass && BLeye != S1p2BG)
            {
                LoseScreen();
            }
        }
        
        if(stage == 4)
            {   
                if(BLeye != null && BLeye != S2BG && BLeye != Grass && BLeye != BA)
                {
                    LoseScreen();
                }
            }
    }
    
    var BReye = getElementAt(bob.getX()+28, bob.getY()+28);
    if(BReye)
    {
            if(stage == 2)
            {
                if(BReye != null && BReye != Grass && BReye != S1p2BG)
                {
                    LoseScreen();
                }
            }
            
            if(stage == 3)
            {
                if(BReye != null && BReye != Grass && BReye != S1p2BG)
                {
                    LoseScreen();
                }
            }
            
            if(stage == 4)
            {   
                if(BReye != null && BReye != S2BG && BReye != Grass && BReye != BA)
                {
                    LoseScreen();
                }
            }
    }
        
    ///////////////////////////////////////////////////////////////////
    
    //BOTTOM WALL
    if(yB > 400)
    {
        bob.y=400;
    }
    
    //TOP WALL
    if(yB < 380)
    {
        if(stage == 1)
        {
            bob.y=400;
        }
        
        if(stage == 3)
        {
            bob.y=400;
        }
        
        if(stage == 4)
        {
            bob.y=400;
        }
        
        if(stage == 5)
        {
            bob.y=400;
        }
        
        if(stage == 6)
        {
            bob.y=400;
        }
        
        if(stage == 7)
        {
            bob.y=400;
        }
    }
    
    if(yB < 30)
    {
            if(stage == 2)
            {
                bob.y=30;
            }
            
            if(stage == 3)
            {
                bob.y=400;
            }
            
            if(stage == 4)
            {
                bob.y=30;
            }
        }
        
    //WALL RIGHT
    if(xB > 300)
    {
        if(stage == 1)
        {
            TS();
        }
    }
    
    if(xB > 365)
    {
        if(stage == 7)
        {
            stageOnePt2();
        }
        
        if(stage == 5)
        {
            stageTwo();
        }
        
        if(stage == 6)
        {
            stageThree();
        }
    }
    
    //WALL RIGHT FOR STAGE1 PT2
    if(xB > 370)
    {
        if(stage == 2)
        bob.x=370;
        if(stage == 3)
        bob.x=370;
        if(stage == 4)
        bob.x=370;
    }
    
    //WALL LEFT
    if(xB < 30)
    {
        bob.x=30;
    }
    
    ////////////////////////////////////////////
        
        if(yB < 400 && bEye == S1p2BG || bEye == S2BG ) 
        {
            if(stage == 1)
            bob.move(0, gravity);
            if(stage == 2)
            bob.move(0, gravity);
            if(stage == 4)
            bob.move(0, gravity);
            
        }

    ////////////////////////////////////////////
    
    if(timer == 0)
    {
        if(stage == 2)
            {
                timer = 15;
                removeAll();
                TS1();
            }
    }
    if(timer == 0)
    {
        if(stage == 3 )
        { 
            timer = 10
            removeAll();
            TS2();
        }
    }
    
    if(stage == 4)
    {
        var pianoeye = getElementAt(piano.getX()+75, piano.getY()+100);
        var pianoeye2 = getElementAt(piano.getX()+50, piano.getY()+100);
        var pianoeye3 = getElementAt(piano.getX()+100, piano.getY()+100);
        var pianoeye4 = getElementAt(piano.getX()+25, piano.getY()+100);
        var pianoeye5 = getElementAt(piano.getX(), piano.getY()+25);
        
        if(pianoeye == BA)
        {
            remove(piano);
            pianoflag = false;
        }
        if(pianoeye2 == BA)
        {
            remove(piano);
            pianoflag = false;
        }
        if(pianoeye3 == BA)
        {
            remove(piano);
            pianoflag = false;
        }
        if(pianoeye4 == BA)
        {
            remove(piano);
            pianoflag = false;
        }
        if(pianoeye5 == BA)
        {
            remove(piano);
            pianoflag = false;
        }
        
        var guitareye = getElementAt(guitarr.getX()+25, guitarr.getY()+100);
        var guitareye2 = getElementAt(guitarr.getX()+15, guitarr.getY()+100);
        var guitareye3 = getElementAt(guitarr.getX()+35, guitarr.getY()+100);
        
        if(guitareye == BA)
        {
            remove(guitarr);
            guitarrflag = false;
        }
        
        if(guitareye2 == BA)
        {
            remove(guitarr);
            guitarrflag = false;
        }
        
        if(guitareye3 == BA)
        {
            remove(guitarr);
            guitarrflag = false;
        }
        
        var DSeye = getElementAt(DS.getX()+50, DS.getY()+100);
        var DSeye2 = getElementAt(DS.getX()+25, DS.getY()+100);
        var DSeye3 = getElementAt(DS.getX()+75, DS.getY()+100);
        var DSeye4 = getElementAt(DS.getX()+100, DS.getY()+100);
        
        if(DSeye == BA)
        {
            remove(DS);
            DSflag = false;
        }
        
        if(DSeye2 == BA)
        {
            remove(DS);
            DSflag = false;
        }
        
        if(DSeye3 == BA)
        {
            remove(DS);
            DSflag = false;
        }
        
        if(DSeye4 == BA)
        {
            remove(DS);
            DSflag = false;
        }
        
        if(DSflag == false && pianoflag == false && guitarrflag == false)
        {
            var MDeye0 = getElementAt(MD.getX(), MD.getY()+100);
            var MDeye1 = getElementAt(MD.getX()+15, MD.getY()+100);
            var MDeye2 = getElementAt(MD.getX()+30, MD.getY()+100);
            var MDeye3 = getElementAt(MD.getX()+45, MD.getY()+100);
            var MDeye4 = getElementAt(MD.getX()+60, MD.getY()+100);
            
            if(MDeye0 == BA)
            {
                remove(MD);
                WinScreen();
            }
            
            if(MDeye1 == BA)
            {
                remove(MD);
                WinScreen();
            }
            
            if(MDeye2 == BA)
            {
                remove(MD);
                WinScreen();
            }
            
            if(MDeye3 == BA)
            {
                remove(MD);
                WinScreen();
            }
            
            if(MDeye4 == BA)
            {
                remove(MD);
                WinScreen();
            }
        }
    }
}

function move()
{
    yB = bob.getY();
    
    if(yB < 400)
    {
        bob.move(0, gravity);
    }
}

function move2()
{
    
    if((tuba.getX() > 330))
    dxx = -dxx 
    
    if((tuba.getX() < 10))
    dxx = -dxx 
    
    tuba.move(dxx,0);
    
    if((guitar.getX() > 300))
    dxxx = -dxxx 
    
    if((guitar.getX() < 10))
    dxxx = -dxxx 
    
    guitar.move(dxxx,0);
    
    if((BassD.getX() > 300))
    dxxxx = -dxxxx 
    
    if((BassD.getX() < 10))
    dxxxx = -dxxxx 
    
    BassD.move(dxxxx,0);
}

function move3()
{
    if((MNE1.getY() > 480))
    MNE1.y=-120
    
    MNE1.move(0,dyy);
    
    if((MNE2.getY() > 480))
    MNE2.y=-200
    
    MNE2.move(0,dyyy);
    
    if((MNE3.getY() > 480))
    MNE3.y=-90
    
    MNE3.move(0,dyyyy);
    
    if((MNE4.getY() > 480))
    MNE4.y=-150
    
    MNE4.move(0,dyyyyy);
}

function move4()
{
    if((MD.getX() > 350))
    dxxxxx = -dxxxxx
    
    if((MD.getX() < 0))
    dxxxxx = -dxxxxx
    
    MD.move(dxxxxx,0);
}

function countdown()
{
    timer--;
    text.setText(timer);

    check();
}

function WinScreen()
{
    removeAll();
    stopTimer(countdown)
    stopTimer(check);
    stopTimer(move4);
    stopTimer(attack);
    
    var background = new WebImage("data:image/jpeg;base64,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");
    background.setPosition(0,0);
    background.setSize(400,480);
    add(background);
    
    var WSB = new Circle(90);
    WSB.setPosition(100,390);
    WSB.setColor(Color.RED);
    add(WSB);
    
    var eye5 = new Circle(20);
    eye5.setPosition(70,360);
    eye5.setColor(Color.WHITE);
    add(eye5);
    
    var eye6 = new Circle(20);
    eye6.setPosition(130,360);
    eye6.setColor(Color.WHITE);
    add(eye6);
    
    var eye7 = new Circle(10);
    eye7.setPosition(130,370);
    eye7.setColor(Color.BLACK);
    add(eye7);
    
    var eye8 = new Circle(10);
    eye8.setPosition(70,370);
    eye8.setColor(Color.BLACK);
    add(eye8);
    
    var mouth3 = new Arc(20,180,360,0);
    mouth3.setPosition(100,420);
    mouth3.setColor(Color.BLACK);
    add(mouth3);
    
    var mouth4 = new Arc(10,180,360,0);
    mouth4.setPosition(100,420);
    mouth4.setColor(Color.RED);
    add(mouth4);
    
    var hat = new WebImage("http://pluspng.com/img-png/fedora-hat-png-county-line-black-felt-wide-brim-fedora-hat-right-side-view-1120.png")
    hat.setPosition(20,260);
    hat.setSize(150,100);
    add(hat);
    
    var trumpet = new WebImage("http://freepngdownload.com/image/trumpet-png-free-download-15.png");
    trumpet.setPosition(150,360);
    trumpet.setSize(150,100);
    add(trumpet);
}

function LoseScreen()
{
    removeAll();
    stopTimer(countdown)
    stopTimer(check);
    stopTimer(move4);
    stopTimer(attack);
    game_over = 1;
    
    var background = new WebImage("data:image/jpeg;base64,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");
    background.setPosition(0,0);
    background.setSize(400,480);
    add(background);
    
    var LSB = new Circle(90);
    LSB.setPosition(100,390);
    LSB.setColor(Color.RED);
    add(LSB);
    
    var eye1 = new Circle(20);
    eye1.setPosition(70,360);
    eye1.setColor(Color.WHITE);
    add(eye1);
    
    var eye2 = new Circle(20);
    eye2.setPosition(130,360);
    eye2.setColor(Color.WHITE);
    add(eye2);
    
    var eye3 = new Circle(10);
    eye3.setPosition(130,370);
    eye3.setColor(Color.BLACK);
    add(eye3);
    
    var eye4 = new Circle(10);
    eye4.setPosition(70,370);
    eye4.setColor(Color.BLACK);
    add(eye4);
    
    var mouth = new Arc(20,360,180,0);
    mouth.setPosition(100,420);
    mouth.setColor(Color.BLACK);
    add(mouth);
    
    var mouth2 = new Arc(10,360,180,0);
    mouth2.setPosition(100,420);
    mouth2.setColor(Color.RED);
    add(mouth2);
    
    var tear = new WebImage("https://pngimage.net/wp-content/uploads/2018/06/png-lagrima.png");
    tear.setPosition(130,360);
    tear.setSize(50,50);
    add(tear);
    
    var dunce = new WebImage("https://vignette.wikia.nocookie.net/roblox/images/8/83/Dunce_Cap.png/revision/latest?cb=20170212215813");
    dunce.setPosition(10,180);
    dunce.setSize(170,150);
    add(dunce);
    
}
