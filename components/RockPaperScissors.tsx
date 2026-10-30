"use client";

import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import Image from "next/image";
import { Gamepad2, RotateCcw, Trophy, X } from "lucide-react";
import { createGame, explainRound, gameReducer, moveDetails, moves, pickComputerMove, winningScore, type Move } from "@/lib/rock-paper-scissors";

export function RockPaperScissors() {
  const [game, dispatch] = useReducer(gameReducer, undefined, createGame);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousOverflow = useRef("");
  const shaking = game.phase === "shaking";
  const finished = game.phase === "finished";
  const revealed = game.phase === "result" || finished;
  const playerWonMatch = finished && game.playerScore === winningScore;

  const cancelPendingRound = useCallback(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => {
    const modal = dialog.current;
    return () => {
      cancelPendingRound();
      if (modal?.open) document.body.style.overflow = previousOverflow.current;
    };
  }, [cancelPendingRound]);

  const playRound = useCallback((move: Move) => {
    if (!dialog.current?.open || timer.current !== null || game.phase === "shaking" || game.phase === "finished") return;
    // Choose before the reveal, independently of the player's hand.
    const computer = pickComputerMove();
    dispatch({ type: "start", player: move, computer });
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1050;
    timer.current = setTimeout(() => {
      timer.current = null;
      dispatch({ type: "reveal" });
    }, delay);
  }, [game.phase]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Tab") {
        const modal = dialog.current;
        const controls = modal?.querySelectorAll<HTMLButtonElement>("button:not(:disabled)");
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (first && last && (!modal?.contains(document.activeElement) || (!event.shiftKey && document.activeElement === last) || (event.shiftKey && document.activeElement === first))) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        }
        return;
      }
      if (event.repeat || event.altKey || event.ctrlKey || event.metaKey || event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || (event.target instanceof HTMLElement && event.target.isContentEditable)) return;
      const move = moves.find(option => moveDetails[option].key.toLowerCase() === event.key.toLowerCase());
      if (move) { event.preventDefault(); playRound(move); }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, playRound]);

  function openGame() {
    if (!dialog.current || dialog.current.open) return;
    previousOverflow.current = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = "hidden";
    setOpen(true);
  }

  function onClose() {
    cancelPendingRound();
    dispatch({ type: "cancel" });
    document.body.style.overflow = previousOverflow.current;
    setOpen(false);
  }

  function resetMatch() {
    cancelPendingRound();
    dispatch({ type: "reset" });
  }

  const title = finished ? playerWonMatch ? "Okay, you got me." : "The bot takes this one." : shaking ? "Rock. Paper. Scissors!" : game.result === "win" ? "That round’s yours." : game.result === "loss" ? "The bot got lucky." : game.result === "draw" ? "We’re thinking alike." : "Make your move.";
  const explanation = revealed && game.playerMove && game.computerMove ? explainRound(game.playerMove, game.computerMove) : "Pick a hand below. First to three wins.";
  const roundNumber = game.phase === "ready" || shaking ? game.rounds + 1 : game.rounds;

  return <>
    <button className="game-launcher" type="button" onClick={openGame} aria-haspopup="dialog" aria-controls="rps-dialog"><Gamepad2 size={16} /> Play a quick game</button>
    <dialog id="rps-dialog" ref={dialog} className="rps-dialog" aria-labelledby="rps-title" aria-describedby="rps-description" onClose={onClose}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close();
      }}>
      <button className="rps-close" type="button" aria-label="Close game" onClick={() => dialog.current?.close()} autoFocus><X size={19} /></button>
      <div className="rps-heading"><span className="rps-eyebrow"><Gamepad2 size={14} /> A TINY SIDE QUEST</span><h2 id="rps-title">Best <em>hand</em> wins.</h2><p id="rps-description">Rock, paper, scissors against a random bot. First to three.</p></div>
      <div className="rps-scoreboard" aria-label="Match score">
        <div className="rps-score-player"><span>You</span><strong>{game.playerScore}</strong><div className="rps-score-dots" aria-hidden="true">{Array.from({ length: winningScore }, (_, i) => <i key={i} className={i < game.playerScore ? "filled" : ""} />)}</div></div>
        <div className="rps-round"><span>{finished ? "MATCH COMPLETE" : `ROUND ${roundNumber}`}</span><b>VS</b></div>
        <div><span>Shubh’s bot</span><strong>{game.computerScore}</strong><div className="rps-score-dots" aria-hidden="true">{Array.from({ length: winningScore }, (_, i) => <i key={i} className={i < game.computerScore ? "filled" : ""} />)}</div></div>
      </div>
      <div className={`rps-arena ${shaking ? "is-shaking" : ""} ${finished ? "is-finished" : ""}`} aria-hidden="true">
        <div className={`rps-side ${revealed && game.result === "win" ? "is-winner" : ""}`}><div className="rps-hand"><Image src={moveDetails[revealed && game.playerMove ? game.playerMove : "rock"].image} width={160} height={200} alt="" unoptimized /></div><span>{revealed && game.playerMove ? moveDetails[game.playerMove].label : "Your hand"}</span></div>
        <span className="rps-arena-mark">{finished ? <Trophy size={24} /> : shaking ? "…" : "✦"}</span>
        <div className={`rps-side rps-bot ${revealed && game.result === "loss" ? "is-winner" : ""}`}><div className="rps-hand"><Image src={moveDetails[revealed && game.computerMove ? game.computerMove : "rock"].image} width={160} height={200} alt="" unoptimized /></div><span>{revealed && game.computerMove ? moveDetails[game.computerMove].label : "No peeking"}</span></div>
      </div>
      <div className={`rps-result ${revealed ? `rps-result-${game.result}` : ""}`} role="status" aria-live="polite" aria-atomic="true">
        <h3>{title}</h3><p>{finished ? `${playerWonMatch ? "You win the match!" : "The bot wins the match."} ${game.playerScore}–${game.computerScore}. Fancy a rematch?` : shaking ? "Hands locked in. Here comes the reveal…" : explanation}</p>
        {revealed && <span className="rps-screen-reader">You chose {game.playerMove}. The bot chose {game.computerMove}. Score: You {game.playerScore}, bot {game.computerScore}.</span>}
      </div>
      <div className="rps-choices" role="group" aria-label={finished ? "Match complete" : "Choose your hand"}>
        {moves.map(move => <button key={move} className={`rps-choice ${revealed && game.playerMove === move ? "is-selected" : ""}`} type="button" aria-label={`Choose ${moveDetails[move].label}`} disabled={shaking || finished} onClick={() => playRound(move)}>
          <span className="rps-choice-art" aria-hidden="true"><Image src={moveDetails[move].image} alt="" width={60} height={75} unoptimized /></span><span>{moveDetails[move].label}</span><kbd aria-hidden="true">{moveDetails[move].key}</kbd>
        </button>)}
      </div>
      <div className="rps-footer"><span>{finished ? "No hard feelings. Probably." : revealed ? "Pick another hand to play the next round." : "Keyboard? Use R, P, or S."}</span><button type="button" onClick={resetMatch} className={finished ? "rps-rematch" : ""}><RotateCcw size={13} />{finished ? "Play again" : "Start over"}</button></div>
    </dialog>
  </>;
}
