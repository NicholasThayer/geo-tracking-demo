import { setContext, getContext } from 'svelte';
import {
  memoizeWith,
  identity,
  curry,
  pipe,
  merge,
  keys,
  reduce,
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

function stopClock( clock ){
  clock.started = false;
  clock.stop = () => clock
  clock.start = partial( startClock, [clock] )

  return clock;

}

function startClock( clock ) {
  clock.started = true;
  clock.start = () => clock
  const interval = setInterval( ticker( clock ), 0);
  clock.stop = pipe(
    () => clearInterval( interval ),
     partial( stopClock, [ clock ]))

  return clock;
}

function resetClock( original, current ){
  current.stop()
  return reduce(( cur, key ) => {
    cur[key] = original[key]
    return cur;
  })
}

function createClock( clockOpts ) {
  const clock = { ...clockOpts };
  clock.start = partial( startClock, [clock])
  clock.stop = partial( stopClock, [clock])
  clock.reset = partial( resetClock, [ clockOpts, clock ])

  return clock.reset()
}

function getClockFn( id, tickInterval, tickStep, tickOffset, tick, ts ) {
  const clock = createClock({
    id, tickInterval, tickStep, tickOffset, tick, ts
  })

  setContext( id, clock);

  return clock;
}

export const getClock = mem( getClockFn )
