import { setContext, getContext } from 'svelte';
import {
  memoizeWith,
  identity,
  curry,
  pipe,
} from 'ramda';

const mem = fn => memoizeWith( identity, fn )

const incrementTs = clock => {
  clock.ts++;
  return clock;
}

const incrementClock = curry(( tickInterval, tickStep, clock ) => {
  if( clock.ts % tickInterval == clock.tick ){
      clock.tickInterval += tickStep
  }
  return clock;
})


function clockTicker( clock ) {
  const { tickInterval, tickStep, tickOffset } = clock;
  const onTick = pipe(
    incrementClock( tickInterval, tickStep ),
    incrementTs
  )
  clock.tick = tickOffset;

  return () => onTick( clock );
}



function startClock( ticker ) {
  setInterval( ticker, 0)
}


function getClockFn( id, tickInterval, tickStep, tickOffset, tick, ts ) {
  const clock = {
    id, tickInterval, tickStep, tickOffset, tick, ts,
    started: true,
  }
  const ticker = clockTicker( clock )

  setContext( id, clock);

  return clock
  //mem( partial( getContext, [id] ))
}

export const getClock = mem( getClockFn )
