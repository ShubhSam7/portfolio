export const moves = ["rock", "paper", "scissors"] as const;
export type Move = (typeof moves)[number];
export type RoundResult = "win" | "loss" | "draw";
export const winningScore = 3;

export const moveDetails: Record<Move, { label: string; key: string; image: string }> = {
  rock: { label: "Rock", key: "R", image: "/game/hand-rock.webp" },
  paper: { label: "Paper", key: "P", image: "/game/hand-paper.webp" },
  scissors: { label: "Scissors", key: "S", image: "/game/hand-scissors.webp" },
};
const beats: Record<Move, Move> = { rock: "scissors", paper: "rock", scissors: "paper" };
const explanations: Record<Move, string> = {
  rock: "Rock crushes scissors.",
  paper: "Paper covers rock.",
  scissors: "Scissors cut paper.",
};

export function resolveRound(player: Move, computer: Move): RoundResult {
  if (player === computer) return "draw";
  return beats[player] === computer ? "win" : "loss";
}

export function explainRound(player: Move, computer: Move) {
  const result = resolveRound(player, computer);
  return result === "draw" ? "Same hand. Great minds, apparently." : explanations[result === "win" ? player : computer];
}

export function pickComputerMove(random: () => number = Math.random): Move {
  return moves[Math.floor(random() * moves.length)];
}

export type GameState = {
  phase: "ready" | "shaking" | "result" | "finished";
  playerScore: number;
  computerScore: number;
  rounds: number;
  playerMove: Move | null;
  computerMove: Move | null;
  result: RoundResult | null;
};
export type GameAction =
  | { type: "start"; player: Move; computer: Move }
  | { type: "reveal" }
  | { type: "cancel" }
  | { type: "reset" };

export function createGame(): GameState {
  return { phase: "ready", playerScore: 0, computerScore: 0, rounds: 0, playerMove: null, computerMove: null, result: null };
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  if (action.type === "reset") return createGame();
  if (action.type === "start") {
    if (state.phase === "shaking" || state.phase === "finished") return state;
    return { ...state, phase: "shaking", playerMove: action.player, computerMove: action.computer, result: null };
  }
  if (action.type === "cancel") {
    if (state.phase !== "shaking") return state;
    return { ...state, phase: "ready", playerMove: null, computerMove: null, result: null };
  }
  if (action.type === "reveal" && state.phase === "shaking" && state.playerMove && state.computerMove) {
    const result = resolveRound(state.playerMove, state.computerMove);
    const playerScore = state.playerScore + (result === "win" ? 1 : 0);
    const computerScore = state.computerScore + (result === "loss" ? 1 : 0);
    return {
      ...state,
      phase: playerScore === winningScore || computerScore === winningScore ? "finished" : "result",
      rounds: state.rounds + 1,
      playerScore,
      computerScore,
      result,
    };
  }
  return state;
}
