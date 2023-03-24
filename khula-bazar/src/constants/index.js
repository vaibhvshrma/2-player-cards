import mirrorKeys from "object-key-mirror";

export const PLAYER_1_ID = "player1";
export const PLAYER_2_ID = "player2";
export const HEARTS = "HEARTS";
export const DIAMONDS = "DIAMONDS";
export const SPADES = "SPADES";
export const CLUBS = "CLUBS";

// Card Suites
export const SuitesMap = new Map([
  ["HEARTS", "HEARTS"],
  ["DIAMONDS", "DIAMONDS"],
  ["CLUBS", "CLUBS"],
  ["SPADES", "SPADES"],
]);

export const ValuesMap = new Map([
  // ["V1", 1],
  // ["V2", 2],
  // ["V3", 3],
  // ["V4", 4],
  // ["V5", 5],
  // ["V6", 6],
  ["V7", 7],
  ["V8", 8],
  ["V9", 9],
  ["V10", 10],
  ["V11", 11], // Jack
  ["V12", 12], //Queen
  ["V13", 13], // King
  ["V14", 14], // Ace
]);

export const Suites = mirrorKeys([HEARTS, DIAMONDS, CLUBS, SPADES]);

export const Values = {
  // Values below 7 are not present in this game
  // V2: 2,
  // V3: 3,
  // V4: 4,
  // V5: 5,
  // V6: 6,
  V7: 7,
  V8: 8,
  V9: 9,
  V10: 10,
  V11: 11, // Jack
  V12: 12, // Queen
  V13: 13, // King
  V14: 14, // Ace
};

export const SuitesWithValue7Card = [HEARTS, SPADES];
