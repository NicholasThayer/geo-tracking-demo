import {
  minToSec,
  secToMil
} from '../util';

export const appClock = {
  id: 'appClock',
  tickInterval: secToMil(2),
  tickStep: minToSec(10),
  tickOffset: 1588550400,
  tick:0,
  ts: 0
}
