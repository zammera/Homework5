/* ****************************************************************************
*File: script.js 
*GUI Assignment:  Creating a row of functioning Scrabble 
*Allen Zammer, UMass Lowell Computer Science, allen_zammer@student.uml.edu 
*Copyright (c) 2024 by Allen.  All rights reserved.  May be freely copied or 
*excerpted for educational purposes with credit to the author. 
*updated by AZ on December 20, 2024 at  1:08 PM
*******************************************************************************/
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = {"src": "images/Tiles/Scrabble_Tile_A.jpg", "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["B"] = {"src": "images/Tiles/Scrabble_Tile_B.jpg", "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["C"] = {"src": "images/Tiles/Scrabble_Tile_C.jpg", "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["D"] = {"src": "images/Tiles/Scrabble_Tile_D.jpg", "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["E"] = {"src": "images/Tiles/Scrabble_Tile_E.jpg", "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
ScrabbleTiles["F"] = {"src": "images/Tiles/Scrabble_Tile_F.jpg", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["G"] = {"src": "images/Tiles/Scrabble_Tile_G.jpg", "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
ScrabbleTiles["H"] = {"src": "images/Tiles/Scrabble_Tile_H.jpg", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["I"] = {"src": "images/Tiles/Scrabble_Tile_I.jpg", "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["J"] = {"src": "images/Tiles/Scrabble_Tile_J.jpg", "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["K"] = {"src": "images/Tiles/Scrabble_Tile_K.jpg", "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["L"] = {"src": "images/Tiles/Scrabble_Tile_L.jpg", "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["M"] = {"src": "images/Tiles/Scrabble_Tile_M.jpg", "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["N"] = {"src": "images/Tiles/Scrabble_Tile_N.jpg", "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["O"] = {"src": "images/Tiles/Scrabble_Tile_O.jpg", "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
ScrabbleTiles["P"] = {"src": "images/Tiles/Scrabble_Tile_P.jpg", "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Q"] = {"src": "images/Tiles/Scrabble_Tile_Q.jpg", "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["R"] = {"src": "images/Tiles/Scrabble_Tile_R.jpg", "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["S"] = {"src": "images/Tiles/Scrabble_Tile_S.jpg", "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["T"] = {"src": "images/Tiles/Scrabble_Tile_T.jpg", "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["U"] = {"src": "images/Tiles/Scrabble_Tile_U.jpg", "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["V"] = {"src": "images/Tiles/Scrabble_Tile_V.jpg", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["W"] = {"src": "images/Tiles/Scrabble_Tile_W.jpg", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["X"] = {"src": "images/Tiles/Scrabble_Tile_X.jpg", "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["Y"] = {"src": "images/Tiles/Scrabble_Tile_Y.jpg", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Z"] = {"src": "images/Tiles/Scrabble_Tile_Z.jpg", "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["_"] = {"src": "images/Tiles/Scrabble_Tile_Blank.jpg", "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;
//Thank you, Jesse M. Heines, for the tile setup, this was given by the proffessor
//Thank you, yong cho for the images for the scrabble board, Images take from here http://yongcho.github.io/GUI-Programming-1/assignment9.html

//This Class to help with the creation of the board
class board {
    constructor(row, col) {
        const squares = [
            { classes: "square blank-square ui-droppable" },
            { classes: "square double-square ui-droppable" },
        ];
        const $board = $("#board");
        for(let y = 1; y <= row; y++) {
            for(let x = 1; x <= col; x++){
                const boardSquare = $("<div>");
                if( x == 2 || x == 6) {
                    boardSquare.addClass(squares[1].classes);
                } else {
                    boardSquare.addClass(squares[0].classes);
                }
                $board.append(boardSquare);
            }
        }
    }

}

//This Class is to help the creation of tiles
class tile {
    constructor(tileName, tileNumber){
        this.tileName = tileName;
        const tiles = {classes: "tile ui-widget-content ui-draggable", id: "tile" + tileNumber};
        const $rack = $("#rack");
        const newTile = $("<img>");
        newTile.attr("src", ScrabbleTiles[tileName].src);
        newTile.addClass(tiles.classes);
        newTile.attr("id", tiles.id,);
        newTile.val(tileName);
        $rack.append(newTile);
        makeDraggable(newTile);
    }
}

//This Class controls the main functions of the game.
class gameloop{
    //constructs a board and 7 tiles on the rack and makes sure every value like score is set to zero
    constructor(row, col) {
        //create the board based on specivide instructions from user
        const gameboard = new board(row, col);
        //populate the rack with seven tiles
        this.currentTiles = [6];
        this.tilesUsed=0;
        for(let i = 0; i < 7; i++){0
            let tileLetter = this.pullFromBag(); 
            this.tilesUsed++;
            console.log("this is the tile chosen: ", tileLetter);
            new tile(tileLetter, this.tilesUsed);
            console.log("tile chosen: ",tileLetter);
        }

        this.totalTiles = this.tilesLeft();
        this.localScore = 0;
        this.score = 0;
        this.highScore = 0;
        this.updateTileAmount();
    }

    //calculates the amount of tiles left and returns that number.
    tilesLeft() {
        var total = 0;
        for(let tile in ScrabbleTiles) {
            total += ScrabbleTiles[tile]["number-remaining"];
        }
        console.log("Total Remaining Tiles: ", total);
        return total;
    }

    //Simulates pulling a tile from the back, dynamically updates based on how ScrabbleTiles has been changed
    pullFromBag() {
        var totalTiles = this.tilesLeft();
        if (totalTiles === 0) {
            console.log("out of tiles!");
            return null;
        }
        let randomNum = Math.floor(Math.random() * totalTiles) + 1;

        let tileRange = 0;
        for (let tile in ScrabbleTiles) {
            tileRange += ScrabbleTiles[tile]["number-remaining"];
            if(randomNum <= tileRange ) {
                ScrabbleTiles[tile]["number-remaining"]--;
                return tile;
            }
        }
    }

    //updates what the current word being spelled on the board is and updates the HTML to display the word to the user
    updateWord() {
        var tilesOnBoard = $("#board").find(".tile");
        console.log(tilesOnBoard);
        var word = "";
        tilesOnBoard.each(function() {
            word += $(this).val();
        });
        $("#updateWord").text(word);
    }

    //updates the current amount of tiles left on the HTML so the user can see it
    updateTileAmount() {
        $( "#updateTileAmount" ).text(this.tilesLeft());
    }

    //updated the HTML to show the users current score based on what is placed on the board
    updateScoreHTML() {
        var score = this.score;
        console.log("score when enter:",score);
        var localScore = 0;
        var tilesOnBoard = $("#board").find(".tile");
        tilesOnBoard.each(function() {
            localScore += ScrabbleTiles[$(this).val()].value;

        });
        tilesOnBoard.each(function() {            
            if($(this).parent().hasClass("double-square")){
                console.log("score was X2");
                localScore *= 2;
            }
        });
        this.localScore = localScore;
        score += localScore
        $( "#updateScore" ).text(score);
        console.log("score after:",score);
        console.log("localScore After:",localScore);
    }

    //updated the HTML to show the users the current stored highScore
    updateHighScoreHTML() {
        $( "#updateHighScore" ).text(this.highScore);
    }

    //updated the score variable and checks if the high score needs to be updated. Only called on submit
    updateScore() {
        //update the total score aka score + localScore
        this.score += this.localScore;
        if(this.score > this.highScore) {
            this.highScore = this.score;
            this.updateHighScoreHTML();
        }
    }

    //Calls all of the funtions that need to be check everytime a new tile is placed.
    onTilePlace() {
        this.updateWord();
        this.updateScoreHTML();
        if(!this.valid()) {
            this.notValid();
        }
    }

    //clears the board by removing the tiles off of the board and keeps count of the tiles removed and returns that value
    clearBoard () {
        console.log("clearBoard is called");
        var tilesOnBoard = $("#board").find(".tile");
        var amountRemoved = 0;
        let game = this
        tilesOnBoard.each(function() {
            makeDroppable($(this).parent(), game);
            $(this).remove();
            amountRemoved++;
        });
        return amountRemoved;
        
    }

    //clears all of the tiles off of the rack only for use during reset of game.
    clearRack() {
        console.log("clearBoard is called");
        var tilesOnBoard = $("#rack").find(".tile");
        console.log("tilesOnBoard: ", tilesOnBoard);
        let game = this
        tilesOnBoard.each(function() {
            // console.log(this, " is going to be removed");
            // makeDroppable($(this).parent(), game);
            $(this).remove();
        });
    }

    //this function handles reseting the game by calling several functions and setting several peramiters to 0. as well as puts seven new tiles on the rack and resets the distrubiton of tiles
    gameReset () {
        console.log("reset called!")
        for(let tile in ScrabbleTiles) {
            ScrabbleTiles[tile]["number-remaining"] = ScrabbleTiles[tile]["original-distribution"];
        }
        this.clearBoard();
        this.clearRack();
        this.updateTileAmount();
        this.tilesUsed = 0;
        this.localScore = 0;
        this.score = 0;
        for(let i = 0; i < 7; i++){
            let tileLetter = this.pullFromBag(); 
            this.tilesUsed++;
            console.log(tileLetter);
            new tile(tileLetter, this.tilesUsed);
        }
        this.updateWord();
        this.updateScore();
        this.updateScoreHTML();
        this.updateTileAmount();
        if(!this.valid()) {
            this.notValid();
        }

    }
    
    //Clears the board, updates the score, and adds in need new tiles.
    submitWord() {
        console.log("submitWord is called")
        this.updateScore();
        var tilesToReplace = this.clearBoard();
        this.updateScoreHTML();
        for(let i = 1; i <= tilesToReplace; i++){
            let tileLetter = this.pullFromBag();
            if (tileLetter != null) { 
                this.tilesUsed++;
                new tile(tileLetter, this.tilesUsed);
            }
        }
        this.updateTileAmount();
        var tilesOnRack = $("#rack").find(".tile");
        if(this.tilesLeft <= 0 || tilesOnRack.length < 5){
            alert("Please Reset to keep playing");
        }
    }

    //retrurns true if the tiles placed have a gap between them
    isGap() {
        var $board  = $( "#board" );
        var $childrenOfBoard = $("#board").children();
        var tileplaced, hasGap, isBlank = false;
        for(let i = 0; i < $childrenOfBoard.length; i++){
            if(tileplaced && isBlank && ($($childrenOfBoard[i]).children().length > 0)){
                hasGap = true;
            }
            if(!($($childrenOfBoard[i]).children().length > 0) && tileplaced) {
                isBlank = true;
            }
            if(($($childrenOfBoard[i]).children().length > 0) && !(tileplaced)) {
                tileplaced = true;
            }
        }
        return hasGap;
    }

    //returns true if there are two letters on the board
    isTwoLetters() {
        var tilesOnBoard = $("#board").find(".tile");
        return tilesOnBoard.length >= 2;
    }

    //checks if the current tiles on the board are valid, adjusts the HTML accordingly ,and enables the submit button, else calls notValid
    valid() {
        if(!this.isGap() && this.isTwoLetters()){
            $("#submit").prop("disabled", false);
            $("#two").removeClass("not-valid");
            $("#gap").removeClass("not-valid");
            return true;
        }
        return false;
    }

    //checks why the tiles on the board are invalid and adjust the HTML accordingly. disables the submit button
    notValid() {
        if(this.isGap()) {
            $("#gap").addClass("not-valid");
        }
        else {
            $("#gap").removeClass("not-valid");
        }
        if(!this.isTwoLetters()) {
            $("#two").addClass("not-valid");
        }
        else {
            $("#two").removeClass("not-valid");
        }
        $("#submit").prop("disabled", true);

    }
}

//allows zones to become droppable and makes sure they follow all of the proper rules
function makeDroppable(selector, game){
    $( selector ).droppable({
        tolerance: "pointer",
        over: function (event, ui) {
            if($(this).data("occupied")) {
                $(this).addClass("occupied-warning");
            }
        }, 
        out: function (event, ui){
           $(this).removeClass("occupied-warning");
           $(this).droppable("enable");
        },
        drop: function (event, ui) {
            tileName = ui.draggable.val();
            // if (tileName == "_"){
            //     tileName = popup();
            //     tileName = $("#choosenLetter").data("letter");
            //     console.log("choosen letter: ", tileName);
            // }
            const tiles = {classes: "tile ui-widget-content ui-draggable", id: ui.draggable.attr("id")};
            const newTile = $("<img>");
            newTile.attr("src", ScrabbleTiles[tileName].src);
            newTile.addClass(tiles.classes);
            newTile.attr("id", tiles.id,);
            newTile.val(tileName);
            $(this).append(newTile);
            console.log(ui.draggable.parent().hasClass("square"));
            if(ui.draggable.parent().hasClass("square")) {
               makeDroppable( ui.draggable.parent(), game);
            }   
            ui.draggable.remove();
            makeDraggable(newTile);
            if($(this).hasClass("square")) {
                $(this).droppable("destroy");
            }
            game.onTilePlace();
        }
    });
};

//allows for a tile to become draggable and make sure that they all follow the same rules
function makeDraggable(selector){
    selector.draggable({
        start: function(event, ui) {
          $(this).css("z-index", 999);
          $(this).draggable("option", "revert", "invalid");
        },
        stop: function() {
          $(this).css("z-index", "");
          console.log($(this).parent().hasClass("square"));
         
        }
      });
};

//this was a function I made in an attempt to get the blank tile working
function popup(){
    $("#popup-overlay").fadeIn();
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    letters.forEach(function (letter) {
        $("<button>")
            .addClass("letter-button")
            .text(letter)
            .attr("data-letter", letter)
            .appendTo("#letter-buttons-container");
    });

    // Handle letter button clicks
    $(document).on("click", ".letter-button", function () {
        const selectedLetter = $(this).data("letter");
        $("#popup-overlay").fadeOut();
        $("#choosenLetter").attr("data-letter", selectedLetter);
        return selectedLetter;
    });
}

//this is what makes the magic happens it creates a game loop
$(function () {
    game = new gameloop(1,7);
    $( "#submit" ).click(function () {
        game.submitWord();
    });
    $("#restart").click(function () {
        game.gameReset();
    });
    makeDroppable($( ".ui-droppable "), game);
    makeDroppable($("#rack"), game);
});
