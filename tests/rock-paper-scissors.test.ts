import assert from "node:assert/strict";
import { test } from "node:test";
import { createGame, explainRound, gameReducer, pickComputerMove, resolveRound, type GameState, type Move, type RoundResult } from "../lib/rock-paper-scissors";

function round(state: GameState, player: Move, computer: Move) {
  return gameReducer(gameReducer(state, { type: "start", player, computer }), { type: "reveal" });
}

test("all nine combinations follow rock-paper-scissors rules", () => {
  const cases: [Move, Move, RoundResult][] = [
    ["rock", "rock", "draw"], ["rock", "paper", "loss"], ["rock", "scissors", "win"],
    ["paper", "rock", "win"], ["paper", "paper", "draw"], ["paper", "scissors", "loss"],
    ["scissors", "rock", "loss"], ["scissors", "paper", "win"], ["scissors", "scissors", "draw"],
  ];
  for (const [player, computer, expected] of cases) assert.equal(resolveRound(player, computer), expected);
  assert.equal(explainRound("paper", "rock"), "Paper covers rock.");
  assert.equal(explainRound("rock", "paper"), "Paper covers rock.");
});

test("computer selection maps each third of the random range to one move", () => {
  assert.equal(pickComputerMove(() => 0), "rock");
  assert.equal(pickComputerMove(() => .3334), "paper");
  assert.equal(pickComputerMove(() => .9999), "scissors");
});

test("draws count as rounds but never award points", () => {
  const state = round(createGame(), "rock", "rock");
  assert.equal(state.rounds, 1);
  assert.equal(state.playerScore, 0);
  assert.equal(state.computerScore, 0);
  assert.equal(state.phase, "result");
});

test("the first player to three ends the match and further plays are ignored", () => {
  for (const winner of ["player", "computer"] as const) {
    let state = createGame();
    for (let i = 0; i < 3; i++) state = round(state, winner === "player" ? "paper" : "rock", winner === "player" ? "rock" : "paper");
    assert.equal(state.phase, "finished");
    assert.equal(winner === "player" ? state.playerScore : state.computerScore, 3);
    assert.equal(gameReducer(state, { type: "start", player: "scissors", computer: "paper" }), state);
    assert.equal(gameReducer(state, { type: "reveal" }), state);
  }
});

test("rapid choices and duplicate reveals cannot double count a round", () => {
  let state = gameReducer(createGame(), { type: "start", player: "paper", computer: "rock" });
  assert.equal(gameReducer(state, { type: "start", player: "rock", computer: "paper" }), state);
  state = gameReducer(state, { type: "reveal" });
  assert.equal(state.playerScore, 1);
  assert.equal(state.rounds, 1);
  assert.equal(gameReducer(state, { type: "reveal" }), state);
});

test("closing mid-reveal preserves completed scores and discards the pending round", () => {
  let state = round(createGame(), "paper", "rock");
  state = gameReducer(state, { type: "start", player: "rock", computer: "paper" });
  state = gameReducer(state, { type: "cancel" });
  assert.equal(state.phase, "ready");
  assert.equal(state.playerScore, 1);
  assert.equal(state.rounds, 1);
  assert.equal(state.playerMove, null);
  assert.equal(gameReducer(state, { type: "reveal" }), state);
});

test("reset clears a pending match and late reveals remain harmless", () => {
  let state = round(createGame(), "rock", "paper");
  state = gameReducer(state, { type: "start", player: "paper", computer: "rock" });
  state = gameReducer(state, { type: "reset" });
  assert.deepEqual(state, createGame());
  assert.deepEqual(gameReducer(state, { type: "reveal" }), createGame());
});
